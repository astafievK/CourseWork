import {baseApi} from "./api.ts";
import {buildUrlArguments} from "../utils/buildUrlArgument.ts";

export const groupApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getGroups: builder.query<IGroup[], void>({
            query: () => ({
                url: `Group`,
                method: "GET",
            }),
        }),
        getDisciplines: builder.query<IDiscipline, { idGroup: number }>({
            query: query => ({
                url: `Group/${query.idGroup}`,
                method: "GET",
            }),
        }),
        getWorks: builder.query<IWork, {idGroup: number, idDiscipline: number}>({
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
