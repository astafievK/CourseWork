import {api} from "./api.ts";
import {buildUrlArguments} from "../utils/buildUrlArgument.ts";

export const groupApi = api.injectEndpoints({
    endpoints: builder => ({
        getGroups: builder.query<Group[], void>({
            query: () => ({
                url: `Group`,
                method: "GET",
            }),
        }),
        getDisciplines: builder.query<Discipline, { idGroup: number }>({
            query: query => ({
                url: `Group/${query.idGroup}`,
                method: "GET",
            }),
        }),
        getWorks: builder.query<Work, {idGroup: number, idDiscipline: number}>({
            query: query => ({
                url: `Group/${query.idGroup}/works?${buildUrlArguments(query)}`,
                method: "GET",
            }),
        }),
    })
})

export const {
    useGetGroupsQuery,
    useGetDisciplinesQuery,
    useGetWorksQuery
} = groupApi
