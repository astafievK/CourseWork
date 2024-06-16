using Api.Common.Interfaces;

namespace Api.Models.Works.Commands;

public sealed class CreateWorkCommand : IMapWith<Work>
{
    public string Name { get; set; } = null!;
    
    public int WorkTypeId { get; set; }
}