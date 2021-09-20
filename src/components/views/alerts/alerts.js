import ListAlerts from "./listAlerts";
import {getAlerts, handleDeleteAlert, handleDeleteAlertsAll, handleReadAlertsAll} from "../../../FakeFrontend/backendAlertConnector"
import {useEffect, useState} from "react";
// import SearchBox from "../../searchBox";
import {ButtonFunc, ButtonLink} from "../../buttons";


const Alerts = () => {
    // const [showDetails, setShowDetails] = useState(undefined)
    const [alerts, setAlerts] = useState([]);

    // zaraz po zaladowaniu strony pobierz obiekty z backendu
    const refreshData = () => {
        getAlerts()
            .then(alerts => {
                setAlerts(alerts)
            })
    }

    useEffect(() => {
        refreshData()
    }, [])


    const handleOnAlertRead = (id) => {
        const list = [...alerts]
        for (const alert of list) {
            if (alert.id === id) {
                alert.read = true
            }
        }
        setAlerts(list)
    }

    const warningReadAll = () => {
        const text = "Czy na pewno chcesz oznaczyć wszystkie alerty jako 'przeczytane'?"
        const confirm = window.confirm(text)
        if (confirm === true)
            handleReadAlertsAll()
                .then(() =>
                    setAlerts(alerts.map(a => {
                        a.read = true
                        return a
                    }))
                )
    }

    const warningDeleteAll = () => {
        const text = "Czy na pewno chcesz trwale usunąć wszystkie alerty?"
        const confirm = window.confirm(text)
        if (confirm === true)
            handleDeleteAlertsAll()
                .then(() => setAlerts([]))
    }

    const warningDeleteAlert = (id) => {
        const text = "Czy na pewno chcesz trwale usunąć ten alert?"
        const confirm = window.confirm(text)
        if (confirm === true)
            handleDeleteAlert(id)
                .then(() => {
                    setAlerts(alerts.filter(a => a.id !== id))
                })
    }


    return (
        <div className="main">
            <div className="buttons-container">
                <ButtonLink
                text="alert"
                add={true}
                link={"/alerts/new"}
                />
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
                            <ButtonFunc
                            text="przeczytano wszystkie"
                            onClick={() => warningReadAll()}
                            />
                            <ButtonFunc
                                text="usuń wszystkie"
                                onClick={() => warningDeleteAll()}
                            />
                        </div>

                        {alerts.length === 0
                            ? <div>Brak nowych alertów.</div>
                            : <ListAlerts
                                alerts={alerts}
                                onAlertRead={handleOnAlertRead}
                                onDelete={warningDeleteAlert}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alerts;