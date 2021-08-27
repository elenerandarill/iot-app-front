import { useParams } from "react-router-dom";
import EditAssigned from "../editAssigned";
import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";
import getPeople from "../../FakeBackend/getPeople";

const EditPersonGroups = () => {

    const {id} = useParams();
    const person = getPeople.filter(p => p.id === id)[0];

    return (
        <EditAssigned headline={"dostępnych grup"} linkTo={"team"}
                      object={person} availableChoices={getGroupsOfSensors}/>
    )
}

export default EditPersonGroups;