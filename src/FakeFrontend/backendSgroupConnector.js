import {URL_SGROUP_ASSIGNED_GET, URL_SGROUP_GET, URL_SGROUP_LIST, URL_SGROUP_ASSIGNED_SET} from "../iotConfig";
import {GroupOfSensors} from "../FakeBackend/getSGroups";
import {jsonToSensors} from "./backendSensorConnector";
import {BackendConnector, sendRequest} from "./backendConnector";

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

export const getSgroupAssignedSensors = async (id) => {
    const res = await sendRequest(
        URL_SGROUP_ASSIGNED_GET,
    {"SGMGID": parseInt(id)}
    )
    return jsonToSensors(res.body)
}

export const setSgroupAssignedSensors = async (sgroup, assigned) => {
    const backConn = new BackendConnector()
    return await backConn.sendAssigned(
        URL_SGROUP_ASSIGNED_SET,
        sgroup,
        assigned
    )
}