import {useHistory, useParams} from "react-router-dom";
import {InputString, InputTextarea} from "../../attributes";
import ButtonFunc from "../../buttonFunc";
import ListObjects from "../../listObjects";
import getSGroups from "../../../FakeBackend/getSGroups";
import getMembers, {Member} from "../../../FakeBackend/getMembers";
import {groupObjectRenderer} from "../sGroups/sGroups";
import {useEffect, useState} from "react";
import {GET_TEAM_MEMBER_URL, SET_TEAM_MEMBER_NAME_URL, SET_TEAM_MEMBER_NOTES_URL} from "../../../iotConfig";
import {BackendConnector} from "../../../FakeFrontend/backendConnector";
import {getMemberAssignedSgroups} from "../../../FakeFrontend/dataUtils";


const TeamMemberDetails = () => {
    const [member, setMember] = useState(undefined)
    const [assignedObjs, setAssignedObjs] = useState([])
    const {id} = useParams();
    const history = useHistory()


    useEffect(() => {
        const fetchMember = async (id) => {
            console.log("Sending request to fetch member")
            const res = await fetch(
                GET_TEAM_MEMBER_URL,
                {
                    method: "POST",
                    body: JSON.stringify({"id": id})
                }
            )
            const resJson = await res.json()
            console.log("resp: ", res, ", resp.json: ", resJson)
            const member = jsonToMember(resJson)
            console.log("member details: ", member)
            return member
        }

        fetchMember(id)
            .then((member) => setMember(member))

        getMemberAssignedSgroups(id)
            .then(listObjs => setAssignedObjs(listObjs))
    }, [id])

    useEffect(() => {
        
    }, [id])

    const jsonToMember = (m) => {
        return new Member(m.id, m.fullname, m.joinedAt, m.assigned, m.notes)
    }

    if(!member) {
        return (
            <div className="main">
                <div className="stats-title">nie znaleziono takiej osoby</div>
            </div>
        )
    }

    const changeFullname = async (fullname) => {
        console.log("New input for field: ", fullname)
        const backConn = new BackendConnector()
        const response = await backConn.sendAttribute(
            SET_TEAM_MEMBER_NAME_URL,
            member,
            fullname
        )
        if (response.status === 200){
            history.push(`/team/${member.id}`)
        }
        else {
            console.log("Członek grupy - Nie udało się zmienić wartości, status: ", response.status)
        }
    }

    const changeNotes = async (notes) => {
        try {
            console.log("New input for field: ", notes)
            const backConn = new BackendConnector()
            const response = await backConn.sendAttribute(
                SET_TEAM_MEMBER_NOTES_URL,
                member,
                notes
            )
            if (response.status === 200) {
                history.push(`/team/${member.id}`)
            } else {
                console.log("Członek grupy - Nie udało się zmienić wartości, status: ", response.status)
            }
        }
        catch(e) {
            console.log("catch - ERROR", e)
        }

    }

    return (
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc text={"powrót do listy"} link="/team"/>
                <ButtonFunc text={"usuń tę osobę"} link="/member/delete"/>
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        {member.fullname}
                    </div>
                    <div className="white-space top-contact">

                        <InputString
                            label="imię i nazwisko"
                            name="fullname"
                            placeholder={member.fullname}
                            sendChange={changeFullname}
                        />
                        <InputTextarea
                            label="notatka"
                            name="notes"
                            placeholder={member.notes === "" ? "Tu wpisz notatkę." : member.notes}
                            sendChange={changeNotes}
                        />

                        <div className="shadow listed-attribute">
                            <div className="head-txt">DOSTĘP DO GRUP</div>
                            <div className="position-cent">
                                <div className="object-container-grid">
                                    <div className="edit-objs-btn centered">
                                        <ButtonFunc
                                            text={"edytuj"}
                                            link={`/team/${member.id}/edit`}
                                        />
                                    </div>
                                    <div className="object-container txt-violet txt-semibold">

                                        {member.assigned.length === 0
                                            ? <div className="centered">nie przypisano do żadnej grupy</div>
                                            : <ListObjects
                                                list={assignedObjs}
                                                objectRenderer={groupObjectRenderer}
                                            />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMemberDetails;