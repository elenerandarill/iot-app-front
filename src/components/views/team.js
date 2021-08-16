import SearchBox from "../searchBox";
import {Link} from "react-router-dom";
import plus from "../../media/plus.svg";
import dot from "../../media/dot.svg";
import getPeople from "../../FakeBackend/getPeople";
import ButtonFunc from "../buttonFunc";

const Team = () => {
    return (
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc text={"osoba"} add="yes"/>
            </div>

            <div className="content-3x">
                <div className="content-srodek">

                    <div className="headline-color">Osoby w teamie</div>
                    <div className="white-space top-contact">
                        <div className="centered"><SearchBox/></div>
                        <div className="object-container">
                            {getPeople.map(p =>
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