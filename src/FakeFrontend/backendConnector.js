import {BackendResponse} from "./backendResponse";

/**
 * @param url {string}
 * @param data {Object.<string, any>?}
 * @returns {Promise<BackendResponse>}
 */
export const sendRequest = async (url, data) => {
    console.log("[ Connector ] sending URL: ", url, ", data: ", data)
    data["SESID"] = "1aabb"     //TODO do testow tylko!
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
export const changeValue = async (value, object, url) => {
    try {
        console.log("New input for field: ", value)
        const backConn = new BackendConnector()
        const response = await backConn.sendAttribute(
            url,
            object,
            value
        )
        if (response.status === 200) {
            console.log("[ success ] in changing the value")
        } else {
            console.log("[ failure ] in changing value, the status: ", response.status)
        }
    }
    catch(e) {
        console.log("catch - ERROR", e)
    }
}

// ---------------------------------------


export class BackendConnector {

    /**
     * @param url {string}
     * @param object {any}
     * @param assigned {string[]}
     * @returns {Promise<BackendResponse>}
     */
    async sendAssigned(url, object, assigned) {
        const id = object.id

        const assignedIds = (assigned) => {
            // returns list of ids
            return assigned.map(a => a.id)
        }

        let data = {
            $schema: "https://json-schema.org/draft/2020-12/schema",
            $id: "https://example.com/product.schema.json",
            objectId: id,
            assigned: assignedIds(assigned)
        }

        // POST
        return await sendRequest(url, data)
    }

    /**
     * @param url {string}
     * @param object {any}
     * @param value {string[]}
     * @returns {Promise<BackendResponse>}
     */
    async sendAttribute(url, object, value) {
        const id = object.id

        let data = {
            $schema: "https://json-schema.org/draft/2020-12/schema",
            $id: "https://example.com/product.schema.json",
            objectId: id,
            value: value
        }
        // console.log("przekazano: ", object)

        // POST
        return await sendRequest(url, data)
    }




}

