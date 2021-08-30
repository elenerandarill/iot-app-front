import { useState } from "react";
import ButtonFunc from "../../buttonFunc";
import DisplayChoices from "../../displayChoices";
import getSGroups from "../../../FakeBackend/getSGroups";

const AddTeamPerson = () => {
    const [pname, setPname] = useState("");
    const [pnotes, setPnotes] = useState("");
    const [selection, setSelection] = useState([])


    const onSubmit = (e) => {
        // trzeba bedzie zalaczyc liste choices przed wyslaniem!
        e.preventDefault();
        let data = {}
        data["fullname"] = pname
        data["notes"] = pnotes
        data["assigned"] = selection

        sendForm(data)
            // .then((json) => {
            //     console.log("json: ", json)
            // })
    }

    const sendForm = async (data) => {
        console.log("Sending new person to backend")
        // https://stackoverflow.com/questions/29775797/fetch-post-json-data
        const res = await fetch(
            "http://localhost:8000/cgi-bin/fake/add_team", {
                method: "POST",
                body: JSON.stringify(data)
            }
        )

        const resStatus = res.status

        const resJson = await res.json()
        // ...
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

                                <DisplayChoices availableChoices={getSGroups} alreadyAssigned={[]}
                                                onNewSelection={(newSelection) => {
                                                    setSelection(newSelection)
                                                }} />

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