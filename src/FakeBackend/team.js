export class Team {
    /** @type {number} */
    id
    /** @type {string} */
    name
    /** @type {number} */
    owner // User Group OWNer id -> USRID
    /** @type {boolean} */
    is_new


    constructor(id, name, owner) {
        this.id = id
        this.name = name
        this.owner = owner
        this.is_new = true
    }

    getDisplayName = () => this.name
}