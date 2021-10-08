import {Member} from "../../../FakeBackend/getMembers";
import ListObjects from "../../listObjects";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {ROUTE_SENSOR_DETAILS, ROUTE_SGROUP_DETAILS, ROUTE_TMEMBER_NEW, ROUTE_TMEMBER_DETAILS} from "../../../iotConfig";
import {ButtonLink} from "../../buttons";
import {fetchTeam} from "../../../FakeFrontend/backendMemberConnector";
import UserViews from "../userViews";

/**
 * @param member {Member}
 * @returns {JSX.Element}
 */
export const memberObjectRenderer = (member) => {
    console.log("memberObjectRenderer dostaje: ", member)
    return (
        <Link
            key={member.id}
            to={ROUTE_TMEMBER_DETAILS(member.id)}
        >
            <div className={"object shadow" + (member.is_new ? " mark-as-new" : "")}>
                <div className="txt-semibold">{member.getDisplayName()}</div>
            </div>
        </Link>
    )
}

export const permRenderer = (perm) => {
    // console.log("permRenderer dostaje: ", perm)
    return (
        <Link
            key={perm.type + perm.id}
            to={perm.type === "SENSOR"
                ? ROUTE_SENSOR_DETAILS(perm.id)
                : ROUTE_SGROUP_DETAILS(perm.id)}
        >
            <div className={"object shadow"}>
                <div className="txt-semibold">{perm.getDisplayName()}</div>
            </div>
        </Link>
    )
}

const Team = () => {
    const [team, setTeam] = useState([]);

    // zaraz po zaladowaniu strony pobierz obiekty z backendu
    useEffect(() => {
        fetchTeam(1)
            .then(team => setTeam(team))
    }, [])


    return (
        <UserViews>
            <div className="main">
                <div className="buttons-container">
                    <ButtonLink
                        text="osoba"
                        add={true}
                        link={ROUTE_TMEMBER_NEW}
                    />
                </div>

                <div className="content-3x">
                    <div className="content-srodek">

                        <div className="headline-color">Osoby w teamie</div>
                        <div className="white-space top-contact">
                            <ListObjects
                                list={team}
                                objectRenderer={memberObjectRenderer}
                            />
                        </div>

                    </div>
                </div>

            </div>
        </UserViews>
    )
}

export default Team;