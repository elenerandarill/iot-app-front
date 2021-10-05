import {
    URL_NOTIFICATION_DEL,
    URL_NOTIFICATION_UNREAD_COUNT_GET,
    URL_NOTIFICATION_LIST,
    URL_NOTIFICATION_SET,
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
            a.CONID,
            a.NLINID,
            read_flag(a.NLIFLAGS),
            important_flag(a.NLIFLAGS),
            a.NOTFTS,
            a.CONNAME))
    console.log("[ getAlerts ] returned objects: ", list2)
    return list2
}

// --------------------------------------------

export const fetchAlerts = async () => {
    const res = await sendRequest(
        URL_NOTIFICATION_LIST
    )
    return jsonToAlert(res.body)
}

export const markReadAlert = async (id) => {
    return await sendRequest(
        URL_NOTIFICATION_SET,
        {"NLINID": parseInt(id), "NLIFLAGS": ["+READ"]}
    )
}

export const markImportanceAlert = async (id, value) => {
    let user = undefined
    if (value){
        user = "+USER"
    } else {
        user = "-USER"
    }
    return await sendRequest(
        URL_NOTIFICATION_SET,
        {"NLINID": parseInt(id), "NLIFLAGS": [user]}
    )
}

export const handleReadAlertsAll = async () => {
    return await sendRequest(
        URL_NOTIFICATION_SET,
        {"NLINID": "*", "NLIFLAGS": ["+READ"]}
    )
}

export const handleDeleteAlert = async (id) => {
    return await sendRequest(
        URL_NOTIFICATION_DEL,
        {"NLINID": parseInt(id)}
    )
}

export const handleDeleteAlertsAll = async () => {
    await sendRequest(
        URL_NOTIFICATION_DEL,
        {"NLINID": "*"}
    )
}

export const getUnreadAlertsCount = async () => {
    const res = await sendRequest(
        URL_NOTIFICATION_UNREAD_COUNT_GET
    )
    return res.body["NOTIF_UNREAD"]
}