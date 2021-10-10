import {sendRequest} from "./backendConnector";
import {URL_SDATA_LIST} from "../iotConfig";
import {Measurement} from "../FakeBackend/Measurement";


const jsonToMeasurement = (m) => {
    const ret = new Measurement(
        m.SDASID, m.SDATS, m.SDATR, translateFromSDATYPE(m.SDATYPE), m.SDADATA
    )
    if(ret.SDATYPE === "PRES") {
        ret.SDADATA /= 10
    }
    return ret
}

const jsonToMeasurements = (list) => {
    return list.map(jsonToMeasurement)
}

// -----------------------------------------


// uint8_t  SDATYPE;
// JSON:number, Sensor DAta TYPE:
// 0x00 - int8_t    BATT; %, range: 0..100 (0..255)
// 0x01 - int16_t   SNR;
// 0x02 - int16_t   RSSI;
// 0x10 - uint16_t  TEMP; °K*10, range 0..6553.5°K (0..65535)
// 0x11 - uint8_t   RHUM; %, range: 0..100 (0..255)
// 0x12 - uint16_t  PRES; Pa/10, range: 0..6553,5hPa (0..65535)

const translateToSDATYPE = (list) => {
    const res = []
    if(!list) {
        return undefined
    }
    if (list.includes("BATT")) {res.push(0x00)}
    if (list.includes("SNR")) {res.push(0x01)}
    if (list.includes("RSSI")) {res.push(0x02)}
    if (list.includes("TEMP")) {res.push(0x10)}
    if (list.includes("RHUM")) {res.push(0x11)}
    if (list.includes("PRES")) {res.push(0x12)}
    return res
}

const translateFromSDATYPE = (type) => {
    if (type === 0x00){return "BATT"}
    if (type === 0x01){return "SNR"}
    if (type === 0x02){return "RSSI"}
    if (type === 0x10){return "TEMP"}
    if (type === 0x11){return "RHUM"}
    if (type === 0x12){return "PRES"}
}


export const fetchMeasurements = async (sensorId, listSDATYPE, limitOfMsrmnts) => {
    const res = await sendRequest(
        URL_SDATA_LIST,
        {
            "SDASID": parseInt(sensorId),
            // "SDATS0": "<DATE TIME>",
            // "SDATS1": "<DATE TIME>",
            "SDATYPE": translateToSDATYPE(listSDATYPE),
            "SDALIMIT": limitOfMsrmnts
        }
        // REQ > {"SDASID": "<SENSOR ID>", "SDATS0": "<DATE TIME>", "SDATS1": "<DATE TIME>",
        //        "SDATYPE": "<SDATYPE>", "SDALIMIT": 123}
        // ANS < { SDATR, SDATS, SDASID, SDATYPE, SDADATA }
    )
    return jsonToMeasurements(res.body)
}
//---------------------------------------------------------------
