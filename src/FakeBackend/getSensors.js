import {GpsCoordinate} from "./gpsCoordinate";

export class Sensor {
    /** @type {number} */
    id
    /** @type {number} */
    owner
    /** @type {number} */
    type
    /** @type {string} */
    name
    /** @type {string} */
    sn
    /** @type {string} */
    notes
    // /** @type {number} */
    // battery
    // /** @type {string[]} */
    // assigned
    // /** @type {Measurement[]} */
    // measurements
    /** @type {GpsCoordinate} */
    GPS
    /** @type {boolean} */
    is_new


    constructor(id, owner, type, name, sn, notes, GPS) {
        this.id = id;
        this.owner = owner;
        this.type = type;
        this.name = name;
        this.sn = sn;
        this.notes = notes;
        this.GPS = GPS;
        this.is_new = true // TODO ?
        // this.battery = 13; //SDATA
        // this.assigned = []; //SGMEMB
        // this.measurements = []; //SDATA List[Measurement]
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
