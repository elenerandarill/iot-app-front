import {useHistory, useParams} from "react-router-dom";
import getSensors from "../../../FakeBackend/getSensors";
import getSGroups from "../../../FakeBackend/getSGroups";
import EditAssigned from "../../editAssigned";
import {BackendConnector} from "../../../FakeFrontend/backendConnector";
import {SET_SENSOR_ASSIGNED_URL} from "../../../iotConfig";

const EditSensorGroups = () => {
    const history = useHistory()

    const {id} = useParams();
    const sensor = getSensors.filter(s => s.id === id)[0];

    const sendRequest = async (assigned) => {
        const backConn = new BackendConnector()
        const response = await backConn.sendAssigned(
            SET_SENSOR_ASSIGNED_URL,
            sensor,
            assigned
        )
        if (response.status === 200){
            history.push(`/team/${sensor.id}`)
        }
        else {
            console.log("Czujniki - Nie udało się zmienić assigned, status: ", response.status)
        }
    }

    return (
        <EditAssigned
            headline={"grup czujnika"}
            description={"Zaznacz grupy, w których ma być czujnik"}
            linkTo={"sensors"}
            object={sensor}
            availableChoices={getSGroups}
            handleSend={sendRequest}
        />
    )
}

export default EditSensorGroups;