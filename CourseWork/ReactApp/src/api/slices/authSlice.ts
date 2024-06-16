import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthSlice {
    accessToken: string | null
    refreshToken: string | null
    user: IUser | null
}

const authSlice = createSlice({
    name: 'authorizations',
    initialState: {
        accessToken: null,
        refreshToken: null,
        user: null
    } as AuthSlice,
    reducers: {
        login: (state, action: PayloadAction<AuthSlice>) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            state.user = action.payload.user
        },
        logout: (state) => {
            state.accessToken = null
            state.refreshToken = null
            state.user = null
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
