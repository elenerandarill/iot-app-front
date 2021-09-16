import {
    GET_SENSOR_ASSIGNED_URL,
    GET_SGROUP_ASSIGNED_URL,
    GET_TEAM_MEMBER_ASSIGNED_URL
} from "../iotConfig";
import {GroupOfSensors} from "../FakeBackend/getSGroups";
import {Sensor} from "../FakeBackend/getSensors";
import {BackendConnector} from "./backendConnector";


// universal func for changing either name or notes value.

export const changeValue = async (value, object, url) => {
    try {
        console.log("New input for field: ", value)
        const backConn = new BackendConnector()
        const response = await backConn.sendAttribute(
            url,
            object,
            value
        )
        if (response.status === 200) {
            console.log("[ success ] in changing the value")
        } else {
            console.log("[ failure ] in changing value, the status: ", response.status)
        }
    }
    catch(e) {
        console.log("catch - ERROR", e)
    }
}

// wysyłany jest request >> response jest przepisywany na obiekty
// >> lista obiektów jest zwracana z funkcji

// from backend fetch all groups assigned to a member

const fetchMemberAssigned = async (id) => {
    console.log("Sending request to fetch assigned sGroups")
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

////////

// {Object.entries(group.measurements).map(([key, value]) =>
//     <div key={key.toString()} className="mrg-tb mrg-lr">
//         {key === "avTemp" && "śr. temperatura"}
//         {key === "avHumid" && "śr. wilgotność"}
//         {key === "avWind" && "śr. prędkość wiatru"}
//         :<br/>
//         <h2>{value}
//             {key === "avTemp" && " °C"}
//             {key === "avWind" && " km/h"}
//         </h2>
//     </div>
// )}