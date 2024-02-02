import {baseApi} from "./api.ts";

export const markApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        setSampleMark: builder.mutation<void, {
            idWork: number,
            idMark: number,
            taskCount: number
        }>({
            query: query => ({
                url: `WorkMark`,
                method: "POST",
                body:{
                    workId: query.idWork,
                    markId: query.idMark,
                    taskCount: query.taskCount
                }
            }),
        }),
    })
})

export const {
    useSetSampleMarkMutation,
} = markApi