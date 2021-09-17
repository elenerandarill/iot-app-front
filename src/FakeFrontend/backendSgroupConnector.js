import {GET_SGROUP_ASSIGNED_URL, GET_SGROUP_URL, GET_SGROUPS_URL} from "../iotConfig";
import {Sensor} from "../FakeBackend/getSensors";
import {GroupOfSensors} from "../FakeBackend/getSGroups";


export const fetchSgroup = async (id) => {
    console.log("[ fetchSgroup ] Sending request to fetch Sgroup")
    const res = await fetch(
        GET_SGROUP_URL,
        {
            method: "POST",
            body: JSON.stringify({"id": id})
        }
    )
    const resJson = await res.json()
    console.log("[ fetchSgroup ] resp: ", res, ", resp.json: ", resJson)
    const sensor = jsonToSgroup(resJson)
    console.log("[ fetchSgroup ] found sensor: ", sensor)
    return sensor
}
const jsonToSgroup = (g) => {
    return new GroupOfSensors(g.id, g.name, g.assigned, g.measurements, g.notes)
}

// ----------------------------------------


export const getSgroups = async () => {
    const sGoupsFromServer = await fetchSgroups()
    console.log("sGoupsFromServer: ", sGoupsFromServer)
    return jsonToSgroups(sGoupsFromServer)
}


const fetchSgroups = async () => {
    console.log("Sending request to fetch sGroups")
    const res = await fetch(
        GET_SGROUPS_URL,
        { method: "POST" }
    )
    return await res.json()
}

const jsonToSgroups = (list) => {
    const list2 = list.map(g =>
        new GroupOfSensors(g.id, g.name, g.assigned, g.measurements, g.notes))
    console.log("[ from backend ] all objects of type GroupOfSensors: ", list2)
    return list2
}


// ----------------------------------------


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

// ----------------------------------------