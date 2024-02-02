using Api.Context;
using Api.Models.GroupWorks;
using Api.Models.GroupWorks.Commands;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

public sealed class GroupWorkController(IMapper mapper) : BaseController
{
    [HttpPost]
    public async Task<ActionResult> Post(
        [FromBody] GroupWorkCommand command,
        [FromServices] ApiDbContext context)
    {
        var groupWork = mapper.Map<GroupWork>(command);

        await context.AddAsync(groupWork);
        await context.SaveChangesAsync();

        return Created(string.Empty, groupWork.Id);
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult> Delete(
        int id,
        [FromServices] ApiDbContext context)
    {
        var groupWork = await context.GroupWorks
            .AsNoTracking()
            .FirstOrDefaultAsync(e => e.Id == id);

        if (groupWork is null)
        {
            return NotFound();
        }

        context.Remove(groupWork);
        await context.SaveChangesAsync();

        return Ok();
    }
}