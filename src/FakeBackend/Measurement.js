
export class Measurement {
    /** @type {number} */
    SDAID
    /** @type {string} */
    SDATS
    /** @type {string} */
    SDATR
    /** @type {string} */
    SDATYPE
    /** @type {number} */
    SDADATA

    constructor(SDAID, SDATS, SDATR, SDATYPE, SDADATA){
        this.SDAID = SDAID
        this.SDATS = SDATS
        this.SDATR = SDATR
        this.SDATYPE = SDATYPE
        this.SDADATA = SDADATA
    }

}
