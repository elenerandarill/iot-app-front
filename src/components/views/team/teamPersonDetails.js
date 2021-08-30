import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import {InputAttribute} from "../../attributes";
import ButtonFunc from "../../buttonFunc";
import ListAssignedObjects from "../../listAssignedObjects";
import getSGroups from "../../../FakeBackend/getSGroups";
import getPeople, {Person} from "../../../FakeBackend/getPeople";
import {groupObjectRenderer} from "../sGroups/sGroups";
import {useEffect, useState} from "react";


const TeamPersonDetails = () => {
    const {id} = useParams();
    const [person, setPerson] = useState(undefined)

    useEffect(() => {
        const fetchPerson = async (id) => {
            console.log("Sending request to fetch person")
            const res = await fetch(
                "http://localhost:8000/cgi-bin/fake/get_person",
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
                            name="personFullname"
                            placeholder={person.fullname}
                            // onChange={}
                        />
                        <InputAttribute
                            label="notatka"
                            name="personNotes"
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