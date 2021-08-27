import { useParams } from "react-router-dom";
import getSensors from "../../FakeBackend/getSensors";
import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";
import EditAssigned from "../editAssigned";

const EditGroupOfSensors = () => {

    const {id} = useParams();
    const group = getGroupsOfSensors.filter(g => g.id === id)[0];

    return (
        <EditAssigned headline={"czujników grupy - "} linkTo={"groups-of-sensors"}
                      object={group} availableChoices={getSensors}/>
    )
}

export default EditGroupOfSensors;