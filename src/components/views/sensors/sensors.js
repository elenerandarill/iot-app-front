import getSensors from "../../../FakeBackend/getSensors";
import ButtonFunc from "../../buttonFunc";
import ListObjects from "../../listObjects";
import {Link} from "react-router-dom";
import {Sensor} from "../../../FakeBackend/getSensors";

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

    return (
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc
                    text={"zakup czujniki"}
                    add={true}
                    link=""
                />
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">Twoje czujniki</div>
                    <div className="white-space top-contact">
                        <ListObjects list={getSensors} objectRenderer={sensorObjectRenderer}/>
                    </div>
                </div>
            </div>
        </div>
    )}

export default Sensors;