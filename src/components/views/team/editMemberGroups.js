import {useHistory, useParams} from "react-router-dom";
import EditAssigned from "../../editAssigned";
import getSGroups from "../../../FakeBackend/getSGroups";
import getMembers from "../../../FakeBackend/getMembers";
import {SET_TEAM_MEMBER_ASSIGNED_URL} from "../../../iotConfig";
import {BackendConnector} from "../../../FakeFrontend/backendConnector";

const EditMemberGroups = () => {
    const history = useHistory()

    const {id} = useParams();
    const member = getMembers.filter(p => p.id === id)[0];

    const sendRequest = async (assigned) => {
        const backConn = new BackendConnector()
        const response = await backConn.sendAssigned(
            SET_TEAM_MEMBER_ASSIGNED_URL,
            member,
            assigned
        )
        if (response.status === 200){
            history.push(`/team/${member.id}`)
        }
        else {
            console.log("Członek grupy - Nie udało się zmienić assigned, status: ", response.status)
        }
    }

    return (
        <EditAssigned
            headline={"edycja dostępnych grup"}
            description={"Zaznacz grupy, do których udzielasz dostępu"}
            linkTo={"team"}
            object={member}
            availableChoices={getSGroups}
            handleSend={sendRequest}
        />
    )
}

export default EditMemberGroups;