import {GET_SENSOR_ASSIGNED_URL, GET_SGROUP_ASSIGNED_URL, GET_TEAM_MEMBER_ASSIGNED_URL} from "../iotConfig";
import {GroupOfSensors} from "../FakeBackend/getSGroups";
import {Sensor} from "../FakeBackend/getSensors";


// wysyłany jest request >> response jest przepisywany na obiekty
// >> lista obiektów jest zwracana z funkcji

// from backend fetch all groups assigned to a member

const fetchMemberAssigned = async (id) => {
    console.log("Sending request to fetch assigned of this sGroup")
    const res = await fetch(
        GET_TEAM_MEMBER_ASSIGNED_URL,
        { method: "POST",
            body: JSON.stringify({"id": id})
        }
    )
    return await res.json()
}

const jsonToSgroup = (list) => {
    const list2 = list.map(g =>
        new GroupOfSensors(g.id, g.name, g.assigned, g.measurements, g.notes))
    console.log("[ from backend ] all objects of type GroupOfSensors: ", list2)
    return list2
}

export const getMemberAssignedSgroups = async (id) => {
    const assignedFromServer = await fetchMemberAssigned(id)
    console.log("assignedFromServer sGroups: ", assignedFromServer)
    return jsonToSgroup(assignedFromServer) // lista obj
}

/////////////////////
// from backend fetch all sensors assigned to a group

const fetchSgroupAssigned = async (id) => {
    console.log("Sending request to fetch assigned of this sGroup")
    const res = await fetch(
        GET_SGROUP_ASSIGNED_URL,
        { method: "POST",
            body: JSON.stringify({"id": id})
        }
    )
    return await res.json()
}

const jsonToSensors = (list) => {
    const list2 = list.map(s =>
        new Sensor(
            s.id, s.type, s.name, s.sn, s.battery, s.assigned, s.measurements,s.GPS, s.notes
        ))
    console.log("[ from backend ] all objects of type Sensors: ", list2)
    return list2
}

export const getSgroupAssignedSensors = async (id) => {
    const assignedFromServer = await fetchSgroupAssigned(id)
    console.log("assignedFromServer Sensors: ", assignedFromServer)
    return jsonToSensors(assignedFromServer) // lista obj
}

/////////////////////
// from backend fetch all groups assigned to a sensor

const fetchSensorAssigned = async (id) => {
    console.log("Sending request to fetch assigned of this sGroup")
    const res = await fetch(
        GET_SENSOR_ASSIGNED_URL,
        { method: "POST",
            body: JSON.stringify({"id": id})
        }
    )
    return await res.json()
}

const jsonToSgroups = (list) => {
    const list2 = list.map(s =>
        new Sensor(
            s.id, s.type, s.name, s.sn, s.battery, s.assigned, s.measurements,s.GPS, s.notes
        ))
    console.log("[ from backend ] all objects of type Sensors: ", list2)
    return list2
}

export const getSensorAssignedSgroups = async (id) => {
    const assignedFromServer = await fetchSensorAssigned(id)
    console.log("assignedFromServer Sgroups: ", assignedFromServer)
    return jsonToSgroups(assignedFromServer) // lista obj
}
