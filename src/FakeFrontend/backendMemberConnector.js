import {
    URL_TEAM_MEMBER_ASSIGNED_GET,
    URL_USER_GET,
    URL_TEAM_MEMBER_ASSIGNED_SET,
    URL_TEAM_LIST
} from "../iotConfig";
import {Member} from "../FakeBackend/getMembers";
import {BackendConnector, sendRequest} from "./backendConnector";
import {Perm} from "../FakeBackend/getPerms";

// Parsowanie JSONa
const jsonToMember = (m) => {
    return new Member(
        m.USRID, m.UFNAME, m.ULNAME, m.UEMAIL, m.UASTREET, m.UANUMBER,
        m.UAAPRTMNT, m.UALOCALITY, m.UAPOSTCODE, m.UAPROVINCE, m.UACOUNTY
    )
}
const jsonToMembers = (list) => {
    return list.map(jsonToMember)
}

const jsonToPerm = (p) => {
    let name = undefined
    if (p.PEOBJT === "SGROUP"){
        name = p.SGNAME
    } else {
        name = p.SENAME
    }
    return new Perm(p.PEOBJ, p.PEOBJT, name, p.SEDID)
}

// ---------------------------------------
export const fetchTeam = async (id) => {
    const res = await sendRequest(
        URL_TEAM_LIST,
        {"UGMGID": parseInt(id)}
    )
    return jsonToMembers(res.body)
}


export const fetchMember = async (id) => {
    const res = await sendRequest(
        URL_USER_GET,
        {"USRID": parseInt(id)}
    )
    return jsonToMember(res.body)
}

export const getMemberAssigned = async (id) => {
    const res = await sendRequest(
        URL_TEAM_MEMBER_ASSIGNED_GET,
        {"PEOID": parseInt(id), "PEOIDT": "USER"}
    )
    console.log("res: ", res)
    return res.body.map(o => jsonToPerm(o))
}

export const setMemberAssignedSgroups = async (member, assigned) => {
    const backConn = new BackendConnector()
    return await backConn.sendAssigned(
        URL_TEAM_MEMBER_ASSIGNED_SET,
        member,
        assigned
    )
}


