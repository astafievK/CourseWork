import {api} from "./api.ts";

export const semesterApi = api.injectEndpoints({
    endpoints: builder => ({
        getSemesters: builder.query<Semester[], void>({
            query: () => ({
                url: `Semester`,
                method: "GET",
            }),
        })
    })
})

export const {
    useGetSemestersQuery,
} = semesterApi