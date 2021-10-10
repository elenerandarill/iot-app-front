
export class MapMarker {
    /** @type {string} */
    key
    /** @type {string} */
    name
    /** @type {GpsCoordinate} */
    gpsCoords

    constructor(key, name, gpsCoords) {
        this.key = key
        this.name = name
        this.gpsCoords = gpsCoords
    }

}

