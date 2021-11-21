import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import ListObjects from "../../listObjects";
import {InputString, InputTextarea} from "../../attributes";
import {sensorObjectRenderer} from "../sensors/sensors";
import {ROUTE_SGROUP_DEL, ROUTE_SGROUP_EDIT, ROUTE_SGROUP_LIST, URL_SGROUP_SET} from "../../../iotConfig";
import {fetchSgroup, getSgroupAssignedSensors} from "../../../FakeFrontend/backendSgroupConnector";
import {changeValue, handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {ButtonLink} from "../../buttons";
import UserViews from "../userViews";
import CustomMap from "../../map/customMap";
import {GpsCoordinate} from "../../../FakeBackend/gpsCoordinate";
import {MapMarker} from "../../map/MapMarker";
import {GroupOfSensors} from "../../../FakeBackend/getSGroups";


const SGroupDetails = () => {
    const [sgroup, setSgroup] = useState(
        /** @type {GroupOfSensors} */ new GroupOfSensors(
            undefined, undefined, undefined, undefined
        ))
    const [assignedObjs, setAssignedObjs] = useState(
        /** @type {Sensor[]} */ undefined)
    const {id} = useParams();
    const history = useHistory()

    useEffect(() => {
        fetchSgroup(id)
            .then(setSgroup)
            .catch(error => handleUnauthorizedException(error, history))

        getSgroupAssignedSensors(id)
            .then(listObjs => setAssignedObjs(listObjs))
            .catch(error => handleUnauthorizedException(error, history))
    }, [id])


    /**
     * @param assignedObjs {Sensor[]}
     * @return {GpsCoordinate}
     */
    function getGeographicalCenter(assignedObjs) {
        if(assignedObjs.length === 0) {
            return new GpsCoordinate(52.237049, 21.017532)
        }

        let lat = 0
        for(const obj of assignedObjs) {
            lat += obj.GPS.latitude
        }
        lat /= assignedObjs.length

        let lon = 0
        for(const obj of assignedObjs) {
            lon += obj.GPS.longitude
        }
        lon /= assignedObjs.length

        return new GpsCoordinate(lat, lon)
    }

    /**
     * @param assignedObjs {Sensor[]}
     * @return {MapMarker[]}
     */
    function getGpsMarkers(assignedObjs) {
        return assignedObjs.map(s => {
            return new MapMarker(s.id, s.getDisplayName(), s.GPS)
        })
    }

    if(!sgroup.name || !assignedObjs) {
        return (
            <UserViews>
                <div className="main">
                    <div className="position-cent centered">
                        <div className="head-txt">
                            nie znaleziono takiej grupy
                        </div>
                    </div>
                </div>
            </UserViews>
        )
    }

    return (
        <UserViews>
            <div className="main">
                <div className="buttons-container">
                    <ButtonLink
                        link={ROUTE_SGROUP_LIST}
                        text="powrót do listy"
                    />
                    <ButtonLink
                        link={ROUTE_SGROUP_DEL(id)}
                        text="usuń"
                    />
                </div>

                <div className="content-3x">
                    <div className="content-srodek">

                        <div className="headline-color">
                            {sgroup.name}
                        </div>
                        <div className="white-space top-contact">
                            <InputString
                                label="nazwa"
                                placeholder={sgroup.name}
                                sendChange={(newValue) => changeValue(
                                    URL_SGROUP_SET, "SGRID", sgroup.id, "SGNAME", newValue)}
                            />

                            <InputTextarea
                                label="notatka"
                                placeholder={sgroup.notes === "" ? "Tu wpisz notatkę." : sgroup.notes}
                                sendChange={(newValue) =>
                                    changeValue(URL_SGROUP_SET, "SGRID", sgroup.id, "SGDESC", newValue)}
                            />


                            <div className="shadow listed-attribute">
                                <div className="head-txt">OSTATNI POMIAR</div>
                                <div className="position-cent">
                                    <div className="txt-violet txt-semibold object-container">
                                        TU BĘDĄ JAKIEŚ DANE

                                    </div>
                                </div>
                            </div>

                            {/* --- map --- */}
                            <div className="shadow listed-attribute">

                                <div className="head-txt">
                                    położenie geograficzne
                                </div>
                                <div className="position-cent">
                                    <CustomMap
                                        center={getGeographicalCenter(assignedObjs)}
                                        zoom={12}
                                        markers={getGpsMarkers(assignedObjs)}/>
                                </div>
                            </div>

                            {/* --- edit assigned --- */}
                            <div className="shadow no-contact centered pad-bot-15px">
                                <div className="head-txt ">CZUJNIKI</div>
                                <div className="position-cent">
                                    <div className="object-container-grid">

                                        <div className="edit-objs-btn centered">
                                            <ButtonLink
                                                text="edytuj"
                                                link={ROUTE_SGROUP_EDIT(id)}
                                            />
                                        </div>

                                        <div className="object-container txt-violet txt-semibold">
                                            {assignedObjs.length === 0
                                                ? <div className="centered">nie przypisano żadnych czujników</div>
                                                : <ListObjects
                                                    list={assignedObjs}
                                                    objectRenderer={sensorObjectRenderer}
                                                />}
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

export default SGroupDetails;