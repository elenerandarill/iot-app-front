
export class GroupOfSensors {
    /** @type {number} */
    id
    /** @type {number} */
    owner
    /** @type {string} */
    name
    /** @type {string} */
    notes
    /** @type {boolean} */
    is_new
    // /** @type {string[]} */
    // assigned
    // /** @type {Measurement[]} */
    // measurements

    constructor(id, owner, name, notes) {
        this.id = id;
        this.owner = owner;
        this.name = name;
        this.notes = notes;
        this.is_new = true; // TODO zeby Krzysiek zrobil?
        // this.assigned = assigned;
        // this.measurements = measurements;
    }

    getDisplayName() {
        return this.name
    }
}
