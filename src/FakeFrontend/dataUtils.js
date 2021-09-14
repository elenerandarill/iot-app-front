import {GET_TEAM_MEMBER_ASSIGNED_URL} from "../iotConfig";
import {GroupOfSensors} from "../FakeBackend/getSGroups";


const fetchSgroupAssigned = async (id) => {
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
    const assignedFromServer = await fetchSgroupAssigned(id)
    console.log("assignedFromServer: ", assignedFromServer)
    return jsonToSgroup(assignedFromServer) // lista obj
}

