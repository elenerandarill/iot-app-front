import {Link} from "react-router-dom";
import sensorGroups from "../../FakeBackend/sensorGroups";
import ButtonFunc from "../ButtonFunc";

const GroupDetails = (props) => {
    const id = props.match.params.id;

    const getGroup = (id) => {
        // zwraca liste!
        return sensorGroups.filter(s => s.id === id)[0]
    }

    const group = getGroup(id);

    return(
        <div className="main">
            <div className="buttons-container">
                <Link to="/sensor-groups">
                    <ButtonFunc text={"powrót do listy"}/>
                </Link>
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        {group.name}
                    </div>
                    <div className="white-space top-contact">

                        <div className="shadow object">
                            <div>NAZWA</div>
                            <div className="position-cent">
                                <input
                                    type="text"
                                    name="name"
                                    className="input"
                                    placeholder={group.name}
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
                                    placeholder={group.notes === "" ? "Tu wpisz notatkę." : group.notes}
                                />
                            </div>
                        </div>

                        <div className="shadow no-contact centered pad-bot-15px">
                            <div className="mrg-tb">OSTATNI POMIAR</div>
                            <div className="position-cent">
                                <div className="txt-violet txt-semibold object-container">

                                    {Object.entries(group.measurements).map(([key, value]) =>
                                        <div key={key.toString()} className="mrg-tb mrg-lr">
                                            {key === "avTemp" && "śr. temperatura"}
                                            {key === "avHumid" && "śr. wilgotność"}
                                            {key === "avWind" && "śr. prędkość wiatru"}
                                            :<br/>
                                            <h2>{value}
                                                {key === "avTemp" && " °C"}
                                                {key === "avWind" && " km/h"}
                                            </h2>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>

                        <div className="shadow no-contact centered pad-bot-15px">
                            <div className="mrg-tb">CZUJNIKI ({group.sensors.length})</div>
                            <div className="position-cent">
                                <div className="object-container txt-violet txt-semibold">

                                    {group.sensors.length === 0
                                        ? <div className="centered">nie ma jeszcze żadnych czujników</div>
                                        : group.sensors.map(sensor =>
                                            <div key={sensor.toString()} className="shadow object">
                                                {sensor}
                                            </div>)
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="shadow no-contact fx-between paint-gray01">
                            <div className="btn btn-small txt-center mrg-tb">dodaj/usuń czujnik</div>
                            <div className="btn btn-small txt-center mrg-tb">wyczyść grupę</div>
                            <div className="btn btn-small txt-center mrg-tb">usuń grupę</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupDetails;