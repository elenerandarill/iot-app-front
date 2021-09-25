import AlertDetailView from "./alertDetailView";
import {useState} from "react";
import {markImportanceAlert, markReadAlert} from "../../../FakeFrontend/backendAlertConnector";

const ListAlerts = ({ alerts, onAlertRead, onDelete, onAlertImportance }) => {
    const [activeAlert, setActiveAlert] = useState(undefined)

    const readAndCloseAlert = (a) => {
        if (a.read === false){
            markReadAlert(a.id)
                .then(() => {
                    onAlertRead(a.id)
                })
        }
        setActiveAlert(undefined)
    }

    const switchImportant = async (alert) => {
        console.log("alert.important = ", alert.important)
        const res = await markImportanceAlert(alert.id, !alert.important)
        // alert.important = (alert.important === false)
        if (res.status === 200){
            console.log("[ Notification ] important zmieniono.")
            onAlertImportance(alert.id)
        }
        else{
            console.log("[ Notification ] Blad.")
        }
        console.log("alert.important = ", alert.important)
    }

    return(
        alerts.map((a) =>
            <div key={a.id}>
                <div
                    className={"shadow object alerts"
                    + (activeAlert && activeAlert.id === a.id ? " obj-active" : "")
                    + (a.read === false ? " mark-as-new" : "")}
                    onClick={() => setActiveAlert(a)}
                >
                    {a.important && <i className="fas fa-exclamation-circle"/>}
                    <div className="alert-txt">{a.datetime}</div>
                    <div className="txt-semibold alert-txt txt-violet">
                            {a.type === "sensor" ? "czujnik:" : "grupa:"}&nbsp;{a.name}
                    </div>
                </div>

                {(activeAlert && activeAlert.id === a.id)
                && <AlertDetailView
                    alert={activeAlert}
                    onCloseClick={() => readAndCloseAlert(a)}
                    onDelete={() => onDelete(a.id)}
                    handleImportant={switchImportant}
                />
                }
            </div>
        ))
}

export default ListAlerts;