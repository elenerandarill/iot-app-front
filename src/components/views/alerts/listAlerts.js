import { Link } from "react-router-dom";
import AlertDetailView from "./alertDetailView";

const ListAlerts = ({ list, onSelect, showDetails }) => {

    return(
        list.map((a) =>
            <div key={a.id}>
                <div
                    className={"shadow object alerts"
                    + (showDetails && showDetails.id === a.id ? " obj-active" : "")
                    + (a.read === true ? " mark-as-new" : "")}
                    onClick={() => onSelect(a)}
                >
                    <div className="alert-txt">{a.datetime}</div>
                    <div className="txt-semibold alert-txt txt-violet">
                            {a.targetType === "sensor" ? "czujnik:" : "grupa:"}&nbsp;{a.name}
                    </div>

                </div>
                {(showDetails && showDetails.id === a.id)
                && <AlertDetailView a={showDetails} onCloseClick={() => onSelect(undefined)}/>}
            </div>
        ))
}

export default ListAlerts;