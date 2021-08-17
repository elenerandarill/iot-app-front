import getSensors from "../../FakeBackend/getSensors";
import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";
import EditAssigned from "../editAssigned";

const EditSensor = (props) => {

    const id = props.match.params.id;
    const sensor = getSensors.filter(s => s.id === id)[0];

    return (
        <EditAssigned headline={"grup czujnika"} linkTo={"sensors"}
                      object={sensor} availableChoices={getGroupsOfSensors}/>
    )
}

export default EditSensor;