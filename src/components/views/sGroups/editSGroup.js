import {useHistory, useParams} from "react-router-dom";
import EditAssigned from "../../editAssigned";
import {useEffect, useState} from "react";
import {
    fetchSgroup, getSgroupAssignedSensors, remSgroupMemb, addSgroupMemb
} from "../../../FakeFrontend/backendSgroupConnector";
import {fetchSensors} from "../../../FakeFrontend/backendSensorConnector";
import {ROUTE_SGROUP_DETAILS} from "../../../iotConfig";
import UserViews from "../userViews";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {findDifferenceInLists} from "../../utils";


const EditSGroup = () => {
    const [sgroup, setSgroup] = useState(undefined)
    const [sAssigned, setSAssigned] = useState(undefined)
    const [sensors, setSensors] = useState(undefined)
    const history = useHistory()
    const {id} = useParams();

    useEffect(() => {
        fetchSgroup(id)
            .then((sgroup) => setSgroup(sgroup))
            .catch(error => handleUnauthorizedException(error, history))

        fetchSensors()
            .then((sensors) => setSensors(sensors))
            .catch(error => handleUnauthorizedException(error, history))

        getSgroupAssignedSensors(id)
            .then((sFound) => setSAssigned(sFound))
            .catch(error => handleUnauthorizedException(error, history))
    }, [id])

    const sendChangeRequest = async (selected) => {
        const [addedList, removedList] = findDifferenceInLists(sAssigned, selected)
        let promiseList = []

        for (const s of addedList) {
            promiseList.push(addSgroupMemb(id, s.id)
                .then()
                .catch(error => handleUnauthorizedException(error, history))
            )
        }

        for (const s of removedList) {
            promiseList.push(remSgroupMemb(id, s.id)
                .then()
                .catch(error => handleUnauthorizedException(error, history))
            )
        }
        await Promise.all(promiseList)
        console.log("SGroup <<< sensors - changes finished.")
        history.push(ROUTE_SGROUP_DETAILS(id))
    }

    // upewniam sie, ze dane sa pobrane z serwera!
    if (sgroup && sensors && sAssigned) {
        return (
            <UserViews>
                <EditAssigned
                    headline="edycja czujników grupy - "
                    description="Zaznacz czujniki, które chcesz monitorować w grupie"
                    linkTo="sgroup"
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