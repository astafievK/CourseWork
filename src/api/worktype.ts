import {api} from "./api.ts";

export const workTypeApi = api.injectEndpoints({
    endpoints: builder => ({
        getWorkTypes: builder.query<WorkType[], void>({
            query: () => ({
                url: `WorkType`,
                method: "GET",
            }),
        }),
    })
})

export const {
    useGetWorkTypesQuery,
} = workTypeApi