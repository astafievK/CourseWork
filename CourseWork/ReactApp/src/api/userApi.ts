import {baseApi} from "./api.ts";
import {login} from "./slices/authSlice.ts";

interface UserData{
    login: string
    password: string
}

export const userApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getUser: builder.mutation<IUser[], UserData>({
            query: (data) => ({
                url: `User`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['Disciplines', 'Groups', 'Students', 'Works', 'Stats'],
        }),
        login: builder.mutation<IAuthorizationResult, ILoginCommand>({
            query: command => ({
                url: `User/login`,
                method: "POST",
                body: command,
            }),
            invalidatesTags: ['Disciplines', 'Groups', 'Students', 'Works', 'Stats'],
            async onQueryStarted(_, {dispatch, queryFulfilled}){
                try{
                    const {data} = await queryFulfilled
                    dispatch(login(data))
                } catch (err){
                    console.log(err)
                }
            },
        }),
        getGroup: builder.query<string, {
            idUser: number
        }>({
            query: query => ({
                url: `User/idUser=${query.idUser}/group`,
                method: "GET"
            })
        })
    }),
})

export const {
    useGetUserMutation,
    useLoginMutation,
    useGetGroupQuery
} = userApi