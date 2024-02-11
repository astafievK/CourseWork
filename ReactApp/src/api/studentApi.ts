import {baseApi} from "./api.ts";

export const studentApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getStudents: builder.query<IStudent[], void>({ // Все студенты
            query: () => ({
                url: `Student`,
                method: "GET",
            }),
            providesTags: ['Students']
        }),
        getCompletedWorks: builder.query<IStudent[], { // Завершенные работы студенты
            idStudent: number}>({

            query: query => ({
                url: `Student/${query.idStudent}/completed_works`,
                method: "GET",
            }),
        }),
        addStudent: builder.mutation<void, { // Добавление студента в группу
            idGroup: number,
            login: string,
            password: string,
            name: string,
            surname: string,
            patronymic: string}>({

            query: query => ({
                url: `Student`,
                method: "POST",
                body: {
                    groupId: query.idGroup,
                    login: query.login,
                    password: query.password,
                    name: query.name,
                    surname: query.surname,
                    patronymic: query.patronymic
                },
            }),
            invalidatesTags: ['Students', 'Works', 'Stats']
        }),
        setStudentRetiredStatus: builder.mutation<IStudent[], { // Добавление студента в группу
            idStudent: number}>({
            query: query => ({
                url: `Student/${query.idStudent}/isRetired`,
                method: "PUT",
            }),
            invalidatesTags: ['Students']
        }),
    }),
})

export const {
    useGetStudentsQuery,
    useGetCompletedWorksQuery,
    useAddStudentMutation,
    useSetStudentRetiredStatusMutation,
} = studentApi
