import {Link} from "react-router-dom";
import ButtonFunc from "../buttonFunc";
import ListMeasurements from "../listMeasurements.js";
import ListAssignedObjects from "../listAssignedObjects";
import {InputAttribute, DisplayAttribute} from "../attributes";
import ChartTypeArea from "../chartTypeArea";
import getSensors from "../../FakeBackend/getSensors";
import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";

const SensorDetails = (props) => {

    const id = props.match.params.id;

    const sensor = getSensors.filter(s => s.id === id)[0];

    // const showControls = () => {
    //     console.log("showControls");
    //     return <button>x</button>
    // }

    const getChartData = (obj) => {
        let results = []
        for (const item of obj.measurements) {
            console.log("mamy dany obiekt: ", item);
            const name = item.datetime.slice(11, 16);
            results.push({
                name: name,
                temperature: item.data.temperature,
                humidity: item.data.humidity
            });
            console.log("results: ", results);
        }
        return results
    }

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
                        <DisplayAttribute name="GPS" value={sensor.GPS[0] + ", " + sensor.GPS[1]}/>

                        <div className="shadow listed-attribute">
                            <div className="mrg-tb head-txt">OSTATNI POMIAR</div>
                            <div className="position-cent">
                                <ListMeasurements sensorObj={sensor}/>
                            </div>
                        </div>

                        <div className="shadow listed-attribute">
                            <div className="mrg-tb head-txt">
                                temperatura - wykres ostanich 5 pomiarów
                            </div>

                                <ChartTypeArea width={730} height={250} data={getChartData(sensor)}/>

                            <div className="position-cent">
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
                                            : <ListAssignedObjects assigned={sensor.assigned} list={getGroupsOfSensors}
                                                                   linkTo={"group"}/>}
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