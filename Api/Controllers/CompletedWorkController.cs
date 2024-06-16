using Api.Context;
using Api.Models.CompletedWorks;
using Api.Models.CompletedWorks.Commands;
using Api.Models.CompletedWorkTasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

public sealed class CompletedWorkController(IMapper mapper) : BaseController
{
    [HttpPost]
    public async Task<ActionResult> Post(
        [FromBody] CompletedWorkCommand command,
        [FromServices] ApiDbContext context)
    {
        var work = await context.Works
            .AsNoTracking()
            .Include(e => e.WorkMarks)
            .Include(e => e.Tasks)
            .FirstOrDefaultAsync(e => e.Id == command.WorkId);

        if (work is null)
            return NotFound($"Work with id: {command.WorkId}");

        var completedWork = mapper.Map<CompletedWork>(command);
        
        completedWork.Percentage = (int)(100d / work.Tasks!.Count) * completedWork.CompletedTasks.Count;
        completedWork.MarkId = work.WorkMarks
            .FirstOrDefault(e => e.TaskCount == completedWork.CompletedTasks.Count)
            ?.MarkId;
        
        if (await context.CompletedWorks.FirstOrDefaultAsync(w => w.WorkId == completedWork.WorkId && w.StudentId == command.StudentId) is CompletedWork completedWorkUse)
        {
            completedWork.Id = completedWorkUse.Id;
        }
        else
        {
            await context.AddAsync(completedWork);
            await context.SaveChangesAsync();
        }
        
        if (await context.CompletedWorkTasks.FirstOrDefaultAsync(w => w.TaskId == command.TaskId && w.CompletedWorkId == completedWork.Id) is CompletedWorkTask completedWorkTaskUse)
        {
            context.Remove(completedWorkTaskUse);
            await context.SaveChangesAsync();
        }
        else
        {
            await context.AddAsync(new CompletedWorkTask
            {
                CompletedWorkId = completedWork.Id,
                TaskId = command.TaskId,
                
            });
            await context.SaveChangesAsync();
        }
        
        return Created(string.Empty, completedWork.Id);
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult> Delete(
        int id,
        [FromServices] ApiDbContext context)
    {
        var completedWork = await context.CompletedWorks
            .AsNoTracking()
            .FirstOrDefaultAsync(e => e.Id == id);

        if (completedWork is null)
        {
            return NotFound();
        }

        context.Remove(completedWork);
        await context.SaveChangesAsync();

        return Ok();
    }
}