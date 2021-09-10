import {BackendResponse} from "./backendResponse";

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
        // console.log("przekazano: ", object)

        // POST
        return await this.sendForm(url, data)
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
        return await this.sendForm(url, data)
    }



    /**
     * @param url {string}
     * @param data {Object.<string, any>}
     * @returns {Promise<BackendResponse>}
     */
    async sendForm(url, data) {
        console.log("[ Connector ] sending URL: ", url, ", data: ", data)
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
        console.log("[ Response ] STATUS: ", resStatus, ", resp BODY: ", resJson)

        return new BackendResponse(resStatus, resJson)
    }
}

