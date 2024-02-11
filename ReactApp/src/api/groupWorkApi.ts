import {baseApi} from "./api.ts";

export const groupWorkApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        addWorkForGroup: builder.mutation<void, {
            groupId: number,
            workId: number,
            disciplineId: number,
            courseId: number,
            semesterId: number }>({

            query: query => ({
                url: `GroupWork`,
                method: "POST",
                body: {
                    groupId: query.groupId,
                    workId: query.workId,
                    disciplineId: query.disciplineId,
                    courseId: query.courseId,
                    semesterId: query.semesterId,
                },
            }),
            invalidatesTags: ['Works']
        }),
    })
})

export const {
    useAddWorkForGroupMutation,
} = groupWorkApi