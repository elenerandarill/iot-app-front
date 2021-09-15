import ListAlerts from "./listAlerts";
import {Alert} from "../../../FakeBackend/getAlerts";
import {useEffect, useState} from "react";
import SearchBox from "../../searchBox";
import {DELETE_ALERTS_ALL_URL, GET_ALERTS_URL, SET_ALERTS_READ_URL} from "../../../iotConfig";
import {Link} from "react-router-dom";


const Alerts = () => {
    // const [showDetails, setShowDetails] = useState(undefined)
    const [alerts, setAlerts] = useState([]);


    // zaraz po zaladowaniu strony pobierz obiekty z backendu
    const getAlerts = async () => {
        const alertsFromServer = await fetchAlerts()
        console.log("alertsFromServer: ", alertsFromServer)
        return jsonToAlert(alertsFromServer)
    }

    const refreshData = () => {
        getAlerts()
            .then(alerts => setAlerts(alerts))
    }

    useEffect(() => {
        refreshData()
    }, [])

    const fetchAlerts = async () => {
        console.log("Sending request to fetch Alerts")
        const res = await fetch(
            GET_ALERTS_URL,
            {method: "POST"}
        )
        return await res.json()
    }

    const jsonToAlert = (list) => {
        const list2 = list.map(a =>
            new Alert(a.id, a.read, a.datetime, a.type, a.name, a.targetId, a.msg))
        console.log("[ from backend ] all objects of type Alert: ", list2)
        return list2
    }

    // const text2 = "Czy na pewno chcesz oznaczyć wszystkie alerty jako 'przeczytane'?"


    const handleDeleteAll = async() => {
        console.log("[ Delete ] wszystkie alerty")
        const res = await fetch(
            DELETE_ALERTS_ALL_URL,
            {method: "POST"}
        )
        if (res.status === 200){
            console.log("Usunieto wszystkie alerty.")
            setAlerts([])
        }
        else {
            console.log("Cos poszlo nie tak, status: ", res.status)
        }
    }

    const warningDeleteAll = () => {
        const text = "Czy na pewno chcesz trwale usunąć wszystkie alerty?"
        const confirm = window.confirm(text)
        if (confirm === true)
            handleDeleteAll()
    }

    const handleReadAll = async () => {
        console.log("[ Mark ] wszyskie alerty jako przeczytane")
        const res = await fetch(
            SET_ALERTS_READ_URL,
            {method: "POST"}
        )
        if (res.status === 200){
            console.log("Oznaczono wszystkie alerty.")
            refreshData()
        }
        else {
            console.log("Cos poszlo nie tak, status: ", res.status)
        }
    }

    const warningReadAll = () => {
        const text = "Czy na pewno chcesz oznaczyć wszystkie alerty jako 'przeczytane'?"
        const confirm = window.confirm(text)
        if (confirm === true)
            handleReadAll()
    }


    return (
        <div className="main">
            <div className="buttons-container">
                <Link to={"/alerts/new"}>
                    <div className="btn btn-color">
                        <i className="fas fa-plus mrg-r5"/>
                        alert
                    </div>
                </Link>
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        Twoje alerty
                    </div>
                    <div className="white-space top-contact">
                        {/*<div className="position-cent">*/}
                        {/*    <SearchBox/>*/}
                        {/*</div>*/}

                        <div className="object-container">
                            <div
                                className="btn btn-color"
                                onClick={() => warningReadAll()}
                            >
                                przeczytano wszystkie
                            </div>
                            <div
                                className="btn btn-color"
                                onClick={() => warningDeleteAll()}
                            >
                                usuń wszystkie
                            </div>
                        </div>

                        {alerts.length === 0
                            ? <div>Brak nowych alertów.</div>
                            : <ListAlerts
                                list={alerts}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alerts;