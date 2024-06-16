using Api.Common.Interfaces;

namespace Api.Models.WorkMarks.Commands;

public sealed class WorkMarkCommand : IMapWith<WorkMark>
{
    public int WorkId { get; set; }

    public int MarkId { get; set; }

    public int TaskCount { get; set; }
}