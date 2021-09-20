
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

    constructor(id, name, assigned, measurements, notes) {
        this.id = id;
        this.name = name;
        this.assigned = assigned;
        this.measurements = measurements;
        this.notes = notes;
    }

    getDisplayName() {
        return this.name
    }
}
