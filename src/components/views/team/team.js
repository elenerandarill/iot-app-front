import { Member } from "../../../FakeBackend/getMembers";
import ListObjects from "../../listObjects";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {ROUTE_TMEMBER_ADD, ROUTE_TMEMBER_DETAILS, URL_TEAM_LIST} from "../../../iotConfig";
import {ButtonLink} from "../../buttons";

/**
 * @param member {Member}
 * @returns {JSX.Element}
 */
export const memberObjectRenderer = (member) => {
    // console.log("renderer dostaje: ", member)
    return (
        <Link
            key={member.id}
            to={ROUTE_TMEMBER_DETAILS(member.id)}
        >
            <div className={"object shadow" + (member.assigned.length === 0 ? " mark-as-new" : "")}>
                <div className="txt-semibold">{member.fullname}</div>
            </div>
        </Link>
    )
}

const Team = () => {
    const [team, setTeam] = useState([]);

    // zaraz po zaladowaniu strony pobierz obiekty z backendu
    useEffect(() => {
        const getTeam = async () => {
            const teamFromServer = await fetchTeam()
            console.log("teamFromServer: ", teamFromServer)
            return jsonToMember(teamFromServer)
        }

        getTeam()
            .then(team => setTeam(team))
    }, [])

    const fetchTeam = async () => {
        console.log("Sending request to fetch Team")
        // https://stackoverflow.com/questions/29775797/fetch-post-json-data
        const res = await fetch(
            URL_TEAM_LIST,
            { method: "POST" }
        )
        return await res.json()
    }

    const jsonToMember = (list) => {
        const list2 = list.map(m =>
            new Member(m.id, m.fullname, m.joinedAt, m.assigned, m.notes))
        console.log("[ from backend ] all objects of type Member: ", list2)
        return list2
    }

    return (
        <div className="main">
            <div className="buttons-container">
                <ButtonLink
                    text="osoba"
                    add={true}
                    link={ROUTE_TMEMBER_ADD}
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
    )
}

export default Team;