import dot from "../../media/dot.svg";
import AlertDetailView from "./alertDetailView";

const ListAlerts = ({ list, onSelect, showDetails }) => {

    return(
        list.map((a) =>
            <div key={a.id}>
                <div
                    className={"shadow object alerts " + (showDetails && showDetails.id === a.id ? "obj-active" : "")}
                    onClick={() => onSelect(a)}
                >
                    {a.new === true ?
                        <div className="mrg-r"><img src={dot} alt="new" height={10}/></div>
                        : <div className="mrg-r"> </div>}

                    <div className="alert-txt">{a.datetime} /</div>
                    <div className="txt-semibold alert-txt txt-violet">
                        {a.datatype === "sensor" ? "czujnik:" : "grupa:"}&nbsp;{a.name}
                    </div>

                </div>
                {(showDetails && showDetails.id === a.id)
                && <AlertDetailView a={showDetails} onCloseClick={() => onSelect(undefined)}/>}
            </div>
        ))
}

export default ListAlerts;