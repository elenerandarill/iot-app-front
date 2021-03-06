import ListObjects from "../../listObjects";
import {Link, useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchSensors} from "../../../FakeFrontend/backendSensorConnector";
import {ButtonLink} from "../../buttons";
import {ROUTE_SENSOR_DETAILS} from "../../../iotConfig";
import UserViews from "../userViews";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";

/**
 * @param sensor {Sensor}
 * @returns {JSX.Element}
 */
export const sensorObjectRenderer = (sensor) => {
    return (
        <Link
            key={sensor.id}
            to={ROUTE_SENSOR_DETAILS(sensor.id)}
        >
            <div className={"object shadow" + (sensor.is_new ? " mark-as-new" : "")}>
                <div>
                    <div className="txt-semibold">{sensor.getDisplayName()}</div>
                    <div className="obj-sn">{sensor.sn}</div>
                </div>
            </div>
        </Link>
    )
}

const Sensors = () => {
    const [sensors, setSensors] = useState([]);
    const history = useHistory()

    useEffect(() => {
        fetchSensors()
            .then(setSensors)
            .catch(error => handleUnauthorizedException(error, history))
    }, [])


    return (
        <UserViews>
            <div className="main">
                <div className="buttons-container">
                    <ButtonLink
                        text="zakup czujniki"
                        add={true}
                        link={"#"}
                    />
                </div>

                <div className="content-3x">
                    <div className="content-srodek">
                        <div className="headline-color">Twoje czujniki</div>
                        <div className="white-space top-contact">
                            <ListObjects
                                list={sensors}
                                objectRenderer={sensorObjectRenderer}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </UserViews>
    )
}

export default Sensors;