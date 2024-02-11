using Api.Context;
using Api.Models.CompletedWorkTasks;
using Api.Models.Students;
using Api.Models.WorkMarks;
using Api.Models.Works;
using Api.Models.Works.Commands;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using DocumentFormat.OpenXml.Office2010.ExcelAc;
using DocumentFormat.OpenXml.Office2013.Drawing.ChartStyle;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

public class CompletedWorkAndMarks
{
    public string StudentName { get; set; }
    public string StudentSurname { get; set; }
    public int[] CompletedTasks { get; set; }
    public int IdStudent { get; set; }
    public int IdWork { get; set; }
    public double Percentage { get; set; }
    public int TotalMark { get; set; }
    
    public int TasksCount { get; set; }
}

public sealed class WorkController(IMapper mapper) : BaseController
{
    [HttpGet("{idWork:int}/stats")]
    public async Task<ActionResult> GetStats(
        int idWork,
        int markFiveCount,
        int markFourCount,
        int markThreeCount,
        [FromServices] ApiDbContext context)
    {
        var students = await context.Students
            .AsNoTracking()
            .Include(e => e.CompletedWorks)
            .ThenInclude(e => e.CompletedTasks)
            .Include(e => e.User)
            .Include(e => e.Group)
            .ThenInclude(e => e.GroupWorks)
            .Where(e => e.IsRetired == false &&
                        e.Group.GroupWorks.FirstOrDefault(x => x.WorkId == idWork)!.WorkId == idWork)
            .ToListAsync();

        var work = await context.Works
            .Include(e => e.Tasks)
            .Include(e => e.WorkMarks)
            .FirstOrDefaultAsync(x => x.Id == idWork);

        if (work.WorkMarks.Count == 3)
        {
            markFiveCount = work.WorkMarks.FirstOrDefault(e => e.MarkId == 1).TaskCount;
            markFourCount = work.WorkMarks.FirstOrDefault(e => e.MarkId == 2).TaskCount;
            markThreeCount = work.WorkMarks.FirstOrDefault(e => e.MarkId == 3).TaskCount;
        }
        
        if (markFourCount == 0 && markThreeCount == 0)
        {
            markFourCount = (int)Math.Ceiling((double)(work.Tasks.Count - markFiveCount) / 2);
            markThreeCount = (int)Math.Floor((double)(work.Tasks.Count - markFiveCount) / 2);
        }

        if (markThreeCount == 0)
        {
            markThreeCount = work.Tasks.Count - markFourCount - markFiveCount;
        }
        
        List<CompletedWorkAndMarks> listStudentCompletedWorkAndMarks = new();

        foreach (var student in students)
        {
            if (student.CompletedWorks.FirstOrDefault(e => e.WorkId == idWork) == null)
            {
                listStudentCompletedWorkAndMarks.Add(new CompletedWorkAndMarks()
                {
                    StudentName = student.User.Name,
                    StudentSurname = student.User.Surname,
                    CompletedTasks = Array.Empty<int>(),
                    IdStudent = student.Id,
                    IdWork = idWork,
                    Percentage = 0,
                    TotalMark = 2,
                    TasksCount = work.Tasks.Count
                });

                continue;
            }
            
            var completedWork = student.CompletedWorks.FirstOrDefault(e => e.WorkId == idWork);
            var completedWorkTasks = completedWork.CompletedTasks;
            double percentage = (double)completedWorkTasks.Count / work.Tasks.Count * 100;

            var taskCompleted = completedWorkTasks.Count;
            int totalMark;

            if (taskCompleted >= markFiveCount)
            {
                totalMark = 5;
            }
            else if (taskCompleted >= markFourCount)
            {
                totalMark = 4;
            }
            else if (taskCompleted >= markThreeCount)
            {
                totalMark = 3;
            }
            else
            {
                totalMark = 2;
            }

            listStudentCompletedWorkAndMarks.Add(
                new CompletedWorkAndMarks()
                {
                    StudentName = student.User.Name,
                    StudentSurname = student.User.Surname,
                    CompletedTasks = completedWorkTasks.Select(e => e.TaskId).ToArray(),
                    IdStudent = student.Id,
                    IdWork = idWork,
                    Percentage = percentage,
                    TotalMark = totalMark,
                    TasksCount = work.Tasks.Count
                }
            );
        }
        
        return Ok(listStudentCompletedWorkAndMarks);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<WorkViewModel[]>> Get(
        int id,
        [FromServices] ApiDbContext context)
    {
        return Ok(await context.Works
            .AsNoTracking()
            .Include(e => e.WorkType)
            .Include(e => e.Tasks)
            .Include(e => e.WorkMarks)
            .ThenInclude(e => e.Mark)
            .ProjectTo<WorkViewModel>(mapper.ConfigurationProvider)
            .FirstOrDefaultAsync(e => e.Id == id));
    }
    
    [HttpPost]
    public async Task<ActionResult> Post(
        [FromBody] CreateWorkCommand command,
        [FromServices] ApiDbContext context)
    {
        var work = mapper.Map<Work>(command);

        await context.Works.AddAsync(work);
        await context.SaveChangesAsync();
        
        return Created(string.Empty, work.Id);
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult> Put(
        int id,
        [FromBody] UpdateWorkCommand command,
        [FromServices] ApiDbContext context)
    {
        var work = await context.Works
            .Where(e => e.Id == id)
            .FirstOrDefaultAsync();

        if (work is null)
        {
            return NotFound();
        }

        work.Name = command.Name;
        work.WorkTypeId = command.WorkTypeId;

        await context.SaveChangesAsync();

        return Ok();
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult> Delete(
        int id,
        [FromServices] ApiDbContext context)
    {
        var work = await context.Works
            .AsNoTracking()
            .FirstOrDefaultAsync(e => e.Id == id);

        if (work is null)
        {
            return NotFound();
        }

        context.Remove(work);
        await context.SaveChangesAsync();

        return Ok();
    }
}