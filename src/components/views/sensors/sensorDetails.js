import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {DisplayAttribute, InputString, InputTextarea} from "../../attributes";
import ListMeasurements from "../../listMeasurements.js";
import ListObjects from "../../listObjects";
import ChartTypeArea from "../../chartTypeArea";
import ChartTypeBar from "../../chartTypeBar";
// import ChartDataChoices from "../../chartDataChoices";
import {groupObjectRenderer} from "../sGroups/sGroups";
import {
    ROUTE_SENSOR_EDIT,
    ROUTE_SENSOR_EDIT_CHART,
    ROUTE_SENSOR_LIST,
    URL_SENSOR_SET,
} from "../../../iotConfig";
import {getSensorAssignedSgroups} from "../../../FakeFrontend/backendSensorConnector";
import {changeValue} from "../../../FakeFrontend/backendConnector";
import {fetchSensor, updateSensorGps} from "../../../FakeFrontend/backendSensorConnector";
import {GpsCoordinate} from "../../../FakeBackend/gpsCoordinate";
import {ButtonFunc, ButtonLink} from "../../buttons";
import CustomMap from "../../map/customMap";
import UserViews from "../userViews";
import {fetchMeasurements} from "../../../FakeFrontend/backendMesurementConnector";
import {MapMarker} from "../../map/MapMarker";

const SensorDetails = () => {
    const [sensor, setSensor] = useState(
        /** @type {Sensor} */ undefined)
    const [battery, setBattery] = useState(
        /** @type {Measurement} */ [])
    const [latestMeasurements, setLatestMeasurements] = useState(
        /** @type {Measurement} */ [])
    const [chartMeasurements, setChartMeasurements] = useState(
        /** @type {Measurement} */ [])
    const [assignedObjs, setAssignedObjs] = useState(
        /** @type {GroupOfSensors[]} */ [])
    const [forceRender, setForceRender] = useState(
        /** @type {number[]} */ 0)
    const {id} = useParams();

    useEffect(() => {
        fetchSensor(id)
            .then((sensor) => setSensor(sensor))

        // get battery charge lvl
        fetchMeasurements(id, ["BATT"], 1) //TODO wartosci nie na sztywno!!!!
            .then((ms) => {
                if (ms.length === 0) return "brak danych"
                setBattery(ms[0].SDADATA)
            })

        // get latest measurements
        fetchMeasurements(id, undefined, 4) //TODO wartosci nie na sztywno!!!!
            .then((ms) => {setLatestMeasurements(ms)})

        // // get last 5 mrm for TEMP and HUMID, for chart!
        fetchMeasurements(id, ["TEMP", "RHUM"], 10) //TODO wartosci nie na sztywno!!!!
            .then((ms) => setChartMeasurements(ms))

        getSensorAssignedSgroups(id)
            .then(listObjs => setAssignedObjs(listObjs))
    }, [id])


    if (!sensor) {
        return (
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

    const getGpsMarkers = (sensor) => {
        return [new MapMarker(sensor.id, sensor.getDisplayName(), sensor.GPS)]
    }

    return (
        <UserViews>
            <div className="main">
                <div className="buttons-container">
                    <ButtonLink
                        text="powrót do listy"
                        link={ROUTE_SENSOR_LIST}
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
                                placeholder={sensor.name === "" ? "podaj nazwę" : sensor.name}
                                sendChange={(newValue) => changeValue(
                                    URL_SENSOR_SET, "SENID", sensor.id, "SENAME", newValue)}
                            />

                            <InputTextarea
                                label="notatka"
                                placeholder={sensor.notes === "" ? "Tu wpisz notatkę." : sensor.notes}
                                sendChange={(newValue) =>
                                    changeValue(URL_SENSOR_SET, "SENID", sensor.id, "SEDES", newValue)}
                            />

                            <DisplayAttribute name="numer seryjny" value={sensor.sn}/>
                            <DisplayAttribute name="bateria" value={battery + "%"}/>

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
                                    <ListMeasurements measurements={latestMeasurements}/>
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
                                    <CustomMap
                                        center={sensor.GPS}
                                        zoom={13}
                                        markers={getGpsMarkers(sensor)}/>
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
                                    link={ROUTE_SENSOR_EDIT_CHART(id)}
                                />

                                <ChartTypeArea height={250} msData={chartMeasurements}/>
                            </div>

                            {/* --- bar chart --- */}
                            <div className="shadow listed-attribute">
                                <div className="mrg-tb head-txt">
                                    wykres ostanich 5 pomiarów
                                </div>
                                <ChartTypeBar height={250} msData={chartMeasurements}/>
                            </div>

                            {/* --- edit assigned --- */}
                            <div className="shadow listed-attribute">
                                <div className="mrg-tb head-txt">PRZYPISANY DO GRUP</div>
                                <div className="position-cent">
                                    <div className="object-container-grid">
                                        <div className="edit-objs-btn centered">
                                            <ButtonLink
                                                text="edytuj"
                                                link={ROUTE_SENSOR_EDIT(id)}
                                            />
                                        </div>

                                        <div className="object-container txt-violet txt-semibold">
                                            {assignedObjs.length === 0
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
        </UserViews>
    )
}

export default SensorDetails;