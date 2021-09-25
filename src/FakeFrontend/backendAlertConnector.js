import {
    URL_NOTIFICATION_DEL,
    URL_NOTIFICATION_DEL_ALL,
    URL_NOTIFICATION_UNREAD_COUNT_GET,
    URL_NOTIFICATION_LIST,
    URL_NOTIFICATION_SET,
    URL_NOTIFICATION_READ_ALL_SET,
} from "../iotConfig";
import {Alert} from "../FakeBackend/getAlerts";
import {sendRequest} from "./backendConnector";


// Parsowanie JSONa

const jsonToAlert = (list) => {
    const list2 = list.map(a =>
        new Alert(a.id, a.read, a.important, a.datetime, a.type, a.name, a.targetId, a.msg))
    console.log("[ getAlerts ] returned objects: ", list2)
    return list2
}

// --------------------------------------------

export const getAlerts = async () => {
    const res = await sendRequest(
        URL_NOTIFICATION_LIST
    )
    return jsonToAlert(res.body)
}

export const markReadAlert = async (id) => {
    return await sendRequest(
        URL_NOTIFICATION_SET,
        {"id": id, "property": "read", "value": true}
    )
}

export const markImportanceAlert = async (id, value) => {
    return await sendRequest(
        URL_NOTIFICATION_SET,
        {"id": id, "property": "important", "value": value}
    )
}

export const handleReadAlertsAll = async () => {
    return await sendRequest(
        URL_NOTIFICATION_READ_ALL_SET
    )
}

export const handleDeleteAlert = async (id) => {
    return await sendRequest(
        URL_NOTIFICATION_DEL,
        {"id": id}
    )
}

export const handleDeleteAlertsAll = async () => {
    await sendRequest(
        URL_NOTIFICATION_DEL_ALL
    )
}

export const getUnreadAlertsCount = async () => {
    const res = await sendRequest(
        URL_NOTIFICATION_UNREAD_COUNT_GET
    )
    return res.body
}