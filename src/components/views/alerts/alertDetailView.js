import { Link } from "react-router-dom";


const AlertDetailView = ({ alert, onCloseClick }) => {
    console.log("Wywolano z alertem: ", alert)

    return(
        <div>
            <div className="white-space no-contact top-contact-mrg">
                <div className="txt-right">
                    <i
                        className="fas fa-times fa-lg txt-blue"
                        onClick={onCloseClick}
                    />
                </div>
                <div className="obj-details">
                    {/* TODO !!! naprawic formatowanie daty i czasu!!!!!!!!!!!!!!!! */}
                    <div>{alert.datetime}</div>
                    <div className="txt-semibold btn btn-small">
                        <Link to={`/${alert.type === "sensor"? "sensors" : "sgroups"}/${alert.targetId}`}>
                            {alert.type === "sensor" && `czujnik: ${alert.name}`}
                            {alert.type === "group" && `grupa: ${alert.name}`}
                        </Link>

                    </div>
                    <div className="mrg-tb mrg-lr txt-regular">
                        <i>"{alert.msg}"</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlertDetailView;