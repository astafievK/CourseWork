import {baseApi} from "./api.ts";
import {buildUrlArguments} from "../utils/buildUrlArgument.ts";

export const markApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        isMarkExists: builder.query<boolean,{
            WorkId: number,
            MarkId: number
        }>({
            query: query => ({
                url: `WorkMark/${buildUrlArguments(query)}`,
                method: "GET"
            })
        }),
        getWorkSamples: builder.query<IWorkMark[],{
            idWork: number
        }>({
            query: query => ({
                url: `WorkMark/${query.idWork}/work`,
                method: "GET"
            }),
        }),
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
        deleteSampleMark: builder.mutation<void, {
            idWork: number,
            idMark: number
        }>({
            query: query => ({
                url: `WorkMark`,
                method: "DELETE",
                body:{
                    workId: query.idWork,
                    markId: query.idMark,
                }
            }),
        }),
    })
})

export const {
    useIsMarkExistsQuery,
    useGetWorkSamplesQuery,
    useSetSampleMarkMutation,
    useDeleteSampleMarkMutation
} = markApi