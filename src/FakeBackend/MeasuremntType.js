export default class MeasuremntType {
    /**
     * @param name {string}
     * @param description {string}
     * @param unit {string}
     */
    constructor(name, description, unit) {
        this.name = name
        this.description = description
        this.unit = unit
    }

    //#define SDATYPE_BATT 0x00
    // #define SDATYPE_SNR 0x01
    // #define SDATYPE_RSSI 0x02
    // #define SDATYPE_TEMP 0x10
    // #define SDATYPE_RHUM 0x11
    // #define SDATYPE_PRES 0x12
    // #define SDATYPE_DIST 0x13
    // #define SDATYPE_TVOC 0x14
    // #define SDATYPE_CO2 0x15
    // #define SDATYPE_WLEV 0x16
    // #define SDATYPE_MODBDO 0xF0
    // #define SDATYPE_MODBDI 0xF1
    // #define SDATYPE_MODBIR 0xF3
    // #define SDATYPE_MODBHR 0xF4
}