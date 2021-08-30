import { Link } from "react-router-dom";


const AlertDetailView = ({ a, onCloseClick }) => {
    console.log("Wywolano")

    return(
        <div>
            <div className="white-space no-contact top-contact-mrg">
                <div className="txt-right">
                    <i className="fas fa-times fa-lg txt-blue"  onClick={onCloseClick}/>
                </div>
                <div className="obj-details">
                    {/* !!! naprawic formatowanie daty i czasu!!!!!!!!!!!!!!!! */}
                    <div>{a.datetime}</div>
                    <div className="txt-semibold btn btn-small">
                        <Link to={`/${a.targetType === "sensor"? "sensors" : "sgroups"}/${a.targetId}`}>
                            {a.targetType === "sensor" && `czujnik: ${a.name}`}
                            {a.targetType === "group" && `grupa: ${a.name}`}
                        </Link>

                    </div>
                    <div className="mrg-tb mrg-lr txt-regular">
                        <i>"{a.msg}"</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlertDetailView;