import {
    GET_SENSOR_ASSIGNED_URL,
    GET_SENSOR_URL,
    GET_SENSORS_URL,
    SET_LOCATION_URL,
    SET_SENSOR_ASSIGNED_URL
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
        GET_SENSOR_URL,
        {"id": id}
    )
    return jsonToSensor(res.body)
}

export const fetchSensors = async () => {
    const res = await sendRequest(
        GET_SENSORS_URL
    )
    return jsonToSensors(res.body)
}

export const getSensorAssignedSgroups = async (id) => {
    const res = await sendRequest(
        GET_SENSOR_ASSIGNED_URL,
        {"id": id}
    )
    return jsonToSgroups(res.body)
}

export const setSensorAssignedSgroups = async (sensor, assigned) => {
    const backConn = new BackendConnector()
    const response = await backConn.sendAssigned(
        SET_SENSOR_ASSIGNED_URL,
        sensor,
        assigned
    )
    return response
}

export const updateSensorGps = async (position, id) => {
    await sendRequest(
        SET_LOCATION_URL,
        {"id": id,
            "latitude": position.latitude,
            "longitude": position.longitude}
    )
    return position
}
