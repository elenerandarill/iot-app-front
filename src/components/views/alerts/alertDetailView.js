import { Link } from "react-router-dom";
import {ButtonFunc} from "../../buttons";
import {ROUTE_SENSOR_DETAILS, ROUTE_SGROUP_DETAILS} from "../../../iotConfig";


const AlertDetailView = ({ alert, handleImportant, onCloseClick, onDelete }) => {
    console.log("Wywolano z alertem: ", alert)

    return(
        <div>
            <div className="white-space no-contact top-contact-mrg">
                <div className="container-alert-icons">
                    <div className="txt-left">
                        <i
                            className="fas fa-trash-alt txt-blue"
                            onClick={onDelete}
                        />
                    </div>
                    {/* TODO !!! naprawic formatowanie daty i czasu!!!!!!!!!!!!!!!! */}
                    <div>{alert.datetime}</div>
                    <div className="txt-right">
                        {/*{alert.important === true && <i className="fas fa-star txt-blue"/>}*/}
                        <i
                            className="fas fa-check fa-lg txt-blue"
                            onClick={onCloseClick}
                        />
                    </div>
                </div>
                <div className="obj-details">

                    <div className="txt-semibold btn btn-small">
                        <Link to={alert.type === "sensor"
                            ? ROUTE_SENSOR_DETAILS(alert.targetId)
                            : ROUTE_SGROUP_DETAILS(alert.targetId)
                            }>
                            {alert.type === "sensor" && `czujnik: ${alert.name}`}
                            {alert.type === "sgroup" && `grupa: ${alert.name}`}
                        </Link>

                    </div>
                    <div className="mrg-tb mrg-lr txt-regular">
                        <i>"{alert.msg}"</i>
                    </div>

                    <ButtonFunc
                        text={alert.important ? "zwykły"
                            : <><i className="fas fa-exclamation mrg-r5"/>ważny</>}
                        onClick={(event) => handleImportant(alert)}
                    />
                </div>
            </div>
        </div>
    )
}

export default AlertDetailView;