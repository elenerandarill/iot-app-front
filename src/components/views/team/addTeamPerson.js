import { useState } from "react";
import ButtonFunc from "../../buttonFunc";
import DisplayChoices from "../../displayChoices";
import getSGroups from "../../../FakeBackend/getSGroups";

const AddTeamPerson = () => {
    const [pname, setPname] = useState("");
    const [pnotes, setPnotes] = useState("");


    const onSubmit = (e) => {
        // trzeba bedzie zalaczyc liste choices przed wyslaniem!
        e.preventDefault();
    }

    return (
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc text={"powrót do listy"} link={"/team"}/>
            </div>

            <div className="content-3x">
                <div className="content-srodek">

                    <div className="headline-color">
                        Dodawanie nowej osoby do zespołu
                    </div>
                    <div className="white-space top-contact">

                        <form onSubmit={onSubmit}>
                            <div className="shadow no-contact centered">
                                <div className="head-txt">imię i nazwisko</div>
                                <div className="position-cent">
                                    <input
                                        type="text"
                                        placeholder="imię i nazwisko"
                                        className="input"
                                        value={pname}
                                        onChange={(e) => setPname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="shadow no-contact centered">
                                <div className="head-txt">NOTATKA</div>
                                <div className="position-cent">
                                    <input
                                        type="text"
                                        placeholder="notatka"
                                        className="input"
                                        value={pnotes}
                                        onChange={(e) => setPnotes(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="shadow no-contact centered txt-center">
                                <div className="head-txt">
                                    Zaznacz grupy, do których dana osoba ma&nbsp;mieć uprawnienia
                                </div>

                                <DisplayChoices availableChoices={getSGroups} alreadyAssigned={[]}/>

                            </div>

                            <div className="position-cent mrg-t"><input
                                type="submit"
                                value="Utwórz"
                                className="btn btn-color insert-button"
                            />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTeamPerson;