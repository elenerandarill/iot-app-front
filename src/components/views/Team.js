import SearchBox from "../SearchBox";
import {Link} from "react-router-dom";
import plus from "../../media/plus.svg";
import dot from "../../media/dot.svg";
import people from "../../FakeBackend/people";

const Team = () => {
    return (
        <div className="main">
            <div className="main-func-buttons">
                <button className="btn btn-purple btn-func insert-button">
                    <img src={plus} className="icon-plus" alt="dodaj wartość"/>
                    <p>osoba</p>
                </button>
            </div>

            <div className="content-3x">
                <div className="content-srodek">

                    <div className="btn-purple btn-section">Osoby w teamie</div>
                    <div className="white-space top-contact">
                        <div className="centered"><SearchBox/></div>
                        <div className="object-container">
                            {people.map(p =>
                                <Link key={p.id}
                                      to={`/team/${p.id}`}
                                      person_id={p.id}
                                      className="object shadow"
                                >
                                    {p.fullname}
                                </Link>
                            )}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Team;