export const data = [
    { role: 'Преподаватель', surname: "Астафьев", name: "Кирилл", secondName: "Александрович", groupName: null},
    { role: 'Студент', surname: "Астафьев", name: "Кирилл", secondName: "Александрович", groupName: "ИСПП-01"}
]

class Filters{
    constructor(course, semester, group, discipline, work) {
        this.course = course
        this.semester = semester
        this.group = group
        this.discipline = discipline
        this.word = work
    }
}