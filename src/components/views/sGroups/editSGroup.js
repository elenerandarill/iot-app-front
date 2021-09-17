import {useHistory, useParams} from "react-router-dom";
import EditAssigned from "../../editAssigned";
import {BackendConnector} from "../../../FakeFrontend/backendConnector";
import {getSensors} from "../../../FakeFrontend/backendSensorConnector";
import {SET_SGROUP_ASSIGNED_URL} from "../../../iotConfig";
import {useEffect, useState} from "react";
import {fetchSgroup} from "../../../FakeFrontend/backendSgroupConnector";

const EditSGroup = () => {
    const [sgroup, setSgroup] = useState(undefined)
    const [sensors, setSensors] = useState(undefined)
    const history = useHistory()
    const {id} = useParams();

    useEffect(() => {
        fetchSgroup(id)
            .then((sgroup) => setSgroup(sgroup))

        getSensors()
            .then((sensors) => setSensors(sensors))
    }, [id])

    const sendRequest = async (assigned) => {
        const backConn = new BackendConnector()
        const response = await backConn.sendAssigned(
            SET_SGROUP_ASSIGNED_URL,
            sgroup,
            assigned
        )
        if (response.status === 200){
            history.push(`/sgroups/${id}`)
        }
        else {
            console.log("sGrupy - Nie udało się zmienić assigned, status: ", response.status)
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