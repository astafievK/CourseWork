import {baseApi} from "./api.ts";

export const disciplineApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getDisciplines: builder.query<IDiscipline[], void>({
            query: () => ({
                url: `Discipline`,
                method: "GET",
            }),
            providesTags: ['Discipline'],
        }),
        addDiscipline: builder.mutation<IDiscipline[], { name: string }>({
            query: query => ({
                url: `Discipline`,
                method: "POST",
                body: query
            }),
            invalidatesTags: ['Discipline'],
        }),
    })
})

export const {
    useAddDisciplineMutation,
    useGetDisciplinesQuery,
} = disciplineApi
