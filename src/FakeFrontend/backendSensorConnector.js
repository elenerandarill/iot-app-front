import {
    URL_SENSOR_ASSIGNED_GET,
    URL_SENSOR_GET,
    URL_SENSOR_LIST,
    URL_SENSOR_SET,
    URL_SENSOR_ASSIGNED_SET
} from "../iotConfig";
import {GpsCoordinate} from "../FakeBackend/gpsCoordinate";
import {Sensor} from "../FakeBackend/getSensors";
import {jsonToSgroups} from "./backendSgroupConnector";
import {BackendConnector, sendRequest} from "./backendConnector";



// Parsowanie JSONa
export const jsonToSensor = (s) => {
    const location = new GpsCoordinate(s.GPS[0], s.GPS[1])
    return new Sensor(s.id, s.type, s.name, s.sn, s.battery, s.assigned,
        s.measurements, location, s.notes)
}

export const jsonToSensors = (list) => {
    return list.map(jsonToSensor)
}

// -----------------------------------------

export const fetchSensor = async (id) => {
    const res = await sendRequest(
        URL_SENSOR_GET,
        {"id": id}
    )
    return jsonToSensor(res.body)
}

export const fetchSensors = async () => {
    const res = await sendRequest(
        URL_SENSOR_LIST
    )
    return jsonToSensors(res.body)
}

export const getSensorAssignedSgroups = async (id) => {
    const res = await sendRequest(
        URL_SENSOR_ASSIGNED_GET,
        {"id": id}
    )
    return jsonToSgroups(res.body)
}

export const setSensorAssignedSgroups = async (sensor, assigned) => {
    const backConn = new BackendConnector()
    const response = await backConn.sendAssigned(
        URL_SENSOR_ASSIGNED_SET,
        sensor,
        assigned
    )
    return response
}

export const updateSensorGps = async (position, id) => {
    await sendRequest(
        URL_SENSOR_SET,
        {"id": id,
            "latitude": position.latitude,
            "longitude": position.longitude}
    )
    return position
}
