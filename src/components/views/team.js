import getPeople from "../../FakeBackend/getPeople";
import ButtonFunc from "../buttonFunc";
import getSensors from "../../FakeBackend/getSensors";
import ListObjects from "../listObjects";

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
                        <ListObjects list={getPeople} type={"team"}/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Team;