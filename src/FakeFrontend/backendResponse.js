
export class BackendResponse {
    /** @type {number} */
    status
    //TODO: generyczność
    /** @type {any} */
    body


    constructor(status, body) {
        this.status = status;
        this.body = body;
    }
}