import {useHistory, useParams} from "react-router-dom";
import EditAssigned from "../../editAssigned";
import {SET_TEAM_MEMBER_ASSIGNED_URL} from "../../../iotConfig";
import {BackendConnector, getSgroups, fetchMember} from "../../../FakeFrontend/backendConnector";
import {useEffect, useState} from "react";

const EditMemberGroups = () => {
    const [member, setMember] = useState(undefined)
    const [sgroups, setSgroups] = useState(undefined)
    const history = useHistory()
    const {id} = useParams();

    useEffect(() => {
        getSgroups()
            .then((sgroups) => setSgroups(sgroups))

        fetchMember(id)
            .then((member) => setMember(member))
    }, [id])

    const sendRequest = async (assigned) => {
        const backConn = new BackendConnector()
        const response = await backConn.sendAssigned(
            SET_TEAM_MEMBER_ASSIGNED_URL,
            member,
            assigned
        )
        if (response.status === 200){
            history.push(`/team/${id}`)
        }
        else {
            console.log("Członek grupy - Nie udało się zmienić assigned, status: ", response.status)
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