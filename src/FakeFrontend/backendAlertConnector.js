import {
    DELETE_ALERT_URL,
    DELETE_ALERTS_ALL_URL,
    GET_ALERTS_UNREAD_COUNT_URL,
    GET_ALERTS_URL,
    SET_ALERT_READ_URL,
    SET_ALERTS_READ_URL,
} from "../iotConfig";
import {Alert} from "../FakeBackend/getAlerts";
import {sendRequest} from "./backendConnector";


// Parsowanie JSONa

const jsonToAlert = (list) => {
    const list2 = list.map(a =>
        new Alert(a.id, a.read, a.datetime, a.type, a.name, a.targetId, a.msg))
    console.log("[ getAlerts ] returned objects: ", list2)
    return list2
}

// --------------------------------------------

export const getAlerts = async () => {
    const res = await sendRequest(
        GET_ALERTS_URL
    )
    return jsonToAlert(res.body)
}

export const markReadAlert = async (id) => {
    await sendRequest(
        SET_ALERT_READ_URL,
        {"id": id}
    )
}

export const handleReadAlertsAll = async () => {
    await sendRequest(
        SET_ALERTS_READ_URL
    )
}

export const handleDeleteAlert = async (id) => {
    await sendRequest(
        DELETE_ALERT_URL,
        {"id": id}
    )
}

export const handleDeleteAlertsAll = async () => {
    await sendRequest(
        DELETE_ALERTS_ALL_URL
    )
}

export const getUnreadAlertsCount = async () => {
    const res = await sendRequest(
        GET_ALERTS_UNREAD_COUNT_URL
    )
    return res.body
}