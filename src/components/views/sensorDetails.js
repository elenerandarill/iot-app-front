import ButtonFunc from "../buttonFunc";
import ListMeasurements from "../listMeasurements.js";
import ListAssignedObjects from "../listAssignedObjects";
import {InputAttribute, DisplayAttribute} from "../attributes";
import ChartTypeArea from "../chartTypeArea";
import getSensors from "../../FakeBackend/getSensors";
import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";
import ChartTypeBar from "../chartTypeBar";
import ButtonSendOne from "../buttonSendOne";
import ChartDataChoices from "../chartDataChoices";

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
                            // onFocusShow={() => showControls()}
                        />

                        <InputAttribute
                            label="notatka"
                            name="sensorNotes"
                            placeholder={sensor.notes === "" ? "Tu wpisz notatkę." : sensor.notes}
                            // onChange={}
                        />

                        <DisplayAttribute name="numer seryjny" value={sensor.sn}/>
                        <DisplayAttribute name="bateria" value={sensor.battery + "%"}/>

                        <div className="shadow listed-attribute">
                            <div className="head-txt">GPS</div>
                            <div className="position-cent">
                                <div className="txt-water txt-semibold">
                                    {sensor.GPS[0] + ", " + sensor.GPS[1]}
                                </div>
                            </div>
                            <ButtonSendOne text="ustaw nowy" forField="gps"/>
                        </div>

                        <div className="shadow listed-attribute">
                            <div className="mrg-tb head-txt">OSTATNI POMIAR</div>
                            <div className="position-cent">
                                <ListMeasurements sensorObj={sensor}/>
                            </div>
                        </div>

                        {/* --- area chart --- */}
                        <div className="shadow listed-attribute">
                            <div className="mrg-tb head-txt">
                                wykres ostanich 5 pomiarów
                            </div>

                            {/*<ChartDataChoices source={sensor}/>*/}
                            <ButtonFunc
                                text={"edytuj"}
                                link={`/sensors/${sensor.id}/edit/chart`}
                            />

                            <ChartTypeArea height={250} object={sensor}/>
                        </div>

                        {/* --- bar chart --- */}
                        <div className="shadow listed-attribute">
                            <div className="mrg-tb head-txt">
                                wykres ostanich 5 pomiarów
                            </div>
                            <ChartTypeBar height={250} object={sensor}/>
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
                                            : <ListAssignedObjects
                                                assigned={sensor.assigned}
                                                list={getGroupsOfSensors}
                                                linkTo={"group"}
                                            />}
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