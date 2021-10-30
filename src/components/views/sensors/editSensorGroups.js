import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {fetchSgroups} from "../../../FakeFrontend/backendSgroupConnector";
import EditAssigned from "../../editAssigned";
import {
    fetchSensor,
    getSensorAssignedSgroups,
    setSensorAssignedSgroups
} from "../../../FakeFrontend/backendSensorConnector";
import {ROUTE_SENSOR_DETAILS} from "../../../iotConfig";
import UserViews from "../userViews";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";

const EditSensorGroups = () => {
    const [sGroups, setSgroups] = useState(
        /** @type {GroupOfSensors[]} */ undefined)
    const [sgAssigned, setSgAssigned] = useState(
        /** @type {GroupOfSensors[]} */ undefined)
    const [sensor, setSensor] = useState(
        /** @type {Sensor} */ undefined)
    const history = useHistory()
    const {id} = useParams();

    useEffect(() => {
        fetchSgroups()
            .then(setSgroups)
            .catch(error => handleUnauthorizedException(error, history))

        fetchSensor(id)
            .then((sensor) => setSensor(sensor))
            .catch(error => handleUnauthorizedException(error, history))

        getSensorAssignedSgroups(id)
            .then((sgFound) => setSgAssigned(sgFound))
            .catch(error => handleUnauthorizedException(error, history))
    }, [id])

    const sendChangeRequest = async (assigned) => {
        setSensorAssignedSgroups(id, assigned)
            .then(() => history.push(ROUTE_SENSOR_DETAILS(id)))
            .catch(error => handleUnauthorizedException(error, history))
    }

    // upewniam sie, ze dane sa pobrane z serwera!
    if (sensor && sGroups && sgAssigned) {
        return (
            <UserViews>
                <EditAssigned
                    headline={"grup czujnika"}
                    description={"Zaznacz grupy, w których ma być czujnik"}
                    linkTo={"sensor"}
                    object={sensor}
                    assigned={sgAssigned}
                    availableChoices={sGroups}
                    handleSend={sendChangeRequest}
                />
            </UserViews>
        )
    } else {
        return (
            <UserViews>
                <div className="head-txt">
                    Pobieranie danych. Proszę czekać.
                </div>
            </UserViews>
        )
    }
}

export default EditSensorGroups;