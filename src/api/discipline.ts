import {baseApi} from "./api.ts";
import {buildUrlArguments} from "../utils/buildUrlArgument.ts";

export const disciplineApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        updateDiscipline: builder.query<IDiscipline[], {name: number} | void>({
            query: query => ({
                url: `Discipline?${buildUrlArguments(query ?? {})}`,
                method: "PUT",
            }),
        }),
        getDisciplines: builder.query<IDiscipline[], void>({
            query: () => ({
                url: `Discipline`,
                method: "GET",
            }),
        }),
    })
})

export const {
    useUpdateDisciplineQuery,
    useGetDisciplinesQuery,
} = disciplineApi
