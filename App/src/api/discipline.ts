import {api} from "./api.ts";
import {buildUrlArguments} from "../utils/buildUrlArgument.ts";

export const disciplineApi = api.injectEndpoints({
    endpoints: builder => ({
        updateDiscipline: builder.query<Discipline[], {name: number} | void>({
            query: query => ({
                url: `Discipline?${buildUrlArguments(query ?? {})}`,
                method: "PUT",
            }),
        }),
        getDisciplines: builder.query<Discipline[], void>({
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
