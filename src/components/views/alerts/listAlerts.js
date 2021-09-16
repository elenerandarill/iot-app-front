import AlertDetailView from "./alertDetailView";
import {useState} from "react";
import {readAlert, handleDeleteAlert} from "../../../FakeFrontend/backendConnector";


const ListAlerts = ({ alerts, onAlertRead, onDelete }) => {
    const [activeAlert, setActiveAlert] = useState(undefined)

    const readAndCloseAlert = (a) => {
        if (a.read === false){
            readAlert(a.id)
                .then(() => {
                    onAlertRead(a.id)
                })
        }
        setActiveAlert(undefined)
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
                />
                }
            </div>
        ))
}

export default ListAlerts;