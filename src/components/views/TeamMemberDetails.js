import people from "../../FakeBackend/people";
import {Link} from "react-router-dom";
import remove from "../../media/remove.svg";
import ButtonFunc from "../ButtonFunc";

const TeamMemberDetails = (props) => {
    const id = props.match.params.id;

    const getPerson = (id) => {
        // zwraca liste!
        return people.filter(s => s.id === id)[0]
    }

    const person = getPerson(id);

    return (
        <div className="main">
            <div className="buttons-container">
                <Link to="/team">
                    <ButtonFunc text={"powrót do listy"}/>
                </Link>
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
                                <div className="object-container txt-violet txt-semibold">

                                    {person.groups.length === 0
                                        ? <div className="centered">nie przypisano do żadnej grupy</div>
                                        : person.groups.map(sg =>
                                            <div key={sg.valueOf()} className="assigned shadow">
                                                <div className="assigned-txt-half pointer">{sg}</div>
                                                <div className="assigned-rem-half">
                                                    <img src={remove} className="i-remove pointer"/>
                                                </div>
                                            </div>)}
                                </div>
                            </div>
                        </div>
                        <div className="shadow no-contact fx-between paint-gray01">
                            <div className="btn btn-small txt-center mrg-tb">dodaj grupę</div>
                            <div className="btn btn-small txt-center mrg-tb">wyczyść grupy</div>
                            <div className="btn btn-small txt-center mrg-tb">usuń osobę</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMemberDetails;