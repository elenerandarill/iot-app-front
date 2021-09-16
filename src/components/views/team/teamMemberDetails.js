import {Link, useParams} from "react-router-dom";
import {InputString, InputTextarea} from "../../attributes";
import ButtonFunc from "../../buttonFunc";
import ListObjects from "../../listObjects";
import {groupObjectRenderer} from "../sGroups/sGroups";
import {useEffect, useState} from "react";
import {SET_TEAM_MEMBER_NAME_URL, SET_TEAM_MEMBER_NOTES_URL} from "../../../iotConfig";
import {getMemberAssignedSgroups, changeValue} from "../../../FakeFrontend/dataUtils";
import {fetchMember} from "../../../FakeFrontend/backendConnector";


const TeamMemberDetails = () => {
    const [member, setMember] = useState(undefined)
    const [assignedObjs, setAssignedObjs] = useState([])
    const {id} = useParams();

    useEffect(() => {
        fetchMember(id)
            .then((member) => setMember(member))

        getMemberAssignedSgroups(id)
            .then(listObjs => setAssignedObjs(listObjs))
    }, [id])



    if(!member) {
        return (
            <div className="main">
                <div className="stats-title">nie znaleziono takiej osoby</div>
            </div>
        )
    }

    return (
        <div className="main">
            <div className="buttons-container">
                <Link to={"/team"}>
                    <div
                        className="btn btn-color"
                    >
                        powrót do listy
                    </div>
                </Link>
                <Link to={"team/member/delete"}>
                    <div
                        className="btn btn-color"
                    >
                        usuń tę osobę
                    </div>
                </Link>
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
                            object={member}
                            url={SET_TEAM_MEMBER_NAME_URL}
                            sendChange={changeValue}
                        />
                        <InputTextarea
                            label="notatka"
                            name="notes"
                            placeholder={member.notes === "" ? "Tu wpisz notatkę." : member.notes}
                            object={member}
                            url={SET_TEAM_MEMBER_NOTES_URL}
                            sendChange={changeValue}
                        />

                        <div className="shadow listed-attribute">
                            <div className="head-txt">DOSTĘP DO GRUP</div>
                            <div className="position-cent">
                                <div className="object-container-grid">
                                    <div className="edit-objs-btn centered">
                                        <ButtonFunc
                                            text={"edytuj"}
                                            link={`/team/${id}/edit`}
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