import {useHistory, useParams} from "react-router-dom";
import EditAssigned from "../../editAssigned";
import {useEffect, useState} from "react";
import {fetchSgroup, setSgroupAssignedSensors} from "../../../FakeFrontend/backendSgroupConnector";
import {fetchSensors} from "../../../FakeFrontend/backendSensorConnector";

const EditSGroup = () => {
    const [sgroup, setSgroup] = useState(undefined)
    const [sensors, setSensors] = useState(undefined)
    const history = useHistory()
    const {id} = useParams();

    useEffect(() => {
        fetchSgroup(id)
            .then((sgroup) => setSgroup(sgroup))

        fetchSensors()
            .then((sensors) => setSensors(sensors))
    }, [id])

    const sendRequest = async (assigned) => {
        const res = await setSgroupAssignedSensors(sgroup, assigned)

        if (res.status === 200){
            history.push(`/sgroups/${id}`)
        }
        else {
            console.log("sGrupy - Nie udało się zmienić assigned, status: ", res.status)
        }
    }

    // upewniam sie, ze oba sa pobrane!
    if (sgroup && sensors){
    return (
        <EditAssigned
            headline={"edycja czujników grupy - "}
            description={"Zaznacz czujniki, które chcesz monitorować w grupie"}
            linkTo={"sgroups"}
            object={sgroup}
            availableChoices={sensors}
            handleSend={sendRequest}
        />
    )
    }else{
        return (
            <div className="head-txt">
                Pobieranie danych. Proszę czekać.
            </div>
        )
    }
}

export default EditSGroup;