import { useState } from "react";
import ButtonFunc from "../buttonFunc";
import DisplayChoices from "../displayChoices";
import fakeMeasurements from "../../FakeFrontend/getGroupMeasurements";


const AddGroupOfSensors = () => {
    const [gname, setGname] = useState("");
    const [gnotes, setGnotes] = useState("");
    const [gperiod, setGperiod] = useState("");

    const onSubmit = (e) => {
        // trzeba bedzie zalaczyc liste choices przed wyslaniem!
        e.preventDefault();
    }


    return(
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc text={"powrót do listy"} link={"/groups-of-sensors"}/>
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
                                Zaznacz dane, które chcesz monitorować w&nbsp;grupie
                            </div>

                            <DisplayChoices availableChoices={fakeMeasurements} alreadyAssigned={[]} />

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