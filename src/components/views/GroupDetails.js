import {Link} from "react-router-dom";
import sensorGroups from "../../FakeBackend/sensorGroups";
import remove from "../../media/remove.svg";

const GroupDetails = (props) => {
    const id = props.match.params.id;

    const getGroup = (id) => {
        // zwraca liste!
        return sensorGroups.filter(s => s.id === id)[0]
    }

    const group = getGroup(id);

    return(
        <div className="main">
            <div className="main-func-buttons">
                <Link to="/sensor-groups">
                    <button className="btn btn-purple btn-func insert-button">
                        powrót do listy
                    </button>
                </Link>
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="btn-purple btn-section">
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
                            <div className="mrg-tb">CZUJNIKI ({group.sensors.length})</div>
                            <div className="position-cent">
                                <div className="object-container txt-violet txt-semibold">

                                    {group.sensors.length === 0
                                        ? <div className="centered">nie ma jeszcze żadnych czujników</div>
                                        : group.sensors.map(sensor =>
                                            <div key={sensor.toString()} className="assigned shadow">
                                                <div className="assigned-txt-half pointer">{sensor}</div>
                                                <div className="assigned-rem-half">
                                                    <img src={remove} className="i-remove pointer"/>
                                                </div>
                                            </div>)
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="shadow no-contact fx-between paint-gray01">
                            <div className="btn btn-small txt-center mrg-tb">dodaj czujnik</div>
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