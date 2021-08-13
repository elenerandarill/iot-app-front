import {Link} from "react-router-dom";
import sensors from "../../FakeBackend/sensors";
import remove from "../../media/remove.svg";
import ButtonFunc from "../ButtonFunc";

const SensorDetails = (props) => {
    const id = props.match.params.id;

    const getSensor = (id) => {
        // zwraca liste!
        return sensors.filter(s => s.id === id)[0]
    }

    const sensor = getSensor(id);

    return (
        <div className="main">
            <div className="buttons-container">
                <Link to="/sensors">
                    <ButtonFunc text={"powrót do listy"}/>
                </Link>
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        {sensor.name === "" ? sensor.sn : sensor.name}
                    </div>
                    <div className="white-space top-contact">

                        <div className="shadow object">
                            <div>NAZWA</div>
                            <div className="position-cent">
                                <input
                                    type="text"
                                    name="name"
                                    className="input"
                                    placeholder={sensor.name === "" ? "podaj nazwę" : sensor.name}
                                />
                            </div>
                        </div>
                        <div className="shadow object">
                            <div>NOTATKA</div>
                            <div className="position-cent">
                                <input
                                    type="text"
                                    name="notes"
                                    className="input"
                                    placeholder={sensor.notes === "" ? "Tu wpisz notatkę." : sensor.notes}
                                />
                            </div>
                        </div>

                        <div className="shadow object">
                            <div>NUMER SERYJNY</div>
                            <div className="position-cent">
                                <div className="txt-violet txt-semibold">{sensor.sn}</div>
                            </div>
                        </div>

                        <div className="shadow no-contact centered pad-bot-15px">
                            <div className="mrg-tb">BATERIA</div>
                            <div className="position-cent">
                                <div className="txt-violet txt-semibold">{sensor.battery}%</div>
                            </div>
                        </div>

                        <div className="shadow object">
                            <div>GPS</div>
                            <div className="position-cent">
                                <div className="txt-violet txt-semibold">{sensor.GPS}</div>
                            </div>
                        </div>

                        <div className="shadow no-contact centered pad-bot-15px">
                            <div className="mrg-tb">OSTATNI POMIAR</div>
                            <div className="position-cent">
                                <div className="txt-violet txt-semibold object-container">

                                    {Object.entries(sensor.measurements).map(([key, value]) =>
                                        <div className="mrg-tb mrg-lr">
                                            {key === "temperature" && "temperatura"}
                                            {key === "humidity" && "wilg. powietrza"}
                                            {key === "moisture" && "wild. podłoża"}
                                            {key === "pressure" && "ciśnienie"}
                                            {key === "illumination" && "oświetlenie"}
                                            {key === "CO2" && "CO2"}
                                            {key === "EC" && "EC (przew. elektrolitów)"}
                                            {key === "tVOC" && "tVOC (LZO)"}
                                            {key === "activity" && "aktywność"}
                                            {key === "distance" && "dystans"}
                                            {key === "water_level" && "poziom wody"}
                                            {key === "water_leak" && "wyciek"}
                                            {key === "door" && "drzwi"}
                                            :<br/>
                                            <h2>{value}
                                                {key === "temperature" && " °C"}
                                                {key === "humidity" && " %RH"}
                                                {key === "moisture" && " %RH"}
                                                {key === "pressure" && " kPa"}
                                                {key === "illumination" && " lux"}
                                                {key === "CO2" && " ppm"}
                                                {key === "EC" && " µs/cm"}
                                                {key === "tVOC" && " ppb"}
                                                {key === "distance" && " mm"}
                                                {key === "water_level" && " cm"}
                                            </h2>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>

                        <div className="shadow no-contact centered pad-bot-15px">
                            <div className="mrg-tb">PRZYPISANY DO GRUP</div>
                            <div className="position-cent">
                                <div className="object-container txt-violet txt-semibold">

                                    {sensor.groups.length === 0
                                        ? <div className="centered">nie przypisano do żadnej grupy</div>
                                        : sensor.groups.map(sg =>
                                            <div key={sg.valueOf()} className="assigned shadow">
                                                <div className="assigned-txt-half pointer">{sg}</div>
                                                <div className="assigned-rem-half">
                                                    <img src={remove} className="i-remove pointer"/>
                                                </div>
                                            </div>)}
                                </div>
                            </div>
                        </div>

                        <div className="shadow no-contact fx-between paint-gray01">
                            <div className="btn btn-small txt-center mrg-tb">dodaj grupę</div>
                            <div className="btn btn-small txt-center mrg-tb">wyczyść grupy</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SensorDetails;