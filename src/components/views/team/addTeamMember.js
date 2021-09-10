import { useState } from "react";
import { useHistory } from "react-router-dom";
import ButtonFunc from "../../buttonFunc";
import DisplayChoices from "../../displayChoices";
import getSGroups from "../../../FakeBackend/getSGroups";
import {ADD_TEAM_MEMBER_URL} from "../../../iotConfig";

const AddTeamMember = () => {
    const [pname, setPname] = useState("");
    const [pnotes, setPnotes] = useState("");
    const [selection, setSelection] = useState([])
    let history = useHistory();

    const onSubmit = (e) => {
        // trzeba bedzie zalaczyc liste choices przed wyslaniem!
        e.preventDefault();
        let data = {}
        data["fullname"] = pname
        data["notes"] = pnotes
        data["assigned"] = getIds(selection)

        sendForm(data)
            // .then((json) => {
            //     console.log("json: ", json)
            // })
    }

    const getIds = (objects) => {
        return objects.map(o => o.id)
    }

    const sendForm = async (data) => {
        console.log("Sending new member to backend")
        // https://stackoverflow.com/questions/29775797/fetch-post-json-data
        const res = await fetch(
            ADD_TEAM_MEMBER_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        )
        const resStatus = res.status
        console.log("resp status: ", resStatus)
        if (resStatus === 200){
            history.push("/team")
        }else{
            alert("Error, resp status " + resStatus)
        }
        // Aby wyciagnac body! i tez zwraca Promise, stąd await
        const resJson = await res.json()
        console.log("resp body: ", resJson)
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

export default AddTeamMember;