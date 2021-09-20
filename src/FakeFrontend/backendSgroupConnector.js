import {GET_SGROUP_ASSIGNED_URL, GET_SGROUP_URL, GET_SGROUPS_URL, SET_SGROUP_ASSIGNED_URL} from "../iotConfig";
import {GroupOfSensors} from "../FakeBackend/getSGroups";
import {jsonToSensors} from "./backendSensorConnector";
import {BackendConnector, sendRequest} from "./backendConnector";

// Parsowanie JSONa

export const jsonToSgroup = (g) => {
    return new GroupOfSensors(g.id, g.name, g.assigned, g.measurements, g.notes)
}

export const jsonToSgroups = (list) => {
    return list.map(jsonToSgroup)
}

// ----------------------------------------

export const fetchSgroup = async (id) => {
    const res = await sendRequest(
        GET_SGROUP_URL,
        {"id": id}
    )

    return jsonToSgroup(res.body)
}

export const fetchSgroups = async () => {
    const res = await sendRequest(
        GET_SGROUPS_URL
    )
    return jsonToSgroups(res.body)
}

export const getSgroupAssignedSensors = async (id) => {
    const res = await sendRequest(
        GET_SGROUP_ASSIGNED_URL,
    {"id": id}
    )
    return jsonToSensors(res.body)
}

export const setSgroupAssignedSensors = async (sgroup, assigned) => {
    const backConn = new BackendConnector()
    return await backConn.sendAssigned(
        SET_SGROUP_ASSIGNED_URL,
        sgroup,
        assigned
    )
}