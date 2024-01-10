import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/api'}),
    tagTypes: ['Discipline'],
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => 'data',
        }),
    }),
});