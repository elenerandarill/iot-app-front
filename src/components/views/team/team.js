import getPeople, {Person} from "../../../FakeBackend/getPeople";
import ButtonFunc from "../../buttonFunc";
import ListObjects from "../../listObjects";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

/**
 * @param person {Person}
 * @returns {JSX.Element}
 */
export const personObjectRenderer = (person) => {
    console.log("renderer dostaje: ", person)
    return (
        <Link
            key={person.id}
            to={`/team/${person.id}`}
        >
            <div className={"object shadow" + (person.assigned.length === 0 ? " mark-as-new" : "")}>
                <div className="txt-semibold">{person.fullname}</div>
            </div>
        </Link>
    )
}

const Team = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const getTeam = async () => {
            const teamFromServer = await fetchTeam()
            console.log("teamFromServer: ", teamFromServer);
            return jsonToPerson(teamFromServer)
        }

        getTeam()
            .then(team => setTeam(team))
    }, [])

    const fetchTeam = async () => {
        console.log("Sending request to fetch team")
        // https://stackoverflow.com/questions/29775797/fetch-post-json-data
        const res = await fetch("http://localhost:8000/cgi-bin/fake/get_team", { method: "POST" })
        return await res.json()
    }

    const jsonToPerson = (list) => {
        const list2 = list.map(p => new Person(p.id, p.fullname, p.joinedAt, p.assigned, p.notes))
        console.log("list2: ", list2)
        return list2
    }

    return (
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc text={"osoba"} add={true} link={"add/team"}/>
            </div>

            <div className="content-3x">
                <div className="content-srodek">

                    <div className="headline-color">Osoby w teamie</div>
                    <div className="white-space top-contact">
                        <ListObjects list={team} objectRenderer={personObjectRenderer}/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Team;