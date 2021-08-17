import {Link} from "react-router-dom";
import ButtonFunc from "../buttonFunc";
import ListMeasurements from "../listMeasurements.js";
import ListAssignedObjects from "../listAssignedObjects";
import getSensors from "../../FakeBackend/getSensors";
import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";

const SensorDetails = (props) => {

    const id = props.match.params.id;

    const sensor = getSensors.filter(s => s.id === id)[0];

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
                        {sensor.name.trim() === "" ? sensor.sn : sensor.name}
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
                                <div className="txt-water txt-semibold">{sensor.GPS[0]}, {sensor.GPS[1]}</div>
                            </div>
                        </div>

                        <div className="shadow no-contact centered pad-bot-15px">
                            <div className="mrg-tb head-txt">OSTATNI POMIAR</div>
                            <div className="position-cent">

                                <ListMeasurements sensorObj={sensor}/>

                            </div>
                        </div>

                        <div className="shadow no-contact centered pad-bot-15px">
                            <div className="mrg-tb head-txt">PRZYPISANY DO GRUP</div>
                            <div className="position-cent">
                                <div className="object-container-grid">
                                    <div className="edit-objs-btn centered">
                                        <ButtonFunc
                                            text={"edytuj"}
                                            link={`/sensors/${sensor.id}/edit`}
                                        />
                                    </div>

                                    <div className="object-container txt-violet txt-semibold">
                                        {sensor.assigned.length === 0
                                            ? <div className="centered">nie przypisano do żadnej grupy</div>
                                            : <ListAssignedObjects assigned={sensor.assigned} list={getGroupsOfSensors} linkTo={"group"}/>}
                                    </div>
                                </div>
                            </div>

                            {/*<div className="btn btn-small txt-center mrg-tb">dodaj grupę</div>*/}
                            {/*<div className="btn btn-small txt-center mrg-tb">wyczyść grupy</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SensorDetails;