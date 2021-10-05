
export class GroupOfSensors {
    /** @type {string} */
    id
    /** @type {string} */
    name
    /** @type {string[]} */
    assigned
    /** @type {Measurement[]} */
    measurements
    /** @type {string} */
    notes
    /** @type {boolean} */
    is_new

    constructor(id, name, notes) {
        this.id = id;
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
