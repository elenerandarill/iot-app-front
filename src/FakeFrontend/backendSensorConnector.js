import {
    URL_SENSOR_ASSIGNED_GET,
    URL_SENSOR_GET,
    URL_SENSOR_LIST,
    URL_SENSOR_SET,
    URL_SENSOR_ASSIGNED_SET, URL_SGROUP_ASSIGNED_ADD, URL_SGROUP_ASSIGNED_REM,
} from "../iotConfig";
import {GpsCoordinate} from "../FakeBackend/gpsCoordinate";
import {Sensor} from "../FakeBackend/getSensors";
import {assignedIds, jsonToSgroups} from "./backendSgroupConnector";
import {sendRequest} from "./backendConnector";



// Parsowanie JSONa
export const jsonToSensor = (s) => {
    const location = new GpsCoordinate(s.SELAT, s.SELONG)
    return new Sensor(s.SENID, s.SETYPE , s.SENAME , s.SEDID , location, s.SEDES )
}

export const jsonToSensors = (list) => {
    return list.map(jsonToSensor)
}

// -----------------------------------------

export const fetchSensor = async (id) => {
    const res = await sendRequest(
        URL_SENSOR_GET,
        {"SENID": parseInt(id)}
    )
    return jsonToSensor(res.body)
}

export const fetchSensors = async () => {
    const res = await sendRequest(
        URL_SENSOR_LIST
    )
    return jsonToSensors(res.body)
}
//---------------------------------------------------------------

export const getSensorAssignedSgroups = async (id) => {
    const res = await sendRequest(
        URL_SENSOR_ASSIGNED_GET,
        {"SGMSID": parseInt(id)}
    )
    return jsonToSgroups(res.body)
}

export const updateSensorGps = async (position, id) => {
    await sendRequest(
        URL_SENSOR_SET,
        {"SENID": parseInt(id),
            "SELAT": position.latitude,
            "SELONG": position.longitude}
    )
    return position
}
