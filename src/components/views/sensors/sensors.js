// import getSensors from "../../../FakeBackend/getSensors";
import {ButtonLink} from "../../buttons";
import ListObjects from "../../listObjects";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import {fetchSensors} from "../../../FakeFrontend/backendSensorConnector";

/**
 * @param sensor {Sensor}
 * @returns {JSX.Element}
 */
export const sensorObjectRenderer = (sensor) => {
    return (
        <Link
            key={sensor.id}
            to={`/sensors/${sensor.id}`}
        >
            <div className={"object shadow" + (sensor.assigned.length === 0 ? " mark-as-new" : "")}>
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

    // zaraz po zaladowaniu strony pobierz obiekty z backendu
    useEffect(() => {
        fetchSensors()
            .then(sensors => setSensors(sensors))
    }, [])


    return (
        <div className="main">
            <div className="buttons-container">
                <Link to={"#"}>
                    <div className="btn btn-color">
                        <i className="fas fa-plus mrg-r5"/>
                        zakup czujniki
                    </div>
                </Link>
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
    )}

export default Sensors;