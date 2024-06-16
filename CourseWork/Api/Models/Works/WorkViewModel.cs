using Api.Common.Interfaces;
using Api.Models.GroupWorks;
using Api.Models.Tasks;
using Api.Models.WorkMarks;
using Api.Models.WorkTypes;
using AutoMapper;

namespace Api.Models.Works;

public sealed class WorkViewModel : IMapWith<Work>
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public WorkTypeViewModel WorkType { get; set; } = null!;

    public ICollection<TaskViewModel> Tasks { get; set; } = null!;

    public ICollection<WorkMarkViewModel> WorkMarks { get; set; } = null!;

    public void Map(Profile profile)
    {
        profile.CreateMap<Work, WorkViewModel>()
            .ForMember(e => e.Name, expression =>
                expression.MapFrom(e => e.Name))
            .ForMember(e => e.Tasks, expression =>
                expression.MapFrom(e => e.Tasks))
            .ForMember(e => e.WorkType, expression =>
                expression.MapFrom(e => e.WorkType))
            .ForMember(e => e.WorkMarks, expression =>
                expression.MapFrom(e => e.WorkMarks))
            .ReverseMap();

        profile.CreateMap<GroupWork, WorkViewModel>()
            .ForMember(e => e.Name, expression =>
                expression.MapFrom(e => e.Work.Name))
            .ForMember(e => e.Tasks, expression =>
                expression.MapFrom(e => e.Work.Tasks))
            .ForMember(e => e.WorkType, expression =>
                expression.MapFrom(e => e.Work.WorkType))
            .ForMember(e => e.WorkMarks, expression =>
                expression.MapFrom(e => e.Work.WorkMarks))
            .ReverseMap();
    }
}