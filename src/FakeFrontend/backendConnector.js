import {BackendResponse} from "./backendResponse";
import * as authService from "../authService";

/**
 * @param url {string}
 * @param data {Object.<string, any>?}
 * @returns {Promise<BackendResponse>}
 */
export const sendRequest = async (url, data) => {
    console.log("[ Connector ] sending URL: ", url, ", data: ", data)
    if (data === undefined){
        data = {}
    }
    const loggedUser = authService.getLoggedUser()
    if (loggedUser){
        data["SESID"] = loggedUser.sessionId
    }

    const res = await fetch(
        url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    )

    const resStatus = res.status
    // Aby wyciagnac body! i tez zwraca Promise, stąd await
    const resJson = await res.json()
    console.log("[ Response ] STATUS: ", resStatus, ", BODY: ", resJson)

    return new BackendResponse(resStatus, resJson)
}

// universal func for changing either name or notes value of the object.
export const changeValue = async (url, idName, id, propName, propValue) => {
    let data = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://example.com/product.schema.json",
    }
    data[idName] = id
    data[propName] = propValue

    // POST
    return await sendRequest(url, data)
}


