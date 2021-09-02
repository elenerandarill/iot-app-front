import {useHistory, useParams} from "react-router-dom";
import EditAssigned from "../../editAssigned";
import getSGroups from "../../../FakeBackend/getSGroups";
import getPeople from "../../../FakeBackend/getPeople";
import {SET_TEAM_MEMBER_ASSIGNED_URL} from "../../../iotConfig";
import {BackendConnector} from "../../../FakeFrontend/backendConnector";

const EditPersonGroups = () => {
    const history = useHistory()

    const {id} = useParams();
    const person = getPeople.filter(p => p.id === id)[0];

    const sendRequest = async (assigned) => {
        const backConn = new BackendConnector()
        const response = await backConn.sendAssigned(
            SET_TEAM_MEMBER_ASSIGNED_URL,
            person,
            assigned
        )
        if (response.status === 200){
            history.push(`/team/${person.id}`)
        }
        else {
            console.log("Nie udało się zmienić assigned, status: ", response.status)
        }
    }

    return (
        <EditAssigned
            headline={"dostępnych grup"}
            linkTo={"team"}
            object={person}
            availableChoices={getSGroups}
            handleSend={sendRequest}
        />
    )
}

export default EditPersonGroups;