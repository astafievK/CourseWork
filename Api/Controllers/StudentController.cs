using Api.Context;
using Api.Models.CompletedWorks;
using Api.Models.Groups;
using Api.Models.Students;
using Api.Models.Students.Commands;
using Api.Models.Works;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using ClosedXML.Excel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

public class CompletedWorkAndMarksStudent
{
    public int[] CompletedTasks { get; set; }
    public int[] WorkTasks { get; set; }
    public string WorkType { get; set; }
    public string WorkName { get; set; }
    public double Percentage { get; set; }
    public int TotalMark { get; set; }
    public int TasksCount { get; set; }
}

public sealed class StudentController(IMapper mapper) : BaseController
{
    [HttpGet("{id:int}")]
    public async Task<ActionResult<StudentViewModel>> Get(
        int id,
        [FromServices] ApiDbContext context)
    {
        return Ok(await context.Students
            .Include(e => e.User)
            .ThenInclude(e => e.Role)
            .Include(e => e.Group)
            .AsNoTracking()
            .ProjectTo<StudentViewModel>(mapper.ConfigurationProvider)
            .FirstOrDefaultAsync(e => e.Id == id));
    }
    
    [HttpGet("idDiscipline={idDiscipline:int}&idUser={idUser:int}/stats")]
    public async Task<ActionResult> GetStats(
        int idDiscipline,
        int idUser,
        [FromServices] ApiDbContext context)
    {
        var student = await context.Students
            .AsNoTracking()
            .Include(e => e.CompletedWorks)
            .ThenInclude(e => e.CompletedTasks)
            .Include(e => e.User)
            .Include(e => e.Group)
            .ThenInclude(e => e.GroupWorks)
            .FirstOrDefaultAsync(e => e.UserId == idUser);

        var works = await context.GroupWorks
            .Include(e => e.Work)
            .ThenInclude(e => e.Tasks)
            .Include(e => e.Work)
            .ThenInclude(e => e.WorkMarks)
            .Include(e => e.Work)
            .ThenInclude(e => e.WorkType)
            .Include(e => e.Work)
            .ThenInclude(e => e.Tasks)
            .Include(e => e.Work)
            .Include(e => e.Discipline)
            .Where(e => e.GroupId == student.GroupId && e.DisciplineId == idDiscipline)
            .ToListAsync();

        List<CompletedWorkAndMarksStudent> listStudentCompletedWorkAndMarks = new();

        foreach (var work in works)
        {
            if (student.CompletedWorks.FirstOrDefault(e => e.WorkId == work.WorkId) == null)
            {
                listStudentCompletedWorkAndMarks.Add(new CompletedWorkAndMarksStudent()
                {
                    CompletedTasks = Array.Empty<int>(),
                    WorkTasks = work.Work.Tasks.Select(e => e.Id).ToArray(),
                    WorkType = work.Work.WorkType.Name,
                    WorkName = work.Work.Name,
                    Percentage = 0,
                    TotalMark = 2,
                    TasksCount = work.Work.Tasks.Count
                });

                continue;
            }

            var completedWork = student.CompletedWorks.FirstOrDefault(e => e.WorkId == work.WorkId);
            var completedWorkTasks = completedWork.CompletedTasks;
            var percentage = (double)completedWorkTasks.Count / work.Work.Tasks.Count * 100;
            var tasksCompleted = completedWorkTasks.Count;
            int totalMark = 0;

            switch (work.Work.Tasks.Count)
            {
                case 3:
                    switch (tasksCompleted)
                    {
                        case 1:
                            totalMark = 3;
                            break;
                        case 2:
                            totalMark = 4;
                            break;
                        case 3:
                            totalMark = 5;
                            break; 
                    }
                    break;
                case 5:
                    switch (tasksCompleted)
                    {
                        case 5:
                            totalMark = 5;
                            break;
                        case 4:
                            totalMark = 4;
                            break;
                        case 3:
                            totalMark = 3;
                            break; 
                        default:
                            totalMark = 2;
                            break;
                    }
                    break;
                default:
                    if (percentage < 65)
                        totalMark = 2;
                    else if (percentage is >= 65 and < 85)
                        totalMark = 3;
                    else if (percentage is >= 65 and < 85)
                        totalMark = 4;
                    else
                        totalMark = 5;
                    break;
            }
            

            listStudentCompletedWorkAndMarks.Add(
                new CompletedWorkAndMarksStudent()
                {
                    CompletedTasks = completedWorkTasks.Select(e => e.TaskId).ToArray(),
                    WorkTasks = work.Work.Tasks.Select(e => e.Id).ToArray(),
                    WorkType = work.Work.WorkType.Name,
                    WorkName = work.Work.Name,
                    Percentage = Math.Floor(percentage),
                    TotalMark = totalMark,
                    TasksCount = work.Work.Tasks.Count
                }
            );
        }

        return Ok(listStudentCompletedWorkAndMarks);
    }
    
    [HttpGet("{idUser:int}/group")]
    public async Task<ActionResult<GroupViewModel>> GetStudentGroup(
        int idUser,
        [FromServices] ApiDbContext context)
    {
        var user = await context.Users
            .AsNoTracking()
            .FirstOrDefaultAsync(u => u.Id == idUser);

        if (user.Role.Name.ToLower() == "")
        {
            return Ok(context.Students
                .AsNoTracking()
                .Include(e => e.Group)
                .FirstOrDefaultAsync(e => e.UserId == idUser));
        }

        return NotFound("Пользователь не студент");
    }
    
    [HttpGet("xlsx")]
    public async Task<IResult> GetXlsx(
        [FromServices] ApiDbContext context)
    {
        const string contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        const string fileName = "students.xlsx";

        using var book = new XLWorkbook();

        await using var memory = new MemoryStream();
        var students = await context.Students
            .Include(e => e.Group)
            .Include(e => e.User)
            .OrderByDescending(e => e.IsRetired)
            .AsNoTracking()
            .ProjectTo<StudentViewModel>(mapper.ConfigurationProvider)
            .ToArrayAsync();

        book.AddWorksheet("Students");
        var worksheet = book.Worksheets.Last();

        worksheet.Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
        worksheet.Style.Alignment.Vertical = XLAlignmentVerticalValues.Center;
        worksheet.Style.Border.OutsideBorder = XLBorderStyleValues.None;
        worksheet.Style.Alignment.WrapText = true;
        worksheet.Style.Font.FontSize = 16;
        worksheet.ColumnWidth = 60;

        worksheet.Cell("A1").Value = "Логин";
        worksheet.Cell("B1").Value = "Имя";
        worksheet.Cell("C1").Value = "Фамилия";
        worksheet.Cell("D1").Value = "Отчество";
        worksheet.Cell("E1").Value = "Группа";
        worksheet.Cell("F1").Value = "Отчислен";

        var row = 2;

        foreach (var student in students)
        {
            var range = worksheet.Range(row, 1, row, 6);

            var cell = range.FirstCell();
            cell.Value = student.User.Login;

            cell = cell.CellRight();
            cell.Value = student.User.Name;

            cell = cell.CellRight();
            cell.Value = student.User.Surname;

            cell = cell.CellRight();
            cell.Value = student.User.Patronymic;

            cell = cell.CellRight();
            cell.Value = student.Group.Name;

            cell = cell.CellRight();
            cell.Value = student.IsRetired;

            row++;
        }

        book.SaveAs(memory);
        var content = memory.ToArray();

        return Results.File(content, contentType, fileName);
    }

    [HttpGet("{id:int}/completed_works")]
    public async Task<ActionResult<CompletedWorkViewModel[]>> GetCompletedWorks(
        int id,
        [FromServices] ApiDbContext context)
    {
        return Ok(await context.CompletedWorks
            .AsNoTracking()
            .Include(e => e.Mark)
            .Include(e => e.Work)
            .ThenInclude(e => e.Tasks)
            .Include(e => e.Work)
            .ThenInclude(e => e.WorkType)
            .Include(e => e.Work)
            .ThenInclude(e => e.WorkMarks)
            .ThenInclude(e => e.Mark)
            .Where(e => e.StudentId == id)
            .ProjectTo<CompletedWorkViewModel>(mapper.ConfigurationProvider)
            .ToListAsync());
    }

    [HttpGet]
    public async Task<ActionResult<StudentViewModel[]>> Get(
        [FromServices] ApiDbContext context)
    {
        return Ok(await context.Students
            .Include(e => e.User)
            .ThenInclude(e => e.Role)
            .Include(e => e.Group)
            .AsNoTracking()
            .ProjectTo<StudentViewModel>(mapper.ConfigurationProvider)
            .ToListAsync());
    }

    [HttpPost]
    public async Task<ActionResult> Post(
        [FromBody] CreateStudentCommand command,
        [FromServices] ApiDbContext context)
    {
        var student = mapper.Map<Student>(command);
        student.User.RoleId = 1;

        await context.AddAsync(student);
        await context.SaveChangesAsync();

        return Created(string.Empty, student.Id);
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult> Put(
        int id,
        [FromBody] UpdateStudentCommand command,
        [FromServices] ApiDbContext context)
    {
        var student = await context.Students
            .AsNoTracking()
            .Include(student => student.User)
            .FirstOrDefaultAsync(e => e.Id == id);

        if (student is null)
        {
            return NotFound();
        }

        student.User.Login = command.Login;
        student.User.Name = command.Name;
        student.User.Surname = command.Surname;
        student.User.Patronymic = command.Patronymic;
        student.GroupId = command.GroupId;
        student.IsRetired = command.IsRetired;

        context.Students.Update(student);
        await context.SaveChangesAsync();

        return Ok();
    }
    
    [HttpPut("{idStudent:int}/isRetired")]
    public async Task<ActionResult> Put(
        int idStudent,
        [FromServices] ApiDbContext context)
    {
        var student = await context.Students
            .AsNoTracking()
            .Include(e => e.Group)
            .FirstOrDefaultAsync(e => e.UserId == idStudent);
        
        student.IsRetired = !student.IsRetired;
        
        context.Students.Update(student);
        await context.SaveChangesAsync();
        
        return Ok(student.IsRetired);
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult> Delete(
        int id,
        [FromServices] ApiDbContext context)
    {
        var student = await context.Students
            .AsNoTracking()
            .FirstOrDefaultAsync(e => e.Id == id);

        if (student is null)
        {
            return NotFound();
        }

        context.Remove(student);
        await context.SaveChangesAsync();

        return Ok();
    }
}