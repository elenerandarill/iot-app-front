import getPeople from "../../FakeBackend/getPeople";
import {Link} from "react-router-dom";
import ButtonFunc from "../buttonFunc";
import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";
import ListAssignedObjects from "../listAssignedObjects";
import {InputAttribute} from "../attributes";

const TeamMemberDetails = (props) => {
    const id = props.match.params.id;

    const getPerson = (id) => {
        // zwraca liste!
        return getPeople.filter(s => s.id === id)[0]
    }

    const person = getPerson(id);

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
                                        <ButtonFunc text={"edytuj"} link="team/:id/edit"/>
                                    </div>
                                    <div className="object-container txt-violet txt-semibold">

                                        {person.assigned.length === 0
                                            ? <div className="centered">nie przypisano do żadnej grupy</div>
                                            : <ListAssignedObjects assigned={person.assigned} list={getGroupsOfSensors} linkTo={"group"}/>
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