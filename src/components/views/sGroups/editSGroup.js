import {useHistory, useParams} from "react-router-dom";
import getSensors from "../../../FakeBackend/getSensors";
import getSGroups from "../../../FakeBackend/getSGroups";
import EditAssigned from "../../editAssigned";
import {BackendConnector} from "../../../FakeFrontend/backendConnector";
import {SET_SGROUP_ASSIGNED_URL} from "../../../iotConfig";

const EditSGroup = () => {
    const history = useHistory()

    const {id} = useParams();
    const group = getSGroups.filter(g => g.id === id)[0];

    const sendRequest = async (assigned) => {
        const backConn = new BackendConnector()
        const response = await backConn.sendAssigned(
            SET_SGROUP_ASSIGNED_URL,
            group,
            assigned
        )
        if (response.status === 200){
            history.push(`/sgroups/${group.id}`)
        }
        else {
            console.log("sGrupy - Nie udało się zmienić assigned, status: ", response.status)
        }
    }

    return (
        <EditAssigned
            headline={"edycja czujników grupy - "}
            description={"Zaznacz czujniki, które chcesz monitorować w grupie"}
            linkTo={"sgroups"}
            object={group}
            availableChoices={getSensors}
            handleSend={sendRequest}
        />
    )
}

export default EditSGroup;