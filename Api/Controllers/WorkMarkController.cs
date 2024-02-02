using Api.Context;
using Api.Models.WorkMarks;
using Api.Models.WorkMarks.Commands;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

public sealed class WorkMarkController(IMapper mapper) : BaseController
{
    [HttpGet]
    public async Task<ActionResult<bool>> HasMark(
        [FromQuery] WorkHasMarkQuery query,
        [FromServices] ApiDbContext context)
    {
        return Ok(await context.WorkMarks
            .AsNoTracking()
            .AnyAsync(e =>
                e.WorkId == query.WorkId &&
                e.MarkId == query.MarkId));
    }

    [HttpPost]
    public async Task<ActionResult> Post(
        [FromBody] WorkMarkCommand command,
        [FromServices] ApiDbContext context)
    {
        var workMark = mapper.Map<WorkMark>(command);

        await context.AddAsync(workMark);
        await context.SaveChangesAsync();

        return Created(string.Empty, null);
    }

    [HttpPut]
    public async Task<ActionResult> Put(
        [FromBody] WorkMarkCommand command,
        [FromServices] ApiDbContext context)
    {
        var workMark = await context.WorkMarks
            .AsNoTracking()
            .FirstOrDefaultAsync(e =>
                e.WorkId == command.WorkId &&
                e.MarkId == command.MarkId);

        if (workMark is null)
        {
            return NotFound();
        }

        workMark.TaskCount = command.TaskCount;

        await context.SaveChangesAsync();

        return NoContent();
    }
}