using Api.Context;
using Api.Models.Disciplines;
using Api.Models.GroupDisciplines;
using Api.Models.Groups;
using Api.Models.Groups.Commands;
using Api.Models.Groups.Queries;
using Api.Models.Students;
using Api.Models.Works;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using DocumentFormat.OpenXml.Office2010.Excel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

public sealed class GroupController(IMapper mapper) : BaseController
{
    [HttpGet("{id:int}")]
    public async Task<ActionResult<GroupViewModel[]>> Get(
        int id,
        [FromServices] ApiDbContext context)
    {
        return Ok(await context.Groups
            .AsNoTracking()
            .Include(e => e.Course)
            .Include(e => e.Semester)
            .Include(e => e.GroupDisciplines)
            .ProjectTo<GroupViewModel>(mapper.ConfigurationProvider)
            .FirstOrDefaultAsync(e => e.Id == id));
    }

    [HttpGet("{id:int}/students")]
    public async Task<ActionResult<StudentViewModel[]>> GetStudents(
        int id,
        [FromServices] ApiDbContext context)
    {
        return Ok(await context.Students
            .AsNoTracking()
            .Include(e => e.User)
            .Include(e => e.Group)
            .Where(e => e.GroupId == id)
            .ProjectTo<StudentViewModel>(mapper.ConfigurationProvider)
            .OrderBy(e => e.IsRetired)
            .ToListAsync());
    }

    [HttpGet("{id:int}/disciplines")]
    public async Task<IResult> GetDisciplines(
        int id,
        [FromServices] ApiDbContext context)
    {
        var allDisciplines = await context.Disciplines
            .AsNoTracking()
            .ProjectTo<DisciplineViewModel>(mapper.ConfigurationProvider)
            .ToListAsync();

        var selectedDisciplines = await context.GroupDisciplines
            .AsNoTracking()
            .Include(e => e.Discipline)
            .Where(e => e.GroupId == id)
            .Select(e => e.Discipline)
            .ProjectTo<DisciplineViewModel>(mapper.ConfigurationProvider)
            .ToListAsync();
        selectedDisciplines.Reverse();
        
        var selectedDisciplinesSorted = await context.GroupDisciplines
            .AsNoTracking()
            .Include(e => e.Discipline)
            .Where(e => e.GroupId == id)
            .Select(e => e.Discipline)
            .ProjectTo<DisciplineViewModel>(mapper.ConfigurationProvider)
            .OrderBy(x => x.Id)
            .ToListAsync();
        
        var notSelectedDisciplinesId = allDisciplines.Select(x => x.Id).Except(selectedDisciplines.Select(x => x.Id)).ToList();
        
        List<DisciplineViewModel> notSelectedDisciplines = new(); 
        notSelectedDisciplinesId.ForEach(x => notSelectedDisciplines.Add(allDisciplines!.FirstOrDefault(y => y.Id == x)!));
        
        return Results.Json(new {selectedDisciplinesSorted, selectedDisciplines, notSelectedDisciplines});
    }

    [HttpGet("{id:int}/works")]
    public async Task<ActionResult<WorkViewModel[]>> GetWorks(
        int id,
        [FromQuery] GetGroupWorksQuery query,
        [FromServices] ApiDbContext context)
    {
        var worksQuery = context.GroupWorks
            .Include(e => e.Group)
            .Include(e => e.Work)
            .ThenInclude(e => e.WorkType)
            .Include(e => e.Work)
            .ThenInclude(e => e.WorkMarks)
            .ThenInclude(e => e.Mark)
            .Include(e => e.Work)
            .ThenInclude(e => e.Tasks)
            .Where(e => e.GroupId == id)
            .Where(e => e.CourseId == e.Group.CourseId)
            .Where(e => e.SemesterId == e.Group.SemesterId)
            .AsNoTracking();

        if (query.DisciplineId is not null)
        {
            worksQuery = worksQuery.Where(e => e.DisciplineId == query.DisciplineId);
        }

        return Ok(await worksQuery
            .Select(e => e.Work)
            .ProjectTo<WorkViewModel>(mapper.ConfigurationProvider)
            .ToListAsync());
    }

    [HttpGet]
    public async Task<ActionResult<GroupViewModel[]>> Get(
        [FromServices] ApiDbContext context)
    {
        return Ok(await context.Groups
            .AsNoTracking()
            .Include(e => e.Course)
            .Include(e => e.Semester)
            .Include(e => e.GroupDisciplines)
            .ThenInclude(e => e.Discipline)
            .ProjectTo<GroupViewModel>(mapper.ConfigurationProvider)
            .ToListAsync());
    }

    [HttpPost]
    public async Task<ActionResult> Post(
        [FromBody] GroupCommand command,
        [FromServices] ApiDbContext context)
    {
        var group = mapper.Map<Group>(command);

        await context.AddAsync(group);
        await context.SaveChangesAsync();

        if (command.DisciplineIds is not null)
        {
            var groupDisciplines = command.DisciplineIds
                .Select(disciplineId => new GroupDiscipline
                {
                    GroupId = group.Id,
                    DisciplineId = disciplineId,
                });

            await context.AddRangeAsync(groupDisciplines);
        }

        await context.SaveChangesAsync();

        return Created(string.Empty, group.Id);
    }

    [HttpPut("idGroup={idGroup:int}&idDiscipline={idDiscipline:int}")]
    public async Task<ActionResult> Put(
        int idGroup,
        int idDiscipline,
        [FromServices] ApiDbContext context)
    {

        var group = await context.Groups.Include(x => x.GroupDisciplines).AsNoTracking().FirstOrDefaultAsync(x => x.Id == idGroup);

        var groupDiscipline = new GroupDiscipline()
        {
            DisciplineId = idDiscipline,
            GroupId = idGroup
        };
        
        if (group!.GroupDisciplines.Any(x => x.DisciplineId == idDiscipline))
            context.GroupDisciplines.Remove(groupDiscipline);
        else
            context.GroupDisciplines.Add(groupDiscipline);

        await context.SaveChangesAsync();
        return Ok();
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult> Put(
        int id,
        [FromBody] GroupCommand command,
        [FromServices] ApiDbContext context)
    {
        var group = await context.Groups
            .AsNoTracking()
            .FirstOrDefaultAsync(e => e.Id == id);

        if (group is null)
        {
            return NotFound();
        }

        if (command.DisciplineIds is not null)
        {
            await context.GroupDisciplines
                .Where(e => e.GroupId == id)
                .AsNoTracking()
                .ExecuteDeleteAsync();

            var groupDisciplines = command.DisciplineIds
                .Select(disciplineId => new GroupDiscipline
                {
                    GroupId = group.Id,
                    DisciplineId = disciplineId,
                });

            await context.AddRangeAsync(groupDisciplines);
        }

        group.Name = command.Name;
        group.Year = command.Year;
        group.CourseId = command.CourseId;
        group.SemesterId = command.SemesterId;

        context.Update(group);
        await context.SaveChangesAsync();

        return Ok();
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult> Delete(
        int id,
        [FromServices] ApiDbContext context)
    {
        var group = await context.Groups
            .AsNoTracking()
            .FirstOrDefaultAsync(e => e.Id == id);

        if (group is null)
        {
            return NotFound();
        }

        context.Remove(group);
        await context.SaveChangesAsync();

        return Ok();
    }
}