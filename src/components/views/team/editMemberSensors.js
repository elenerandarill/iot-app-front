import {useHistory, useParams} from "react-router-dom";
import EditAssigned from "../../editAssigned";
import {
    fetchMember,
    getMemberAssigned,
    setMemberAssigned
} from "../../../FakeFrontend/backendMemberConnector";
import {useEffect, useState} from "react";
import {ROUTE_TMEMBER_DETAILS} from "../../../iotConfig";
import {fetchSensors} from "../../../FakeFrontend/backendSensorConnector";
import {Perm} from "../../../FakeBackend/getPerms";
import UserViews from "../userViews";


const EditMemberSensors = () => {
    const [member, setMember] = useState(undefined)
    const [sgAssigned, setSgAssigned] = useState(undefined)
    const [sensors, setSensors] = useState(undefined)
    const history = useHistory()
    const {id} = useParams();

    const convert_to_perms = (slist) => {
        console.log("Lista sensorów: ", slist)
        let permList = []
        for (const s of slist) {
            permList.push(new Perm(s.id, "SENSOR", s.name, s.sn))
        }
        return permList
    }
    const filterSensors = (list) => {
        return list.filter(o => o.type === "SENSOR")
    }

    useEffect(() => {
        fetchSensors()
            .then((sensors) => setSensors(sensors))

        fetchMember(id)
            .then((member) => {
                setMember(member)
            })

        getMemberAssigned(id)
            .then(
                (sgFound) => setSgAssigned(filterSensors(sgFound))
            )
    }, [id])

    const sendChangeRequest = async (assigned) => {
        setMemberAssigned(id, assigned, "SENSOR")
            .then(() => history.push(ROUTE_TMEMBER_DETAILS(id)))
    }


    // upewniam sie, ze dane sa pobrane z serwera!
    if (member && sensors && sgAssigned) {
        return (
            <UserViews>
                <EditAssigned
                    headline={"edycja dostępnych grup"}
                    description={"Zaznacz grupy, do których udzielasz dostępu"}
                    linkTo={"team"}
                    object={member}
                    assigned={sgAssigned}
                    availableChoices={convert_to_perms(sensors)}
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

export default EditMemberSensors;