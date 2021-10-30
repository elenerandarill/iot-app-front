import { configureStore } from '@reduxjs/toolkit'
import {alertsApiSlice} from "../features/alerts/alertsApi";

export const store = configureStore({
    reducer: {
        [alertsApiSlice.reducerPath]: alertsApiSlice.reducer
        // unsplashApi: unsplashApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(alertsApiSlice.middleware);
    }
});