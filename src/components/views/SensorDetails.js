import {Link} from "react-router-dom";
import sensors from "../../FakeBackend/sensors";

const SensorDetails = (props) => {
    const id = props.match.params.id;

    const getSensor = (id) => {
        // zwraca liste!
        return sensors.filter(s => s.id === id)[0]
    }

    const sensor = getSensor(id);

    return (
        <div className="main">
            <div className="main-func-buttons">
                <Link to="/sensors">
                    <button className="btn btn-purple btn-func insert-button">
                        powrót do listy
                    </button>
                </Link>
            </div>

            <div className="content-alerts">
                <div className="content-srodek">
                    <div className="btn-purple btn-section">
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
                            <div>NUMER SERYJNY</div>
                            <div className="position-cent">
                                <div className="txt-violet txt-semibold">{sensor.sn}</div>
                            </div>
                        </div>

                        <div className="shadow object">
                            <div>BATERIA</div>
                            <div className="position-cent">
                                <div className="txt-violet txt-semibold">{sensor.battery}</div>
                            </div>
                        </div>

                        <div className="shadow object">
                            <div>GPS</div>
                            <div className="position-cent">
                                <div className="txt-violet txt-semibold">{sensor.GPS}</div>
                            </div>
                        </div>

                        <div className="shadow object">
                            <div>PRZYPISANY DO GRUP</div>
                            <div className="position-cent">
                                <div className="txt-violet txt-semibold">
                                    {sensor.groups.map(sg => <div key={sg.valueOf()}>{sg}</div>)}
                                </div>
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SensorDetails;