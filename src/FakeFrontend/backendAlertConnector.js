import {
    DELETE_ALERT_URL,
    DELETE_ALERTS_ALL_URL,
    GET_ALERTS_URL,
    SET_ALERT_READ_URL,
    SET_ALERTS_READ_URL, SET_LOCATION_URL
} from "../iotConfig";
import {Alert} from "../FakeBackend/getAlerts";

export const getAlerts = async () => {
    const alertsFromServer = await fetchAlerts()
    console.log("[ getAlerts ] alertsFromServer: ", alertsFromServer)
    return jsonToAlert(alertsFromServer)
}
const fetchAlerts = async () => {
    console.log("[ getAlerts ] Sending request to fetch Alerts")
    const res = await fetch(
        GET_ALERTS_URL,
        {method: "POST"}
    )
    return await res.json()
}

const jsonToAlert = (list) => {
    const list2 = list.map(a =>
        new Alert(a.id, a.read, a.datetime, a.type, a.name, a.targetId, a.msg))
    console.log("[ getAlerts ] returned objects: ", list2)
    return list2
}

// --------------------------------------------


export const readAlert = async (id) => {
    console.log("[ readAlert ] Sending request to read Alert")
    const res = await fetch(
        SET_ALERT_READ_URL,
        {
            method: "POST",
            body: JSON.stringify({"id": id})
        }
    )
    console.log(" [ readAlert ] status: ", res.status)
}

// --------------------------------------------


export const handleReadAlertsAll = async () => {
    console.log("[ Mark ] wszyskie alerty jako przeczytane")
    const res = await fetch(
        SET_ALERTS_READ_URL,
        {method: "POST"}
    )
    if (res.status === 200){
        console.log("[ Mark ] Oznaczono wszystkie alerty.")

    }
    else {
        console.log("[ Mark ] Cos poszlo nie tak, status: ", res.status)
    }
}

// --------------------------------------------


export const handleDeleteAlert = async (id) => {
    console.log("[ Delete ] wszystkie alerty")
    const res = await fetch(
        DELETE_ALERT_URL,
        {
            method: "POST",
            body: JSON.stringify({"id": id})
        }
    )
    if (res.status === 200){
        console.log("[ Delete ] Usunieto alert o id: ", id)
    }
    else {
        console.log("[ Delete ] Cos poszlo nie tak, status: ", res.status)
    }
}

// --------------------------------------------

export const handleDeleteAlertsAll = async () => {
    console.log("[ DeleteAll ] wszystkie alerty")
    const res = await fetch(
        DELETE_ALERTS_ALL_URL,
        {method: "POST"}
    )
    if (res.status === 200){
        console.log("[ DeleteAll ] Usunieto wszystkie alerty.")

    }
    else {
        console.log("[ DeleteAll ] Cos poszlo nie tak, status: ", res.status)
    }
}

// --------------------------------------------
