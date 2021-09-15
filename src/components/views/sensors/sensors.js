import getSensors from "../../../FakeBackend/getSensors";
import ButtonFunc from "../../buttonFunc";
import ListObjects from "../../listObjects";
import {Link} from "react-router-dom";
import {Sensor} from "../../../FakeBackend/getSensors";
import { useEffect, useState } from "react";
import {GET_SENSORS_URL} from "../../../iotConfig";

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


    const getSensors = async () => {
        const sensorsFromServer = await fetchSensors()
        console.log("sensorsFromServer: ", sensorsFromServer)
        return jsonToSensor(sensorsFromServer)
    }

    // zaraz po zaladowaniu strony pobierz obiekty z backendu
    useEffect(() => {
        getSensors()
            .then(sensors => setSensors(sensors))
    }, [])

    const fetchSensors = async () => {
        console.log("Sending request to fetch Sensors")
        const res = await fetch(
            GET_SENSORS_URL,
            {method: "POST"}
        )
        return await res.json()
    }

    const jsonToSensor = (list) => {
        const list2 = list.map(s =>
        new Sensor(s.id, s.type, s.name, s.sn, s.battery, s.assigned,
            s.measurements, s.GPS, s.notes))
        console.log("[ from backend ] all objects of type Sensor: ", list2)
        return list2
    }

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