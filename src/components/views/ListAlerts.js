// import AlertDetailView from "./AlertDetailView";

const ListAlerts = ({ list, onClick, showDetails }) => {

    return(
        list.map((a) =>
            <div
                key={a.id}
                className={"shadow object alerts " + (showDetails && showDetails.id === a.id ? "obj-active" : "")}
                onClick={() => onClick(a)}
            >
                <div>{a.time} / {a.date}</div>
                <div className="txt-semibold mrg-l">
                    {a.datatype === "sensor"? "czujnik:" : "grupa:"}&nbsp;{a.name}
                </div>
            </div>
    ))
}

export default ListAlerts;