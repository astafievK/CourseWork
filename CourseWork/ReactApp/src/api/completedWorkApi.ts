import {baseApi} from "./api.ts";

export const completedWorkApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        setTask: builder.mutation<number, {
            idStudent: number
            idWork: number
            idTask: number
        }>({
            query: query => ({
                url: `CompletedWork`,
                method: "POST",
                body: {
                    studentId: query.idStudent,
                    workId: query.idWork,
                    taskId: query.idTask
                }
            }),
            invalidatesTags: ['Stats']
        })
    })
})

export const {
    useSetTaskMutation,
} = completedWorkApi