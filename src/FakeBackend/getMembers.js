
export class Member {
    /** @type {number} */
    id
    /** @type {string} */
    fname
    /** @type {string} */
    lname
    /** @type {string} */
    email
    /** @type {string} */
    astreet
    /** @type {string} */
    anumber
    /** @type {string} */
    aaprtmnt
    /** @type {string} */
    alocality
    /** @type {string} */
    apostcode
    /** @type {string} */
    aprovince
    /** @type {string} */
    acountry
    /**
     * Assigned group IDs
     * @type {string[]}
     */
    assigned

    constructor(id, fname, lname, email, astreet, anumber,
                aaprtmnt, alocality, apostcode, aprovince, acountry) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.astreet = astreet;
        this.anumber = anumber;
        this.aaprtmnt = aaprtmnt;
        this.alocality = alocality;
        this.apostcode = apostcode;
        this.aprovince = aprovince;
        this.acountry = acountry;
        this.is_new = true;  // TODO zeby Krzysiek zrobil?
    }

    getDisplayName() {
        return(this.fname + " " + this.lname)
    }
}
