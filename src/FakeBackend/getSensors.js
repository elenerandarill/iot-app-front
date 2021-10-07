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

    constructor(id, type, name, sn, GPS, notes) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.GPS = GPS;
        this.notes = notes;
        this.sn = sn;
        this.battery = 13; //SDATA
        this.assigned = []; //SGMEMB
        this.measurements = []; //SDATA
        this.is_new = true // TODO zeby Krzysiek zrobil?
    }

    getDisplayName() {
        return this.name.trim() === "" ? this.sn.toString() : this.name
    }
}
