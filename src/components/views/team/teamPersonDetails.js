import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import {InputAttribute} from "../../attributes";
import ButtonFunc from "../../buttonFunc";
import ListAssignedObjects from "../../listAssignedObjects";
import getSGroups from "../../../FakeBackend/getSGroups";
import getPeople, {Person} from "../../../FakeBackend/getPeople";
import {groupObjectRenderer} from "../sGroups/sGroups";
import {useEffect, useState} from "react";
import {GET_TEAM_MEMBER_URL} from "../../../iotConfig";


const TeamPersonDetails = () => {
    const [pfullname, setPfullname] = useState();
    const [pnotes, setPnotes] = useState();
    const {id} = useParams();
    const [person, setPerson] = useState(undefined)

    useEffect(() => {
        const fetchPerson = async (id) => {
            console.log("Sending request to fetch person")
            const res = await fetch(
                GET_TEAM_MEMBER_URL,
                {
                    method: "POST",
                    body: JSON.stringify({"id": id})
                }
            )
            console.log("resp: ", res)
            const resJson = await res.json()
            console.log("resp.json: ", resJson)
            const person = jsonToPerson(resJson)
            console.log("person details: ", person)
            return person
        }

        fetchPerson(id)
            .then((person) => setPerson(person))
    }, [id])

    const jsonToPerson = (p) => {
        return new Person(p.id, p.fullname, p.joinedAt, p.assigned, p.notes)
    }

    if(!person) {
        return (
            <div className="main">
                <div>NIE ZNALEZIONO TAKIEJ OSOBY</div>
            </div>
        )
    }

    const setNewFullname = (input) => {
        console.log("input for fullname: ", input)
        setPfullname(input)
    }

    return (
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc text={"powrót do listy"} link="/team"/>
                <ButtonFunc text={"usuń tę osobę"} link="/person/delete"/>
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        {person.fullname}
                    </div>
                    <div className="white-space top-contact">

                        <InputAttribute
                            label="imię i nazwisko"
                            name="pFullname"
                            placeholder={person.fullname}
                            // onClick={(e) => setNewFullname(e.target.value)}
                        />
                        <InputAttribute
                            label="notatka"
                            name="pNotes"
                            placeholder={person.notes === "" ? "Tu wpisz notatkę." : person.notes}
                            // onChange={}
                        />

                        <div className="shadow listed-attribute">
                            <div className="head-txt">DOSTĘP DO GRUP</div>
                            <div className="position-cent">
                                <div className="object-container-grid">
                                    <div className="edit-objs-btn centered">
                                        <ButtonFunc
                                            text={"edytuj"}
                                            link={`/team/${person.id}/edit`}
                                        />
                                    </div>
                                    <div className="object-container txt-violet txt-semibold">

                                        {person.assigned.length === 0
                                            ? <div className="centered">nie przypisano do żadnej grupy</div>
                                            : <ListAssignedObjects assigned={person.assigned} list={getSGroups}
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

export default TeamPersonDetails;