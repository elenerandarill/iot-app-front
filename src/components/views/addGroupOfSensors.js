import ButtonFunc from "../buttonFunc";
import {Link} from "react-router-dom";
import { useState } from "react";


const AddGroupOfSensors = () => {
    const [gname, setGname] = useState("");
    const [gnotes, setGnotes] = useState("");
    const [gperiod, setGperiod] = useState("");
    let [choices, setChoices] = useState([]);

    // let chosenMeasurements = [];

    const measurements = [
        "temperatura", "wilgotność powietrza", "wilgotność podłoża",
        "ciśnienie", "oświetlenie", "stężenie CO2", "stężenie EC",
        "ilość tVOC", "aktywność", "dystans", "poziom wody"
    ];

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const toggleChoices = (m) => {
        console.log("list: ", choices)
        choices.includes(m)
            ? choices = choices.filter(choice => choice !== m)
            : choices.push(m)
        setChoices([...choices])

        console.log("list: ", choices)
    }

    return(
        <div className="main">
            <div className="buttons-container">
                <Link to="/groups-of-sensors">
                    <ButtonFunc text={"powrót do listy"} link={"/groups-of-sensors"}/>
                </Link>
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
                                Zaznacz dane, które chcesz monitorować w grupie
                            </div>
                                <div className="object-container">

                                    {measurements.map(m =>
                                        <div
                                            key={m.toString()}
                                            className={`object-choices shadow ${choices.includes(m) ? " choice-active" : ""}`}
                                            onClick={() => toggleChoices(m)}
                                        >
                                            {m}
                                        </div>

                                        )}
                                </div>
                        </div>

                        <div className="shadow no-contact centered pad-bot-15px">
                        <div className="head-txt txt-center">Średni pomiar z
                            <input
                                type="number"
                                placeholder="ilość dni"
                                className="input"
                                value={gperiod}
                                onChange={(e) => setGperiod(e.target.value)}
                            />
                        dni.
                        </div>
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

export default AddGroupOfSensors;