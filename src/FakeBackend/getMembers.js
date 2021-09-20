
export class Member {
    /** @type {string} */
    id
    /** @type {string} */
    fullname
    /** @type {string} */
    joinedAt
    /**
     * Assigned group IDs
     * @type {string[]}
     */
    assigned
    /** @type {string} */
    notes

    constructor(id, fullname, joinedAt, assigned, notes) {
        this.id = id;
        this.fullname = fullname;
        this.joinedAt = joinedAt;
        this.assigned = assigned;
        this.notes = notes;
    }

    getDisplayName() {
        return this.fullname
    }
}
