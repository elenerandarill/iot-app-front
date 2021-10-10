
export class Measurement {
    /** @type {number} */
    SDASID
    /** @type {string} */
    SDATS
    /** @type {string} */
    SDATR
    /** @type {string} */
    SDATYPE
    /** @type {number} */
    SDADATA

    constructor(SDASID, SDATS, SDATR, SDATYPE, SDADATA){
        this.SDASID = SDASID
        this.SDATS = SDATS
        this.SDATR = SDATR
        this.SDATYPE = SDATYPE
        this.SDADATA = SDADATA
    }

}
