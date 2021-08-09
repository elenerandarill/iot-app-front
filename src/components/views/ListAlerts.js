// import AlertDetailView from "./AlertDetailView";

const ListAlerts = ({ list, onClick }) => {

    return(
        list.map((a) =>
            <div
                key={a.id}
                className="object obj-free alerts"
                onClick={() => onClick(a)}
                // onClick={onClick}
            >
                <div>
                    {a.time}, {a.date} |
                    {a.datatype === "sensor"? "czujnik:" : "grupa:"}&nbsp;{a.name}
                </div>
            </div>
    ))
}

export default ListAlerts;