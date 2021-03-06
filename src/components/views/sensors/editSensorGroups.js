import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {addSgroupMemb, fetchSgroups, remSgroupMemb} from "../../../FakeFrontend/backendSgroupConnector";
import EditAssigned from "../../editAssigned";
import {fetchSensor, getSensorAssignedSgroups} from "../../../FakeFrontend/backendSensorConnector";
import {ROUTE_SENSOR_DETAILS} from "../../../iotConfig";
import UserViews from "../userViews";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {findDifferenceInLists} from "../../utils";

const EditSensorGroups = () => {
    const [sGroups, setSgroups] = useState(
        /** @type {GroupOfSensors[]} */ undefined)
    const [sgAssigned, setSgAssigned] = useState(
        /** @type {GroupOfSensors[]} */ undefined)
    const [sensor, setSensor] = useState(
        /** @type {Sensor} */ undefined)
    const history = useHistory()
    const {id} = useParams();

    useEffect(() => {
        fetchSgroups()
            .then(setSgroups)
            .catch(error => handleUnauthorizedException(error, history))

        fetchSensor(id)
            .then((sensor) => setSensor(sensor))
            .catch(error => handleUnauthorizedException(error, history))

        getSensorAssignedSgroups(id)
            .then((sgFound) => setSgAssigned(sgFound))
            .catch(error => handleUnauthorizedException(error, history))
    }, [id])

    const sendChangeRequest = async (selected) => {
        const [addedList, removedList] = findDifferenceInLists(sgAssigned, selected)
        let promiseList = []

        for (const g of addedList) {
            promiseList.push(addSgroupMemb(g.id, id)
                .then()
                .catch(error => handleUnauthorizedException(error, history))
            )
        }

        for (const g of removedList) {
            promiseList.push(remSgroupMemb(g.id, id)
                .then()
                .catch(error => handleUnauthorizedException(error, history))
            )
        }
        await Promise.all(promiseList)
        console.log("Sensor <<< sGroups - changes finished.")
        history.push(ROUTE_SENSOR_DETAILS(id))
    }

    // upewniam sie, ze dane sa pobrane z serwera!
    if (sensor && sGroups && sgAssigned) {
        return (
            <UserViews>
                <EditAssigned
                    headline={"grup czujnika"}
                    description={"Zaznacz grupy, w kt??rych ma by?? czujnik"}
                    linkTo={"sensor"}
                    object={sensor}
                    assigned={sgAssigned}
                    availableChoices={sGroups}
                    handleSend={sendChangeRequest}
                />
            </UserViews>
        )
    } else {
        return (
            <UserViews>
                <div className="head-txt">
                    Pobieranie danych. Prosz?? czeka??.
                </div>
            </UserViews>
        )
    }
}

export default EditSensorGroups;