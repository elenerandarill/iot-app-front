import {useHistory, useParams} from "react-router-dom";
import EditAssigned from "../../editAssigned";
import {fetchSgroups} from "../../../FakeFrontend/backendSgroupConnector";
import {
    fetchMember,
    getMemberAssigned,
    setMemberAssigned
} from "../../../FakeFrontend/backendMemberConnector";
import {useEffect, useState} from "react";
import {ROUTE_TMEMBER_DETAILS} from "../../../iotConfig";
import {fetchSensors} from "../../../FakeFrontend/backendSensorConnector";

const EditMemberGroups = () => {
    const [member, setMember] = useState(undefined)
    const [sgAssigned, setSgAssigned] = useState(undefined)
    const [sgroups, setSgroups] = useState(undefined)
    const [sensors, setSensors] = useState(undefined)
    const history = useHistory()
    const {id} = useParams();

    useEffect(() => {
        fetchSgroups()
            .then((sgroups) => setSgroups(sgroups))

        fetchSensors()
            .then((sensors) => setSensors(sensors))

        fetchMember(id)
            .then((member) => setMember(member))

        getMemberAssigned(id)
            .then((sgFound) => setSgAssigned(sgFound))
    }, [id])

    const sendChangeRequest = async (assigned) => {
        setMemberAssigned(id, assigned)
            .then(() => history.push(ROUTE_TMEMBER_DETAILS(id)))
    }

    // upewniam sie, ze dane sa pobrane z serwera!
    if (member && sgroups && sgAssigned){
        return (
            <EditAssigned
                headline={"edycja dostępnych grup"}
                description={"Zaznacz grupy, do których udzielasz dostępu"}
                linkTo={"team"}
                object={member}
                assigned={sgAssigned}
                availableChoices={sgroups}
                handleSend={sendChangeRequest}
            />
        )
    } else {
        return (
            <div className="head-txt">
                Pobieranie danych. Proszę czekać.
            </div>
        )
    }
}

export default EditMemberGroups;