import {api} from "./api.ts";

export const markApi = api.injectEndpoints({
    endpoints: builder => ({
        getMarks: builder.query<Discipline[], void>({
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