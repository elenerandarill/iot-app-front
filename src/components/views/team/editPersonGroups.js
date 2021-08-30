import { useParams } from "react-router-dom";
import EditAssigned from "../../editAssigned";
import getSGroups from "../../../FakeBackend/getSGroups";
import getPeople from "../../../FakeBackend/getPeople";

const EditPersonGroups = () => {

    const {id} = useParams();
    const person = getPeople.filter(p => p.id === id)[0];

    return (
        <EditAssigned headline={"dostępnych grup"} linkTo={"team"}
                      object={person} availableChoices={getSGroups}/>
    )
}

export default EditPersonGroups;