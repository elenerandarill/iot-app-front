import {Measurement} from "./Measurement";
import {GpsCoordinate} from "./gpsCoordinate";

export class Sensor {
    /** @type {string} */
    id
    /** @type {string} */
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

    constructor(id, type, name, sn, battery, assigned, measurements, GPS, notes) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.sn = sn;
        this.battery = battery;
        this.assigned = assigned;
        this.measurements = measurements;
        this.GPS = GPS;
        this.notes = notes;
    }

    getDisplayName() {
        return this.name.trim() === "" ? this.sn : this.name
    }
}
