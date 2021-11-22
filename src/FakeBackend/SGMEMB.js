
export class SGMEMB {
    /** @type {number} */
    SGMGID
    /** @type {number} */
    SGMSID

    constructor(SGMGID, SGMSID) {
        this.SGMGID = SGMGID
        this.SGMSID = SGMSID
    }

    getDisplayName() {
        return(this.SGMGID + " " + this.SGMSID)
    }
}
