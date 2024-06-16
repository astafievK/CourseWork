import {baseApi} from "./api.ts";

export const studentApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        addStudent: builder.mutation<void, { // Добавление студента в группу
            idGroup: number,
            login: string,
            password: string,
            name: string,
            surname: string,
            patronymic: string
        }>({

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
        getStatsStudent: builder.query<IStatisticStudent[], {
            idDiscipline: number,
            idUser: number,
        }>({
            query: query => ({
                url: `Student/idDiscipline=${query.idDiscipline}&idUser=${query.idUser}/stats`,
                method: "GET",
            }),
            providesTags: ['Stats']
        }),
    }),
})

export const {
    useAddStudentMutation,
    useGetStatsStudentQuery
} = studentApi
