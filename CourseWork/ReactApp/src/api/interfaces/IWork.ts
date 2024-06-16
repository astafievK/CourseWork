interface IWork {
    id: number
    name: string
    workType: IWorkType
    tasks: ITask[]
    workMarks: IWorkMark[]
}