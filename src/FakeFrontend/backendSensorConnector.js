import {GET_SENSOR_ASSIGNED_URL, GET_SENSOR_URL, GET_SENSORS_URL, SET_LOCATION_URL} from "../iotConfig";
import {GpsCoordinate} from "../FakeBackend/gpsCoordinate";
import {Sensor} from "../FakeBackend/getSensors";
import {GroupOfSensors} from "../FakeBackend/getSGroups";


export const fetchSensor = async (id) => {
    console.log("Sending request to fetch Sensor")
    const res = await fetch(
        GET_SENSOR_URL,
        {
            method: "POST",
            body: JSON.stringify({"id": id})
        }
    )
    const resJson = await res.json()
    console.log("resp: ", res, ", resp.json: ", resJson)
    const sensor = jsonToSensor(resJson)
    console.log("sensor details: ", sensor)
    return sensor
}
const jsonToSensor = (s) => {
    const location = new GpsCoordinate(s.GPS[0], s.GPS[1])
    return new Sensor(s.id, s.type, s.name, s.sn, s.battery, s.assigned,
        s.measurements, location, s.notes)
}

// -----------------------------------------


export const getSensors = async () => {
    const sensorsFromServer = await fetchSensors()
    console.log("sensorsFromServer: ", sensorsFromServer)
    return jsonToSensors(sensorsFromServer)
}

const fetchSensors = async () => {
    console.log("Sending request to fetch Sensors")
    const res = await fetch(
        GET_SENSORS_URL,
        {method: "POST"}
    )
    return await res.json()
}

const jsonToSensors = (list) => {
    const list2 = list.map(s => {
        const location = new GpsCoordinate(s.GPS[0], s.GPS[1])
        return new Sensor(s.id, s.type, s.name, s.sn, s.battery, s.assigned,
            s.measurements, location, s.notes)
    })
    console.log("[ from backend ] all objects of type Sensor: ", list2)
    return list2
}

// -----------------------------------------

// from backend fetch all groups assigned to a sensor

const fetchSensorAssigned = async (id) => {
    console.log("[ fetchSensorAssigned ] Sending request to fetch assigned of this Sensor")
    const res = await fetch(
        GET_SENSOR_ASSIGNED_URL,
        { method: "POST",
            body: JSON.stringify({"id": id})
        }
    )
    return await res.json()
}

const jsonToSgroups = (list) => {
    const list2 = list.map(g =>
        new GroupOfSensors(
            g.id, g.name, g.assigned, g.measurements, g.notes
        ))
    console.log("[ fetchSensorAssigned ] received objects: ", list2)
    return list2
}

export const getSensorAssignedSgroups = async (id) => {
    const assignedFromServer = await fetchSensorAssigned(id)
    console.log("assignedFromServer Sgroups: ", assignedFromServer)
    return jsonToSgroups(assignedFromServer) // lista obj
}

// -----------------------------------------



export const updateSensorGps = async (position, id) => {
    console.log("[ GPS ] Wysylam request zmiany położenia dla czujnika o id: ", id)
    const res = await fetch(
        SET_LOCATION_URL,
        {
            method: "POST",
            body: JSON.stringify(
                {
                    "id": id,
                    "latitude": position.latitude,
                    "longitude": position.longitude}
            )
        }
    )
    console.log("[ GPS ] wysłano.")
    if (res.status === 200){
        console.log("[ GPS ] przyjeto zmiane lokalizacji.")
        return position
    } else {
        console.log("[ GPS ] Cos poszło nie tak, status: ", res.status)
    }
}
