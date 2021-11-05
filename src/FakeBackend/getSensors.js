export class Sensor {
    /** @type {number} */
    id
    /** @type {number} */
    type
    /** @type {string} */
    name
    /** @type {string} */
    sn
    /** @type {number} */
    battery
    /** @type {string[]} */
    assigned
    /** @type {Measurement[]} */
    measurements
    /** @type {GpsCoordinate} */
    GPS
    /** @type {string} */
    notes

    constructor(id, type, name, sn, GPS, notes) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.GPS = GPS;
        this.notes = notes;
        this.sn = sn;
        this.battery = 13; //SDATA
        this.assigned = []; //SGMEMB
        this.measurements = []; //SDATA List[Measurement]
        this.is_new = true // TODO ?
    }

    getDisplayName() {
        return this.name.trim() === "" ? this.sn.toString() : this.name
    }

    getSensorType() {
        if (this.type === 1) return "AM123"
        if (this.type === 2) return "BM123"
        if (this.type === 3) return "CM123"
    }
}
