export class Team {
    /** @type {number} */
    id
    /** @type {string} */
    name
    /** @type {number} */
    owner // User Group OWNer id -> USRID
    /** @type {Member[]} */
    members

    constructor(id, name, owner, members = []) {
        this.id = id
        this.name = name
        this.owner = owner
        this.members = members
    }

    getDisplayName = () => this.name
}