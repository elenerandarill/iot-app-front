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
import {Perm} from "../../../FakeBackend/getPerms";


const EditMemberSgroups = () => {
    const [member, setMember] = useState(undefined)
    const [sgAssigned, setSgAssigned] = useState(undefined)
    const [sgroups, setSgroups] = useState(undefined)
    const history = useHistory()
    const {id} = useParams();

    const convert_to_perms = (sglist) => {
        console.log("Lista sgrup: ", sglist)
        let permList = []
        for (const sg of sglist){
            permList.push(new Perm(sg.id, "SGROUP", sg.name))
        }
        return permList
    }
    const filterSgroups = (list) => {
        return list.filter(o => o.type === "SGROUP")
    }

    useEffect(() => {
        fetchSgroups()
            .then((sgroups) => setSgroups(sgroups))

        fetchMember(id)
            .then((member) => {
                setMember(member)
            })

        getMemberAssigned(id)
            .then((sgFound) => setSgAssigned(filterSgroups(sgFound)))
    }, [id])

    const sendChangeRequest = async (assigned) => {
        setMemberAssigned(id, assigned, "SGROUP")
            .then(() => history.push(ROUTE_TMEMBER_DETAILS(id)))
    }

    // upewniam sie, ze dane sa pobrane z serwera!
    if (member && sgroups && sgAssigned){
        return (
            <EditAssigned
                headline={"edycja dostępnych grup"}
                description={"Zaznacz grupy, do których udzielasz dostępu"}
                linkTo={`team/${id}/details`}
                object={member}
                assigned={sgAssigned}
                availableChoices={convert_to_perms(sgroups)}
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

export default EditMemberSgroups;