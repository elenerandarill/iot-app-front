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

const EditSensorGroups = () => {
    const [sGroups, setSgroups] = useState(undefined)
    const [sgAssigned, setSgAssigned] = useState(undefined)
    const [sensor, setSensor] = useState(undefined)
    const history = useHistory()
    const {id} = useParams();

    useEffect(() => {
        fetchSgroups()
            .then(sGroups => setSgroups(sGroups))

        fetchSensor(id)
            .then((sensor) => setSensor(sensor))

        getSensorAssignedSgroups(id)
            .then((sgFound) => setSgAssigned(sgFound))
    }, [id])

    const sendChangeRequest = async (assigned) => {
        setSensorAssignedSgroups(id, assigned)
            .then(() => history.push(ROUTE_SENSOR_DETAILS(id)))
    }

    // upewniam sie, ze dane sa pobrane z serwera!
    if (sensor && sGroups && sgAssigned) {
        return (
            <EditAssigned
                headline={"grup czujnika"}
                description={"Zaznacz grupy, w których ma być czujnik"}
                linkTo={"sensor"}
                object={sensor}
                assigned={sgAssigned}
                availableChoices={sGroups}
                handleSend={sendChangeRequest}
            />
        )
    }else{
        return (
            <div className="head-txt">
                Pobieranie danych. Proszę czekać.
            </div>
        )
    }
}

export default EditSensorGroups;