// from backend fetch all groups assigned to a member

import {GET_TEAM_MEMBER_ASSIGNED_URL, GET_TEAM_MEMBER_URL} from "../iotConfig";
import {GroupOfSensors} from "../FakeBackend/getSGroups";
import {Member} from "../FakeBackend/getMembers";


export const fetchMember = async (id) => {
    console.log("[ fetchMember ] Sending request to fetch Member.")
    const res = await fetch(
        GET_TEAM_MEMBER_URL,
        {
            method: "POST",
            body: JSON.stringify({"id": id})
        }
    )
    const resJson = await res.json()
    console.log("[ fetchMember ] resp: ", res, ", resp.json: ", resJson)
    const member = jsonToMember(resJson)
    console.log("[ fetchMember ] found member: ", member)
    return member
}
const jsonToMember = (m) => {
    return new Member(m.id, m.fullname, m.joinedAt, m.assigned, m.notes)
}

// ---------------------------------------


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

const jsonToSgroups = (list) => {
    const list2 = list.map(g =>
        new GroupOfSensors(g.id, g.name, g.assigned, g.measurements, g.notes))
    console.log("[ from backend ] all objects of type GroupOfSensors: ", list2)
    return list2
}
export const getMemberAssignedSgroups = async (id) => {
    const assignedFromServer = await fetchMemberAssigned(id)
    console.log("assignedFromServer sGroups: ", assignedFromServer)
    return jsonToSgroups(assignedFromServer) // lista obj
}

// ---------------------------------------

