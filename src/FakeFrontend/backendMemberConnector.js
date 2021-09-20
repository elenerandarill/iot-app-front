import {GET_TEAM_MEMBER_ASSIGNED_URL, GET_TEAM_MEMBER_URL, SET_TEAM_MEMBER_ASSIGNED_URL} from "../iotConfig";
import {Member} from "../FakeBackend/getMembers";
import {jsonToSgroups} from "./backendSgroupConnector";
import {BackendConnector, sendRequest} from "./backendConnector";

// Parsowanie JSONa
const jsonToMember = (m) => {
    return new Member(m.id, m.fullname, m.joinedAt, m.assigned, m.notes)
}

// ---------------------------------------

export const fetchMember = async (id) => {
    const res = await sendRequest(
        GET_TEAM_MEMBER_URL,
        {"id": id}
    )
    return jsonToMember(res.body)
}

export const getMemberAssignedSgroups = async (id) => {
    const res = await sendRequest(
        GET_TEAM_MEMBER_ASSIGNED_URL,
        {"id": id}
    )
    return jsonToSgroups(res.body)
}

export const setMemberAssignedSgroups = async (member, assigned) => {
    const backConn = new BackendConnector()
    return await backConn.sendAssigned(
        SET_TEAM_MEMBER_ASSIGNED_URL,
        member,
        assigned
    )
}


