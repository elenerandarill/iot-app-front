import {Link} from "react-router-dom";
import sensors from "../../FakeBackend/sensors";
import ListGroups from "../ListGroups";
// import remove from "../../media/remove.svg";
import ButtonFunc from "../ButtonFunc";

const SensorDetails = (props) => {

    const id = props.match.params.id;

    const sensor = sensors.filter(s => s.id === id)[0];

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
                            <div className="head-txt">NAZWA</div>
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
                            <div className="head-txt">NOTATKA</div>
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
                            <div className="head-txt">NUMER SERYJNY</div>
                            <div className="position-cent">
                                <div className="txt-water txt-semibold">{sensor.sn}</div>
                            </div>
                        </div>

                        <div className="shadow no-contact centered pad-bot-15px">
                            <div className="mrg-tb head-txt">BATERIA</div>
                            <div className="position-cent">
                                <div className="txt-water txt-semibold">{sensor.battery}%</div>
                            </div>
                        </div>

                        <div className="shadow object">
                            <div className="head-txt">GPS</div>
                            <div className="position-cent">
                                <div className="txt-water txt-semibold">{sensor.GPS}</div>
                            </div>
                        </div>

                        <div className="shadow no-contact centered pad-bot-15px">
                            <div className="mrg-tb head-txt">OSTATNI POMIAR</div>
                            <div className="position-cent">
                                <div className="txt-violet txt-semibold object-container">

                                    {Object.entries(sensor.measurements).map(([key, value]) =>
                                        <div key={key.toString()} className="mrg-tb mrg-lr">
                                            <div className="txt-water">
                                                {key === "temperature" && "temperatura | °C"}
                                                {key === "humidity" && "wilg. powietrza | %RH"}
                                                {key === "moisture" && "wild. podłoża | %RH"}
                                                {key === "pressure" && "ciśnienie | kPa"}
                                                {key === "illumination" && "oświetlenie | lux"}
                                                {key === "CO2" && <span>CO<sub>2</sub> |ppm</span>}
                                                {key === "EC" && "EC-przew. elektrolitów | µs/cm"}
                                                {key === "tVOC" && "tVOC (LZO) | ppb"}
                                                {key === "activity" && "aktywność"}
                                                {key === "distance" && "dystans | mm"}
                                                {key === "water_level" && "poziom wody | cm"}
                                                {key === "water_leak" && "wyciek"}
                                                {key === "door" && "drzwi"}

                                            </div>
                                            <h1>{value}</h1>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>

                        <div className="shadow no-contact centered pad-bot-15px">
                            <div className="mrg-tb head-txt">PRZYPISANY DO GRUP</div>
                            <div className="position-cent">
                                <div className="object-container txt-violet txt-semibold">

                                    {sensor.groups.length === 0
                                        ? <div className="centered">nie przypisano do żadnej grupy</div>
                                        : <ListGroups sensor={sensor}/>}
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