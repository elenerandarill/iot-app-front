import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {getSgroups} from "../../../FakeFrontend/backendConnector";
// import getSGroups from "../../../FakeBackend/getSGroups";
import EditAssigned from "../../editAssigned";
import {BackendConnector} from "../../../FakeFrontend/backendConnector";
import {SET_SENSOR_ASSIGNED_URL} from "../../../iotConfig";
import {fetchSensor} from "../../../FakeFrontend/backendConnector";

const EditSensorGroups = () => {
    const [sGroups, setSgroups] = useState(undefined)
    const [sensor, setSensor] = useState(undefined)
    const history = useHistory()
    const {id} = useParams();

    useEffect(() => {
        getSgroups()
            .then(sGroups => setSgroups(sGroups))

        fetchSensor(id)
            .then((sensor) => setSensor(sensor))
    }, [id])

    const sendRequest = async (assigned) => {
        const backConn = new BackendConnector()
        const response = await backConn.sendAssigned(
            SET_SENSOR_ASSIGNED_URL,
            sensor,
            assigned
        )
        if (response.status === 200){
            history.push(`/sensors/${id}`)
        }
        else {
            console.log("Czujniki - Nie udało się zmienić assigned, status: ", response.status)
        }
    }

    // upewniam sie, ze oba sa pobrane!
    if (sensor && sGroups) {
        return (
            <EditAssigned
                headline={"grup czujnika"}
                description={"Zaznacz grupy, w których ma być czujnik"}
                linkTo={"sensors"}
                object={sensor}
                availableChoices={sGroups}
                handleSend={sendRequest}
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