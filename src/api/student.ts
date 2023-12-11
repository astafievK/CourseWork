import {baseApi} from "./api.ts";

export const studentApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getStudents: builder.query<IStudent[], void>({
            query: () => ({
                url: `Student`,
                method: "GET",
            }),
        }),
        getCompletedWorks: builder.query<IStudent[], {idStudent: number}>({
            query: query => ({
                url: `Student/${query.idStudent}/completed_works`,
                method: "GET",
            }),
        }),
        updateStudent: builder.query<IStudent[], {idStudent: number}>({
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
