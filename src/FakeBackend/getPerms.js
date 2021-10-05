
export class Perm {
    /** @type {number} */
    id
    /** @type {string} */
    type
    /** @type {string} */
    name
    /** @type {number} */
    sn

    constructor(id, type, name, sn) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.sn = sn;
    }

    getDisplayName() {
        return this.name
    }
}