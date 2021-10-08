import {useHistory, useParams} from "react-router-dom";
import EditAssigned from "../../editAssigned";
import {useEffect, useState} from "react";
import {
    fetchSgroup,
    getSgroupAssignedSensors,
    setSgroupAssignedSensors
} from "../../../FakeFrontend/backendSgroupConnector";
import {fetchSensors} from "../../../FakeFrontend/backendSensorConnector";
import {ROUTE_SGROUP_DETAILS} from "../../../iotConfig";
import UserViews from "../userViews";

const EditSGroup = () => {
    const [sgroup, setSgroup] = useState(undefined)
    const [sAssigned, setSAssigned] = useState(undefined)
    const [sensors, setSensors] = useState(undefined)
    const history = useHistory()
    const {id} = useParams();

    useEffect(() => {
        fetchSgroup(id)
            .then((sgroup) => setSgroup(sgroup))

        fetchSensors()
            .then((sensors) => setSensors(sensors))

        getSgroupAssignedSensors(id)
            .then((sFound) => setSAssigned(sFound))
    }, [id])

    const sendChangeRequest = async (assigned) => {
        setSgroupAssignedSensors(id, assigned)
            .then(res => history.push(ROUTE_SGROUP_DETAILS(id)))
    }

    // upewniam sie, ze dane sa pobrane z serwera!
    if (sgroup && sensors && sAssigned) {
        return (
            <UserViews>
                <EditAssigned
                    headline={"edycja czujników grupy - "}
                    description={"Zaznacz czujniki, które chcesz monitorować w grupie"}
                    linkTo={"sgroup"}
                    object={sgroup}
                    assigned={sAssigned}
                    availableChoices={sensors}
                    handleSend={sendChangeRequest}
                />
            </UserViews>
        )
    } else {
        return (
            <UserViews>
                <div className="head-txt">
                    Pobieranie danych. Proszę czekać.
                </div>
            </UserViews>
        )
    }
}

export default EditSGroup;