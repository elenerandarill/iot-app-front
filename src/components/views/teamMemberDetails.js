import getPeople from "../../FakeBackend/getPeople";
import {Link} from "react-router-dom";
import ButtonFunc from "../buttonFunc";
import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";
import ListAssignedObjects from "../listAssignedObjects";

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
                <Link to="/team">
                    <ButtonFunc text={"powrót do listy"}/>
                </Link>
                <ButtonFunc text={"usuń tę osobę"}/>
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        {person.fullname}
                    </div>
                    <div className="white-space top-contact">

                        <div className="shadow object">
                            <div>IMIĘ I NAZWISKO</div>
                            <div className="position-cent">
                                <input
                                    type="text"
                                    name="name"
                                    className="input"
                                    placeholder={person.fullname}
                                />
                            </div>
                        </div>
                        <div className="shadow object">
                            <div>NOTATKA</div>
                            <div className="position-cent">
                                <input
                                    type="text"
                                    name="notes"
                                    className="input"
                                    placeholder={person.notes === "" ? "Tu wpisz notatkę." : person.notes}
                                />
                            </div>
                        </div>

                        <div className="shadow no-contact centered pad-bot-15px">
                            <div className="mrg-tb">DOSTĘP DO GRUP</div>
                            <div className="position-cent">
                                <div className="object-container-grid">
                                    <div className="edit-objs-btn centered">
                                        <ButtonFunc text={"edytuj"}/>
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