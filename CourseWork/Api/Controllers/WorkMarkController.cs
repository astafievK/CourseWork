using Api.Context;
using Api.Models.WorkMarks;
using Api.Models.WorkMarks.Commands;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

public sealed class WorkMarkController(IMapper mapper) : BaseController
{
    [HttpGet("{idWork:int}/work")]
    public async Task<ActionResult<WorkMarkViewModel[]>> Get(
        int idWork,
        [FromServices] ApiDbContext context)
    {
        return Ok(await context.WorkMarks
            .AsNoTracking()
            .Where(e => e.WorkId == idWork)
            .ProjectTo<WorkMarkViewModel>(mapper.ConfigurationProvider)
            .ToListAsync());
    }
    
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
    
    [HttpDelete]
    public async Task<ActionResult> Delete(
        int idWork,
        int idMark,
        [FromServices] ApiDbContext context)
    {
        var workMark = await context.WorkMarks
            .AsNoTracking()
            .FirstOrDefaultAsync(e =>
                e.WorkId == idWork &&
                e.MarkId == idMark);
        
        if (workMark is null)
        {
            return NotFound();
        }
        
        context.Remove(workMark);
        await context.SaveChangesAsync();

        return Ok();
    }
}