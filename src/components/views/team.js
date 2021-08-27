import getPeople from "../../FakeBackend/getPeople";
import ButtonFunc from "../buttonFunc";
import getSensors from "../../FakeBackend/getSensors";
import ListObjects from "../listObjects";
import {Link} from "react-router-dom";

/**
 * @param person {Person}
 * @returns {JSX.Element}
 */
export const personObjectRenderer = (person) => {
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

    return (
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc text={"osoba"} add={true}/>
            </div>

            <div className="content-3x">
                <div className="content-srodek">

                    <div className="headline-color">Osoby w teamie</div>
                    <div className="white-space top-contact">
                        <ListObjects list={getPeople} objectRenderer={personObjectRenderer}/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Team;