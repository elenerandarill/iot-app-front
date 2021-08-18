import {Link} from "react-router-dom";
import ButtonFunc from "../buttonFunc";
import ListMeasurements from "../listMeasurements.js";
import ListAssignedObjects from "../listAssignedObjects";
import getSensors from "../../FakeBackend/getSensors";
import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";
import { InputAttribute, DisplayAttribute } from "../attributes";

const SensorDetails = (props) => {

    const id = props.match.params.id;

    const sensor = getSensors.filter(s => s.id === id)[0];

    return (
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc text={"powrót do listy"} link="/sensors"/>
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        {sensor.name.trim() === "" ? sensor.sn : sensor.name}
                    </div>
                    <div className="white-space top-contact">

                        <InputAttribute
                            label="nazwa"
                            name="sensorName"
                            placeholder={sensor.name === "" ? "podaj nazwę" : sensor.name}
                            // onChange={}
                        />

                        <InputAttribute
                            label="notatka"
                            name="sensorNotes"
                            placeholder={sensor.notes === "" ? "Tu wpisz notatkę." : sensor.notes}
                            // onChange={}
                        />

                        <DisplayAttribute name="numer seryjny" value={sensor.sn} />
                        <DisplayAttribute name="bateria" value={sensor.battery + "%"} />
                        <DisplayAttribute name="GPS" value={sensor.GPS[0] + ", " + sensor.GPS[1]} />

                        <div className="shadow listed-attribute">
                            <div className="mrg-tb head-txt">OSTATNI POMIAR</div>
                            <div className="position-cent">
                                <ListMeasurements sensorObj={sensor}/>
                            </div>
                        </div>

                        <div className="shadow listed-attribute">
                            <div className="mrg-tb head-txt">tutaj wyświetlę sobie wykresik ostanich pomiarów!</div>
                            <div className="position-cent">
                                tutaj wyświetlę sobie wykresik ostanich pomiarów!
                                tutaj wyświetlę sobie wykresik ostanich pomiarów!
                                tutaj wyświetlę sobie wykresik ostanich pomiarów!
                                tutaj wyświetlę sobie wykresik ostanich pomiarów!
                            </div>
                        </div>

                        <div className="shadow listed-attribute">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SensorDetails;