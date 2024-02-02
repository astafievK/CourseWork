import {baseApi} from "./api.ts";

export const taskApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        addTaskForWork: builder.mutation<void, {
            idWork: number
            count: number
        }>({
            query: query => ({
                url: `Task/${query.count}`,
                method: "POST",
                body: {
                    workId: query.idWork,
                    title: "тест",
                    description: "тест"
                }
            }),
        })
    })
})

export const {
    useAddTaskForWorkMutation,
} = taskApi