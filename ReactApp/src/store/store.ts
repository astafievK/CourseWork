import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {baseApi} from "../api/api.ts";
import authSlice from "../api/slices/authSlice.ts"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import selectSlice from "../api/slices/selectSlice.ts";
import {setupListeners} from "@reduxjs/toolkit/query";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    [baseApi.reducerPath]:baseApi.reducer,
    auth: authSlice,
    select: selectSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
    const store = configureStore({
        reducer: persistedReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(baseApi.middleware),
    });

    const persistor = persistStore(store);

    setupListeners(store.dispatch)

    return { store, persistor };
};


export const { store, persistor } = setupStore();
export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

