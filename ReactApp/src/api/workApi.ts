import {baseApi} from "./api.ts";

export const workApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        addWork: builder.mutation<number, {
            workTitle: string,
            workTypeId: number }>({
            
            query: query => ({
               url: `Work`,
               method: "POST",
               body: {
                   name: query.workTitle,
                   workTypeId: query.workTypeId,
               },
            }),
            invalidatesTags: ['Works', 'Stats']
        }),
        getWorkStats: builder.query<IStudentStatistic[], {
            workId: number
        }>({
            query: query => ({
                url: `Work/${query.workId}/stats`,
                method: "GET",
            }),
            providesTags: ['Stats']
        }),
    })
})

export const {
    useAddWorkMutation,
    useGetWorkStatsQuery,
} = workApi