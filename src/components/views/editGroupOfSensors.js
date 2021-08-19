import getSensors from "../../FakeBackend/getSensors";
import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";
import EditAssigned from "../editAssigned";

const EditGroupOfSensors = (props) => {

    const id = props.match.params.id;
    const group = getGroupsOfSensors.filter(g => g.id === id)[0];

    return (
        <EditAssigned headline={"czujników grupy - "} linkTo={"groups-of-sensors"}
                      object={group} availableChoices={getSensors}/>
    )
}

export default EditGroupOfSensors;