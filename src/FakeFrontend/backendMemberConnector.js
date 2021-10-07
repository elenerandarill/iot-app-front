import {
    URL_TEAM_MEMBER_ASSIGNED_GET,
    URL_USER_GET,
    URL_TEAM_MEMBER_ASSIGNED_SET,
    URL_TEAM_LIST, URL_TEAM_MEMBER_NEW, ROUTE_TMEMBER_LIST, URL_TEAM_MEMBER_REM
} from "../iotConfig";
import {Member} from "../FakeBackend/getMembers";
import {sendRequest} from "./backendConnector";
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



export const newMember = async (userId) => {
    // https://stackoverflow.com/questions/29775797/fetch-post-json-data
    const res = await sendRequest(
        URL_TEAM_MEMBER_NEW,
        {
            "UGMGID": 1, //TODO tutaj trzeba bedzie znalezc id ugrupy!
            "UGMUID": parseInt(userId),
        }
    )
    return res.status
}

export const remMember = async (userId) => {
    const res = await sendRequest(
        URL_TEAM_MEMBER_REM,
        {
            "UGMGID": 1, //TODO tutaj trzeba bedzie znalezc id ugrupy!
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


