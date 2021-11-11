import {
    URL_TEAM_MEMBER_ASSIGNED_GET,
    URL_USER_GET,
    URL_TEAM_MEMBER_ASSIGNED_SET,
    URL_TEAM_MEMBER_NEW,
    URL_TEAM_MEMBER_REM,
    URL_TEAMS_LIST,
    URL_TEAM_GET,
    URL_TEAM_MEMBER_LIST,
    URL_TEAM_NEW,
    URL_USER_LIST, URL_TEAM_DEL, URL_USER_DEL
} from "../iotConfig";
import {Member} from "../FakeBackend/getMembers";
import {sendRequest} from "./backendConnector";
import {Perm} from "../FakeBackend/getPerms";
import {Team} from "../FakeBackend/team";
import {assignedIds} from "./backendSgroupConnector";

// Parsowanie JSONa
const jsonToTeam = (t) => {
    return new Team(t.UGRID, t.UGNAME, t.UGOWN, t.members)
}

const jsonToTeams = (list) => list.map(jsonToTeam)

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
export const fetchUsers = async () => {
    const res = await sendRequest(
        URL_USER_LIST,
        {}
    )
    return jsonToMembers(res.body)
}

export const fetchUser = async (uId) => {
    const res = await sendRequest(
        URL_USER_GET,
        {"USRID": parseInt(uId)}
    )
    return jsonToMember(res.body)
}

export const delUser = async (uID) => {
    const res = await sendRequest(
        URL_USER_DEL,
        {"USRID": parseInt(uID)}
    )
    return res.body
}


export const fetchTeams = async () => {
    const res = await sendRequest(
        URL_TEAMS_LIST,
        {}
    )
    return jsonToTeams(res.body)
}

export const fetchTeam = async (id) => {
    const res = await sendRequest(
        URL_TEAM_GET,
        {"UGRID": parseInt(id)}
    )
    return jsonToTeam(res.body)
}

export const fetchTeamMembers = async (id) => {
    const res = await sendRequest(
        URL_TEAM_MEMBER_LIST,
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

export const newTeam = async (name) => {
    const res = await sendRequest(
        URL_TEAM_NEW,
        {"UGNAME": name}
    )
    console.log("tworzenie grupy <<<: ", res.body)
    return res.body["UGRID"]
}

export const delTeam = async (grID) => {
    const res = await sendRequest(
        URL_TEAM_DEL,
        {"UGRID": parseInt(grID)}
    )
    return res.body
}


export const addMember = async (userId, grID) => {
    // https://stackoverflow.com/questions/29775797/fetch-post-json-data
    const res = await sendRequest(
        URL_TEAM_MEMBER_NEW,
        {
            "UGMGID": parseInt(grID),
            "UGMUID": parseInt(userId),
        }
    )
    return res.status
}

export const remMember = async (userId, grID) => {
    const res = await sendRequest(
        URL_TEAM_MEMBER_REM,
        {
            "UGMGID": parseInt(grID),
            "UGMUID": parseInt(userId),
        }
    )
    return res.status
}


export const getMemberAssigned = async (id) => {
    const res = await sendRequest(
        URL_TEAM_MEMBER_ASSIGNED_GET,
        {"PEOID": parseInt(id), "PEOIDT": "USER"}
    )
    return res.body.map(o => jsonToPerm(o))
}

const assignedObj = (assigned) => {
    // [ { PEOBJ: 123, PEOBJT: "SENSOR" }, { PEOBJ: 124, PEOBJT: "SGROUP"} ]
    let list = []
    for (const obj of assigned){
        list.push({
            "PEOBJ": parseInt(obj.id),
            "PEMASK": ["list", "get", "set", "new", "del", "add", "rem"]
        })
    }
    return list
}

export const setMemberAssigned = async (id, assigned, assType) => {
    const list = assignedObj(assigned)
    const res = await sendRequest(
        URL_TEAM_MEMBER_ASSIGNED_SET,
        {
            "PEOID": parseInt(id),
            "PEOIDT": "USER",
            "PEOBJT": assType,
            "ASSIGNED": list,
        }
    )
    return res.status
}



