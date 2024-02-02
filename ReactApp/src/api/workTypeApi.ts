import {baseApi} from "./api.ts";

export const workTypeApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getWorkTypes: builder.query<IWorkType[], void>({
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