import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import {URL_SERVER_BASE} from "../../iotConfig";
import * as authService from "../../authService";


export const alertsApiSlice = createApi({
        reducerPath: 'alertsApi',
        baseQuery: fetchBaseQuery({
            baseUrl: URL_SERVER_BASE,
            prepareHeaders(headers) {
                const loggedUser = authService.getLoggedUser()
                if (loggedUser) {
                    headers.set("SESID", loggedUser.sessionId)
                    return headers
                }
            }
        }),
        endpoints: (builder) => ({
            fetchAlerts: builder.query({
                query: () => ({
                    url: "/NOTIF/get_unread_count",
                    method: 'POST',
                    body: {},
                    // responseHandler: (response) => {
                    //     return response.json()
                    //         .then(json => json.NOTIF_UNREAD)
                    // },
                    responseHandler: async (response) => {
                        return (await response.json()).NOTIF_UNREAD
                    },
                })
            })
        })
    })

export const { useFetchAlertsQuery } = alertsApiSlice

