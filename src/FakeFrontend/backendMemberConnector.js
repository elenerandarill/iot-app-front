import {URL_TEAM_MEMBER_ASSIGNED_GET, URL_TEAM_MEMBER_GET, URL_TEAM_MEMBER_ASSIGNED_SET} from "../iotConfig";
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
        URL_TEAM_MEMBER_GET,
        {"id": id}
    )
    return jsonToMember(res.body)
}

export const getMemberAssignedSgroups = async (id) => {
    const res = await sendRequest(
        URL_TEAM_MEMBER_ASSIGNED_GET,
        {"id": id}
    )
    return jsonToSgroups(res.body)
}

export const setMemberAssignedSgroups = async (member, assigned) => {
    const backConn = new BackendConnector()
    return await backConn.sendAssigned(
        URL_TEAM_MEMBER_ASSIGNED_SET,
        member,
        assigned
    )
}


