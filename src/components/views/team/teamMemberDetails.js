import {useParams} from "react-router-dom";
import {InputString} from "../../attributes";
import {ButtonLink} from "../../buttons";
import ListObjects from "../../listObjects";
import {useEffect, useState} from "react";
import {ROUTE_TMEMBER_EDIT, ROUTE_TMEMBER_LIST, URL_TEAM_MEMBER_SET, URL_USER_SET} from "../../../iotConfig";
import {changeValue} from "../../../FakeFrontend/backendConnector";
import {fetchMember, getMemberAssigned} from "../../../FakeFrontend/backendMemberConnector";
import {permRenderer} from "./team";


const TeamMemberDetails = () => {
    const [member, setMember] = useState(undefined)
    const [assignedObjs, setAssignedObjs] = useState([])
    const {id} = useParams();

    useEffect(() => {
        fetchMember(id)
            .then((member) => setMember(member))

        getMemberAssigned(id)
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
                <ButtonLink
                text="powrót do listy"
                link={ROUTE_TMEMBER_LIST}
                />
                <ButtonLink
                    text="usuń tę osobę"
                    link={"team/member/delete"}
                />
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        {member.fullname}
                    </div>
                    <div className="white-space top-contact">

                        <InputString
                            label="imię"
                            placeholder={member.fname}
                            sendChange={(newValue) => changeValue(
                                URL_USER_SET, "USRID", member.id, "UFNAME", newValue)}
                        />
                        <InputString
                            label="nazwisko"
                            placeholder={member.lname}
                            sendChange={(newValue) => changeValue(
                            URL_USER_SET, "USRID", member.id, "ULNAME", newValue)}
                        />

                        <div className="shadow listed-attribute">
                            <div className="head-txt">DOSTĘP DO GRUP</div>
                            <div className="position-cent">
                                <div className="object-container-grid">
                                    <div className="edit-objs-btn centered">
                                        <ButtonLink
                                            text={"edytuj"}
                                            link={ROUTE_TMEMBER_EDIT(id)}
                                        />
                                    </div>
                                    <div className="object-container txt-violet txt-semibold">

                                        {assignedObjs.length === 0
                                            ? <div className="centered">nie przypisano do żadnej grupy</div>
                                            : <ListObjects
                                                list={assignedObjs}
                                                objectRenderer={permRenderer}
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