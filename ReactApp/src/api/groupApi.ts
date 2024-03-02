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
            providesTags: ['Disciplines', 'Works'],
        }),
        setGroupDiscipline: builder.mutation<IDiscipline, IGroupDisciplineCommand>({
            query: query => ({
                url: `Group/idGroup=${query.idGroup}&idDiscipline=${query.idDiscipline}`,
                method: "PUT",
            }),
            invalidatesTags: ['Disciplines'],
        }),
        getGroupStudents: builder.query<IStudent[], { idGroup: number }>({
            query: query => ({
                url: `Group/${query.idGroup}/students`,
                method: "GET",
            }),
            providesTags: ['Students', 'Stats']
        }),
        getGroupWorks: builder.query<IWork[], { id: number, DisciplineId: number}>({
            query: query => ({
                url: `Group/${query.id}/works?${buildUrlArguments(query)}`,
                method: "GET",
            }),
            providesTags: ['Works', 'Stats']
        }),
        addGroup: builder.mutation<number, {
            name: string,
            idCourse: number,
            idSemester: number
        }>({
            query: query => ({
                url: `Group`,
                method: "POST",
                body: {
                    name: query.name,
                    year: 2020,
                    courseId: query.idCourse,
                    semesterId: query.idSemester,
                    disciplinesIds: []
                }
            }),
            invalidatesTags: ['Groups', 'Stats', 'StudentGroup'],
        }),
    })
})

export const {
    useGetGroupsQuery,
    useGetGroupInfoQuery,
    useGetGroupDisciplinesQuery,
    useSetGroupDisciplineMutation,
    useGetGroupStudentsQuery,
    useGetGroupWorksQuery,
    useAddGroupMutation,
} = groupApi
