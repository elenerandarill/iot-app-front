
export class UGRM {
    /** @type {number} */
    UGMGID
    /** @type {number} */
    UGMUID

    constructor(UGMGID, UGMUID) {
        this.UGMGID = UGMGID
        this.UGMUID = UGMUID
    }

    getDisplayName() {
        return(this.UGMGID + " " + this.UGMUID)
    }
}
