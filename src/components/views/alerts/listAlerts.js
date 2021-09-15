import AlertDetailView from "./alertDetailView";
import {useState} from "react";

const ListAlerts = ({ list }) => {
    const [activeAlert, setActiveAlert] = useState(undefined)

    const setActiveAndRead = (alert) => {
        console.log("weszlo w setActiveAndRead z obiektem: ", alert)
        if (alert.read === false){
            console.log("Przeczytano jeden!")
            alert.read = true
        }
        setActiveAlert(alert)
        console.log("nowy activeAlert = ", activeAlert)

    }

    // TODO - zebrac wszystkie odczytania i przeslac je zbiorczo na serwer jak klient opusci strone??????

    return(
        list.map((a) =>
            <div key={a.id}>
                <div
                    className={"shadow object alerts"
                    + (activeAlert && activeAlert.id === a.id ? " obj-active" : "")
                    + (a.read === false ? " mark-as-new" : "")}
                    onClick={() =>
                        setActiveAndRead(a)
                    }
                >
                    <div className="alert-txt">{a.datetime}</div>
                    <div className="txt-semibold alert-txt txt-violet">
                            {a.type === "sensor" ? "czujnik:" : "grupa:"}&nbsp;{a.name}
                    </div>
                </div>

                {(activeAlert && activeAlert.id === a.id)
                && <AlertDetailView
                    alert={activeAlert}
                    onCloseClick={() => setActiveAlert(undefined)}
                />
                }
            </div>
        ))
}

export default ListAlerts;