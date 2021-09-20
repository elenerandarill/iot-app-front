import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {fetchSgroups} from "../../../FakeFrontend/backendSgroupConnector";
import EditAssigned from "../../editAssigned";
import {fetchSensor, setSensorAssignedSgroups} from "../../../FakeFrontend/backendSensorConnector";

const EditSensorGroups = () => {
    const [sGroups, setSgroups] = useState(undefined)
    const [sensor, setSensor] = useState(undefined)
    const history = useHistory()
    const {id} = useParams();

    useEffect(() => {
        fetchSgroups()
            .then(sGroups => setSgroups(sGroups))

        fetchSensor(id)
            .then((sensor) => setSensor(sensor))
    }, [id])

    const sendChangeRequest = async (assigned) => {
        const res = await setSensorAssignedSgroups(sensor, assigned)

        if (res.status === 200){
            history.push(`/sensors/${id}`)
        }
        else {
            console.log("Czujniki - Nie udało się zmienić assigned, status: ", res.status)
        }
    }

    // upewniam sie, ze oba sa pobrane!
    if (sensor && sGroups) {
        return (
            <EditAssigned
                headline={"grup czujnika"}
                description={"Zaznacz grupy, w których ma być czujnik"}
                linkTo={"sensors"}
                object={sensor}
                availableChoices={sGroups}
                handleSend={sendChangeRequest}
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

export default EditSensorGroups;