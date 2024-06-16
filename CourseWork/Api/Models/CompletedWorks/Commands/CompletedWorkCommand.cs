using Api.Common.Interfaces;

namespace Api.Models.CompletedWorks.Commands;

public sealed class CompletedWorkCommand : IMapWith<CompletedWork>
{
    public int StudentId { get; set; }
    public int WorkId { get; set; }
    public int TaskId { get; set; }
}