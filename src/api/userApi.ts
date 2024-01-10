import {baseApi} from "./api.ts";
import {login} from "./interfaces/IAuthState.ts";


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
        }),
        login: builder.mutation<IAuthorizationResult, ILoginCommand>({
            query: command => ({
                url: `User/login`,
                method: "POST",
                body: command,
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}){
                try{
                    const {data} = await queryFulfilled
                    await dispatch(login(data))
                } catch (err){
                    console.log(err)
                }
            },
        }),
    }),
})

export const {
    useGetUserMutation,
    useLoginMutation,
} = userApi