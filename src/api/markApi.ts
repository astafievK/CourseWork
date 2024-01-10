import {baseApi} from "./api.ts";

export const markApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getMarks: builder.query<IDiscipline[], void>({
            query: () => ({
                url: `Mark`,
                method: "GET",
            }),
        }),
    })
})

export const {
    useGetMarksQuery,
} = markApi