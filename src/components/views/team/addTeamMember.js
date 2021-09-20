import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import DisplayChoices from "../../displayChoices";
import {fetchSgroups} from "../../../FakeFrontend/backendSgroupConnector";
import {ADD_TEAM_MEMBER_URL} from "../../../iotConfig";

const AddTeamMember = () => {
    const [sGroups, setSgroups] = useState(undefined);
    const [pname, setPname] = useState("");
    const [pnotes, setPnotes] = useState("");
    const [selection, setSelection] = useState([])
    let history = useHistory();

    useEffect(() => {
        fetchSgroups()
            .then(sGroups => setSgroups(sGroups))
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        let data = {}
        data["fullname"] = pname
        data["notes"] = pnotes
        data["assigned"] = getIds(selection)

        sendRequest(data)
    }

    const getIds = (objects) => {
        return objects.map(o => o.id)
    }

    const sendRequest = async (data) => {
        console.log("Tworzenie nowego membera.")
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

    if (sGroups){
        return (
            <div className="main">
                <div className="buttons-container">
                    <Link to={"/team"}>
                        <div
                            className="btn btn-color"
                        >
                            powrót do listy
                        </div>
                    </Link>
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

                                    <DisplayChoices
                                        availableChoices={sGroups}
                                        alreadyAssigned={[]}
                                        onNewSelection={(newSelection) => {setSelection(newSelection)}}
                                    />

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
    }else{
        return (
            <div className="head-txt">
                Pobieranie danych. Proszę czekać.
            </div>
        )
    }

};

export default AddTeamMember;