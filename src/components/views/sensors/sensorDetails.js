import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {DisplayAttribute, InputString, InputTextarea} from "../../attributes";
import ListMeasurements from "../../listMeasurements.js";
import ListObjects from "../../listObjects";
import ChartTypeArea from "../../chartTypeArea";
import ChartTypeBar from "../../chartTypeBar";
// import ChartDataChoices from "../../chartDataChoices";
import {groupObjectRenderer} from "../sGroups/sGroups";
import {SET_SENSOR_NAME_URL, SET_SENSOR_NOTES_URL} from "../../../iotConfig";
import {getSensorAssignedSgroups} from "../../../FakeFrontend/backendSensorConnector";
import {changeValue} from "../../../FakeFrontend/backendConnector";
import {fetchSensor, updateSensorGps} from "../../../FakeFrontend/backendSensorConnector";
import {GpsCoordinate} from "../../../FakeBackend/gpsCoordinate";
import {ButtonFunc, ButtonLink} from "../../buttons";
import CustomMap from "../../map/customMap";

const SensorDetails = () => {
    const [sensor, setSensor] = useState(
        /** @type {Sensor} */ undefined)
    const [assignedObjs, setAssignedObjs] = useState(
        /** @type {GroupOfSensors[]} */ [])
    const [forceRender, setForceRender] = useState(
        /** @type {number[]} */ 0)
    const {id} = useParams();

    useEffect(() => {
        fetchSensor(id)
            .then((sensor) => setSensor(sensor))

        getSensorAssignedSgroups(id)
            .then(listObjs => setAssignedObjs(listObjs))
        }, [id])


    if (!sensor) {
        return(
            <div className="main">
                <div className="stats-title">nie znaleziono takiego czujnika</div>
            </div>
        )
    }

    // Geolocation
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.")
        }
    }
    const showPosition = (position) => {
        const newLocation = new GpsCoordinate(position.coords.latitude, position.coords.longitude)
        updateSensorGps(newLocation, id)
            .then((newLocation) => {
                sensor.GPS = newLocation
                setForceRender(forceRender + 1)
            })

    }

    return (
        <div className="main">
            <div className="buttons-container">
                <ButtonLink
                    text="powrót do listy"
                    link={"/sensors"}
                />
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        {sensor.name.trim() === "" ? sensor.sn : sensor.name}
                    </div>
                    <div className="white-space top-contact">
                        <DisplayAttribute name="typ urządzenia" value={sensor.type}/>
                        <InputString
                            label="nazwa"
                            name="name"
                            placeholder={sensor.name === "" ? "podaj nazwę" : sensor.name}
                            object={sensor}
                            url={SET_SENSOR_NAME_URL}
                            sendChange={changeValue}
                        />

                        <InputTextarea
                            label="notatka"
                            name="notes"
                            placeholder={sensor.notes === "" ? "Tu wpisz notatkę." : sensor.notes}
                            object={sensor}
                            url={SET_SENSOR_NOTES_URL}
                            sendChange={changeValue}
                        />

                        <DisplayAttribute name="numer seryjny" value={sensor.sn}/>
                        <DisplayAttribute name="bateria" value={sensor.battery + "%"}/>

                        <div className="shadow listed-attribute">
                            <div className="head-txt">GPS</div>
                            <div className="position-cent">
                                <div className="txt-water txt-semibold">
                                    {sensor.GPS.latitude}, {sensor.GPS.longitude}
                                </div>
                            </div>
                            <ButtonFunc
                            text="aktualizuj"
                            onClick={() => getLocation()}
                            />
                        </div>

                        <div className="shadow listed-attribute">
                            <div className="mrg-tb head-txt">OSTATNI POMIAR</div>
                            <div className="position-cent">
                                <ListMeasurements sensorObj={sensor}/>
                            </div>
                        </div>

                        <div className="shadow listed-attribute">
                            <div className="mrg-tb head-txt">
                                dodaj element dla tego czujnika
                            </div>
                            <div className="position-cent">
                                <ButtonLink
                                    text="wykres"
                                    add={true}
                                />
                                <ButtonLink
                                    text="tabela"
                                    add={true}
                                />
                                <ButtonLink
                                    text="mapa"
                                    add={true}
                                />
                            </div>
                        </div>

                        {/* --- map --- */}

                        <div className="shadow listed-attribute">

                            <div className="head-txt">
                                położenie geograficzne
                            </div>
                            <div className="position-cent">
                                <CustomMap/>
                            </div>
                        </div>

                        {/* --- area chart --- */}
                        <div className="shadow listed-attribute">
                            <div className="container-alert-icons">
                                <i
                                    className="fas fa-trash-alt mrg-r txt-blue"
                                    // onClick={onDelete}
                                />
                                <div className="mrg-tb head-txt">
                                    wykres ostanich 5 pomiarów
                                </div>
                                <i className="fas fa-cog mrg-l txt-blue"/>
                            </div>

                            {/*<ChartDataChoices source={sensor}/>*/}

                            <ButtonLink
                            text="edytuj"
                            link={`/sensors/${id}/edit/chart`}
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

                        {/* --- edit assigned --- */}
                        <div className="shadow listed-attribute">
                            <div className="mrg-tb head-txt">PRZYPISANY DO GRUP</div>
                            <div className="position-cent">
                                <div className="object-container-grid">
                                    <div className="edit-objs-btn centered">
                                        <ButtonLink
                                        text="edytuj"
                                        link={`/sensors/${id}/edit`}
                                        />
                                    </div>

                                    <div className="object-container txt-violet txt-semibold">
                                        {sensor.assigned.length === 0
                                            ? <div className="centered">nie przypisano do żadnej grupy</div>
                                            : <ListObjects
                                                list={assignedObjs}
                                                objectRenderer={groupObjectRenderer}
                                            />
                                        }
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