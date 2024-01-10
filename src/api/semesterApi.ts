import {baseApi} from "./api.ts";

export const semesterApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getSemesters: builder.query<ISemester[], void>({
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