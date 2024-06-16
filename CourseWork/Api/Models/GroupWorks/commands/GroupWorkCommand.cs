using Api.Common.Interfaces;

namespace Api.Models.GroupWorks.Commands;

public sealed class GroupWorkCommand : IMapWith<GroupWork>
{
    public int GroupId { get; set; }

    public int WorkId { get; set; }

    public int DisciplineId { get; set; }

    public int CourseId { get; set; }

    public int SemesterId { get; set; }
}