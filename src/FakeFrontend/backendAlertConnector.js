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

const read_flag = (notification) => {
    return notification.includes("READ");
}
const important_flag = (notification) => {
    return notification.includes("USER");
}

// Parsowanie JSONa

const jsonToAlert = (list) => {
    const list2 = list.map(a =>
        new Alert(
            a.NLINID,
            read_flag(a.NLIFLAGS),
            important_flag(a.NLIFLAGS),
            a.NOTFTS,
            a.type,
            a.name,
            a.targetId,
            a.CONNAME))
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
        {"NLINID": id, "NLIFLAGS": []}
    )
}

export const markImportanceAlert = async (id, value) => {
    return await sendRequest(
        URL_NOTIFICATION_SET,
        {"NLINID": id, "property": "important", "value": value}
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
    return res.body["NOTIF_UNREAD"]
}