import { useParams } from "react-router-dom";
import getSensors from "../../FakeBackend/getSensors";
import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";
import EditAssigned from "../editAssigned";

const EditSensorGroups = () => {

    const {id} = useParams();
    const sensor = getSensors.filter(s => s.id === id)[0];

    return (
        <EditAssigned headline={"grup czujnika"} linkTo={"sensors"}
                      object={sensor} availableChoices={getGroupsOfSensors}/>
    )
}

export default EditSensorGroups;