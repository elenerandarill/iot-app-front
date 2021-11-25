
export default class PERM{
    /** @type {number} */  // Object ID which receives the permission
    PEOID
    /** @type {number} */  // Object ID to which permission is granted
    PEOBJ
    /** @type {string} */  // PEOID type
    PEOIDT
    /** @type {string} */  // PEOBJ type
    PEOBJT
    /** @type {string[]} */  // Received permissions
    PEMASK
    // "add",  "del",  "get",  "list", "new",  "rem",  "set"

    constructor(PEOID, PEOBJ, PEOIDT, PEOBJT, PEMASK) {
        this.PEOID = PEOID
        this.PEOBJ = PEOBJ
        this.PEOIDT = PEOIDT
        this.PEOBJT = PEOBJT
        this.PEMASK = PEMASK
    }
}

