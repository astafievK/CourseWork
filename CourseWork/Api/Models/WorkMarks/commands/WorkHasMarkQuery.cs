namespace Api.Models.WorkMarks.Commands;

public sealed class WorkHasMarkQuery
{
    public int WorkId { get; set; }

    public int MarkId { get; set; }
}