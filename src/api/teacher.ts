import {api} from "./api.ts";
import {buildUrlArguments} from "../utils/buildUrlArgument.ts";

export const teacherApi = api.injectEndpoints({
    endpoints: builder => ({
        getGroups: builder.query<Group[], {idTeacher: number, courseId: number, semesterId: number}>({
            query: query => ({
                url: `Teacher/${query.idTeacher}/groups?${buildUrlArguments(query)}`,
                method: "GET",
            }),
        }),
        getTeacher: builder.query<Teacher, {idUser : number}>({
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
