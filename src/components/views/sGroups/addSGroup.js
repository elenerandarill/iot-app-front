import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import ButtonFunc from "../../buttonFunc";
import DisplayChoices from "../../displayChoices";
// import fakeMeasurements from "../../../FakeFrontend/getGroupMeasurements";
import {getSensors} from "../../../FakeFrontend/backendConnector";
import {ADD_SGROUP_URL} from "../../../iotConfig";


const AddSGroup = () => {
    const [sensors, setSensors] = useState([]);
    const [gname, setGname] = useState("");
    const [gnotes, setGnotes] = useState("");
    const [selection, setSelection] = useState([])

    const history = useHistory();

    useEffect(() => {
        getSensors()
            .then(sensors => setSensors(sensors))
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        let data = {}
        data["name"] = gname
        data["notes"] = gnotes
        data["assigned"] = getIds(selection)

        sendForm(data)
    }

    const getIds = (objects) => {
        return objects.map(o => o.id)
    }

    const sendForm = async(data) => {
        console.log("Tworzenie nowej grupy.")
        const res = await fetch(
            ADD_SGROUP_URL,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        )
        const resStatus = res.status
        console.log("Res status: ", resStatus)
        if (resStatus === 200){
            history.push("/sgroups")
        }else{
            alert("Error, resp status " + resStatus)
        }
        const resJson = res.json()
        console.log("resp body: ", resJson)
    }

    return (
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc text={"powrót do listy"} link={"/sgroups"}/>
            </div>

            <div className="content-3x">
                <div className="content-srodek">

                    <div className="headline-color">
                        Tworzenie nowej grupy czujników
                    </div>
                    <div className="white-space top-contact">

                        <form onSubmit={onSubmit}>
                            <div className="shadow no-contact centered">
                                <div className="head-txt">NAZWA</div>
                                <div className="position-cent">
                                    <input
                                        type="text"
                                        placeholder="nazwa"
                                        className="input"
                                        value={gname}
                                        onChange={(e) => setGname(e.target.value)}
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
                                        value={gnotes}
                                        onChange={(e) => setGnotes(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="shadow no-contact centered txt-center">
                                <div className="head-txt">
                                    Zaznacz czujniki, które chcesz przypisać do&nbsp;grupy
                                </div>

                                <DisplayChoices
                                    availableChoices={sensors}
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
    )
}

export default AddSGroup;