import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const baseApi = createApi({
    reducerPath: 'api',
    tagTypes: ['Disciplines', 'Groups', 'Students', 'Works'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/api' }),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => 'data',
        }),
    }),
});