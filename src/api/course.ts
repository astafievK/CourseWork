import {baseApi} from "./api.ts";

export const courseApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getCourses: builder.query<ICourse[], void>({
            query: () => ({
                url: `Course`,
                method: "GET",
            }),
        }),
    })
})

export const {
    useGetCoursesQuery,
} = courseApi