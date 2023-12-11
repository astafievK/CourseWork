import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {baseApi} from "../api/api.ts";
import authSlice from "../api/interfaces/IAuthState.ts"

const rootReducer = combineReducers({
    [baseApi.reducerPath]:baseApi.reducer,
    auth: authSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(baseApi.middleware),
    });
}

export const store = setupStore()
export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

