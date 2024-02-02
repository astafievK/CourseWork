import {baseApi} from "./api.ts";
import {buildUrlArguments} from "../utils/buildUrlArgument.ts";

export const groupApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getGroups: builder.query<IGroup[], void>({
            query: () => ({
                url: `Group`,
                method: "GET",
            }),
            providesTags: ['Groups'],
        }),
        getGroupInfo: builder.query<IGroup[], { idGroup: number }>({
            query: query => ({
                url: `Group/${query.idGroup}`,
                method: "GET",
            })
        }),
        getGroupDisciplines: builder.query<IGroupDisciplines, { idGroup: number }>({
            query: query => ({
                url: `Group/${query.idGroup}/disciplines`,
                method: "GET",
            }),
            providesTags: ['Disciplines'],
        }),
        setGroupDiscipline: builder.mutation<IDiscipline, IGroupDisciplineCommand>({
            query: query => ({
                url: `Group/idGroup=${query.idGroup}&idDiscipline=${query.idDiscipline}`,
                method: "PUT",
            }),
            invalidatesTags: ['Disciplines'],
        }),
        getStudentsByGroup: builder.query<IStudent[], { idGroup: number }>({
            query: query => ({
                url: `Group/${query.idGroup}/students`,
                method: "GET",
            }),
            providesTags: ['Students']
        }),
        getWorksByGroupAndDiscipline: builder.query<IWork[], { id: number, DisciplineId: number}>({
            query: query => ({
                url: `Group/${query.id}/works?${buildUrlArguments(query)}`,
                method: "GET",
            }),
            providesTags: ['Works']
        }),
        addGroup: builder.mutation<IDiscipline[], { name: string }>({
            query: query => ({
                url: `Group`,
                method: "POST",
                body: {
                    name: query.name,
                    year: 2020,
                    courseId: 4,
                    semesterId: 2,
                    disciplinesIds: []
                }
            }),
            invalidatesTags: ['Groups'],
        }),
    })
})

export const {
    useGetGroupsQuery,
    useGetGroupInfoQuery,
    useGetGroupDisciplinesQuery,
    useSetGroupDisciplineMutation,
    useGetStudentsByGroupQuery,
    useGetWorksByGroupAndDisciplineQuery,
    useAddGroupMutation,
} = groupApi
