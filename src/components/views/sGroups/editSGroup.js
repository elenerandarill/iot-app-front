import { useParams } from "react-router-dom";
import getSensors from "../../../FakeBackend/getSensors";
import getSGroups from "../../../FakeBackend/getSGroups";
import EditAssigned from "../../editAssigned";

const EditSGroup = () => {

    const {id} = useParams();
    const group = getSGroups.filter(g => g.id === id)[0];

    return (
        <EditAssigned headline={"czujników grupy - "} linkTo={"sgroups"}
                      object={group} availableChoices={getSensors}/>
    )
}

export default EditSGroup;