import {api} from "./api.ts";

export const courseApi = api.injectEndpoints({
    endpoints: builder => ({
        getCourses: builder.query<Discipline[], void>({
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