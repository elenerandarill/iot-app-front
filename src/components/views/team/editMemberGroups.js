import {useHistory, useParams} from "react-router-dom";
import EditAssigned from "../../editAssigned";
import {fetchSgroups} from "../../../FakeFrontend/backendSgroupConnector";
import {fetchMember, setMemberAssignedSgroups} from "../../../FakeFrontend/backendMemberConnector";
import {useEffect, useState} from "react";
import {ROUTE_TMEMBER_DETAILS} from "../../../iotConfig";

const EditMemberGroups = () => {
    const [member, setMember] = useState(undefined)
    const [sgroups, setSgroups] = useState(undefined)
    const history = useHistory()
    const {id} = useParams();

    useEffect(() => {
        fetchSgroups()
            .then((sgroups) => setSgroups(sgroups))

        fetchMember(id)
            .then((member) => setMember(member))
    }, [id])

    const sendRequest = async (assigned) => {
        const res = await setMemberAssignedSgroups(member, assigned)

        if (res.status === 200){
            history.push(ROUTE_TMEMBER_DETAILS(id))
        }
        else {
            console.log("Członek grupy - Nie udało się zmienić assigned, status: ", res.status)
        }
    }

    // upewniam sie, ze oba sa pobrane!
    if (member && sgroups){
        return (
            <EditAssigned
                headline={"edycja dostępnych grup"}
                description={"Zaznacz grupy, do których udzielasz dostępu"}
                linkTo={"team"}
                object={member}
                availableChoices={sgroups}
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

export default EditMemberGroups;