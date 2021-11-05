import {
    URL_SGROUP_ASSIGNED_GET,
    URL_SGROUP_GET,
    URL_SGROUP_LIST,
    URL_SGROUP_NEW, URL_SGROUP_DEL, URL_SGROUP_ASSIGNED_ADD, URL_SGROUP_ASSIGNED_REM
} from "../iotConfig";
import {GroupOfSensors} from "../FakeBackend/getSGroups";
import {jsonToSensors} from "./backendSensorConnector";
import {sendRequest} from "./backendConnector";

// Parsowanie JSONa

export const jsonToSgroup = (g) => {
    return new GroupOfSensors(g.SGRID , g.SGNAME , g.SGDESC )
}

export const jsonToSgroups = (list) => {
    return list.map(jsonToSgroup)
}

// ----------------------------------------

export const fetchSgroup = async (id) => {
    const res = await sendRequest(
        URL_SGROUP_GET,
        {"SGRID": parseInt(id)}
    )

    return jsonToSgroup(res.body)
}

export const fetchSgroups = async () => {
    const res = await sendRequest(
        URL_SGROUP_LIST
    )
    return jsonToSgroups(res.body)
}

export const assignedIds = (assigned) => {
    // returns list of ids
    return assigned.map(a => a.id)
}

export const newSgroup = async (name) => {
    const res = await sendRequest(
        URL_SGROUP_NEW,
        {"SGNAME": name}
    )
    return res.body["SGRID"]
}


export const delSgroup = async (id) => {
    const res = await sendRequest(
        URL_SGROUP_DEL,
        {"SGRID": parseInt(id)}
    )
    return res.status
}

export const addSgroupMemb = async (gId, sId) => {
    const res = await sendRequest(
        URL_SGROUP_ASSIGNED_ADD,
        {
            "SGMGID": parseInt(gId),
            "SGMSID": parseInt(sId)
        }
    )
    return res.status
}

export const remSgroupMemb = async (gId, sId) => {
    const res = await sendRequest(
        URL_SGROUP_ASSIGNED_REM,
        {
            "SGMGID": parseInt(gId),
            "SGMSID": parseInt(sId)
        }
    )
    return res.status
}

export const getSgroupAssignedSensors = async (id) => {
    const res = await sendRequest(
        URL_SGROUP_ASSIGNED_GET,
    {"SGMGID": parseInt(id)}
    )
    return jsonToSensors(res.body)
}
