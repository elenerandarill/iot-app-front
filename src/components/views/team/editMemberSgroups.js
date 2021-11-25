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
import {Permissible} from "../../../FakeBackend/getPermssible";
import UserViews from "../userViews";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";


const EditMemberSgroups = () => {
    const [member, setMember] = useState(undefined)
    const [sgAssigned, setSgAssigned] = useState(undefined)
    const [sgroups, setSgroups] = useState(undefined)
    const history = useHistory()
    const {id} = useParams();

    const convert_to_perms = (sglist) => {
        console.log("Lista sgrup: ", sglist)
        let permList = []
        for (const sg of sglist) {
            permList.push(new Permissible(sg.id, "SGROUP", sg.name))
        }
        return permList
    }
    const filterSgroups = (list) => {
        return list.filter(o => o.type === "SGROUP")
    }

    useEffect(() => {
        fetchSgroups()
            .then((sgroups) => setSgroups(sgroups))
            .catch(error => handleUnauthorizedException(error, history))

        fetchMember(id)
            .then(setMember)
            .catch(error => handleUnauthorizedException(error, history))


        getMemberAssigned(id)
            .then((sgFound) => setSgAssigned(filterSgroups(sgFound)))
            .catch(error => handleUnauthorizedException(error, history))
    }, [id])

    const sendChangeRequest = async (assigned) => {
        setMemberAssigned(id, assigned, "SGROUP")
            .then(() => history.push(ROUTE_TMEMBER_DETAILS(id)))
    }


    if (!member || !sgroups || !sgAssigned) {
        return (
            <UserViews>
                <div className="head-txt">
                    Pobieranie danych. Proszę czekać.
                </div>
            </UserViews>

        )
    } else {
        return (
            <UserViews>
                <EditAssigned
                    headline={"edycja dostępnych grup"}
                    description={"Zaznacz grupy, do których udzielasz dostępu"}
                    linkTo={"team"}
                    object={member}
                    assigned={sgAssigned}
                    availableChoices={convert_to_perms(sgroups)}
                    handleSend={sendChangeRequest}
                />
            </UserViews>
        )
    }
}

export default EditMemberSgroups;