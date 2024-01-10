import {baseApi} from "./api.ts";
import {buildUrlArguments} from "../utils/buildUrlArgument.ts";

export const teacherApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getGroups: builder.query<IGroup[], {idTeacher: number, courseId: number, semesterId: number}>({
            query: query => ({
                url: `Teacher/${query.idTeacher}/groups?${buildUrlArguments(query)}`,
                method: "GET",
            }),
        }),
        getTeacher: builder.query<ITeacher, {idUser : number}>({
            query: query => ({
                url: `Teacher/${query.idUser}`,
                method: "GET",
            }),
        })
    })
})

export const {
    useGetGroupsQuery,
    useGetTeacherQuery,
} = teacherApi
