interface IStatisticStaff {
    studentName: string
    studentSurname: string
    completedTasks: number[]
    workTasks: number[]
    workTasksFull: ITask[]
    idStudent: number
    idWork: number
    percentage: number
    totalMark: number
    tasksCount: number
}