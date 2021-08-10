import AlertDetailView from "./AlertDetailView";

const ListAlerts = ({ list, onSelect, showDetails }) => {

    return(
        list.map((a) =>
            <div>
                <div
                    key={a.id}
                    className={"shadow object alerts " + (showDetails && showDetails.id === a.id ? "obj-active" : "")}
                    onClick={() => onSelect(a)}
                >
                    {a.new === "yes" && <div className="mrg-r"><b>N</b></div>}

                    <div className="alert-txt">{a.date} / {a.time}</div>
                    <div className="txt-semibold alert-txt">
                        {a.datatype === "sensor" ? "czujnik:" : "grupa:"}&nbsp;{a.name}
                    </div>

                </div>
                {(showDetails && showDetails.id === a.id)
                && <AlertDetailView a={showDetails} onCloseClick={() => onSelect(undefined)}/>}
            </div>
        ))
}

export default ListAlerts;