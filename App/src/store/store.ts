import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {api} from "../api/api.ts";

const rootReducer = combineReducers({
    [api.reducerPath]:api.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(api.middleware),
    });
}

export const store = setupStore()
export type AppStore = ReturnType<typeof setupStore>
export type AppState = ReturnType<typeof rootReducer>