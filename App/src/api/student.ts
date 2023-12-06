import {api} from "./api.ts";

export const studentApi = api.injectEndpoints({
    endpoints: builder => ({
        getStudents: builder.query<Student[], void>({
            query: () => ({
                url: `Student`,
                method: "GET",
            }),
        }),
        getCompletedWorks: builder.query<Student[], {idStudent: number}>({
            query: query => ({
                url: `Student/${query.idStudent}/completed_works`,
                method: "GET",
            }),
        }),
        updateStudent: builder.query<Student[], {idStudent: number}>({
            query: query => ({
                url: `Student/${query.idStudent}`,
                method: "PUT",
            }),
        }),
    })
})

export const {
    useGetStudentsQuery,
    useGetCompletedWorksQuery,
    useUpdateStudentQuery,
} = studentApi
