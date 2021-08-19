import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";
import getPeople from "../../FakeBackend/getPeople";
import EditAssigned from "../editAssigned";

const EditPersonGroups = (props) => {

    const id = props.match.params.id;
    const person = getPeople.filter(p => p.id === id)[0];

    return (
        <EditAssigned headline={"dostępnych grup"} linkTo={"team"}
                      object={person} availableChoices={getGroupsOfSensors}/>
    )
}

export default EditPersonGroups;