import {useState} from 'react';
import {groupObjectRenderer} from "../sGroups/sGroups";
import {sensorObjectRenderer} from "../sensors/sensors";
import ListObjects from "../../listObjects";
import {fetchSensors} from "../../../FakeFrontend/backendSensorConnector";
import {fetchSgroups} from "../../../FakeFrontend/backendSgroupConnector";
import {ButtonFunc} from "../../buttons";
import DisplayChoices from "../../displayChoices";


const AddNewAlert = () => {
    const [selectCategory, setSelectCategory] = useState("")
    const [objectsList, setObjectsList] = useState(undefined)
    const [selection, setSelection] = useState(undefined)
    // const [renderer, setRenderer] = useState(undefined)

    const getSensors = () => {
        setSelectCategory("sensors")
        // setRenderer(sensorObjectRenderer)
        fetchSensors()
            .then((sensors) => setObjectsList(sensors))
    }
    const getSgroups = () => {
        setSelectCategory("sgroups")
        // setRenderer(groupObjectRenderer)
        fetchSgroups()
            .then((sgroup) => setObjectsList(sgroup))
    }

    const setChoice = (choice) => {
        if (selection === choice){
            setSelection(undefined)
        } else {
            setSelection(choice)
        }
    }

    return (
        <div className="main">
            <div className="buttons-container"/>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        utworzenie nowego alertu
                    </div>
                    <div className="white-space top-contact">

                        <div className="shadow listed-attribute">
                            <div className="head-txt">
                                {"kategoria obiektu do monitorowania"}
                            </div>
                            <div className="position-cent">
                                <ButtonFunc
                                    text="czujnik"
                                    onClick={() => getSensors()}
                                />
                                <ButtonFunc
                                    text="grupa czujników"
                                    onClick={() => getSgroups()}
                                />
                            </div>
                            <div className="object-container">
                                 <div>
                                     {selectCategory === "sensors" && "Zaznacz czujnik do monitorowania"}
                                     {selectCategory === "sgroups" && "Zaznacz grupę do monitorowania"}

                                    {objectsList
                                        ? <div>
                                            {objectsList.map((choice =>
                                                    <div
                                                        key={choice.id}
                                                        className={`object-choices shadow ${selection === choice
                                                            ? " choice-active" : ""}`}
                                                        onClick={() => setChoice(choice)}
                                                    >
                                                        {choice.getDisplayName()}
                                                    </div>
                                            ))}
                                        </div>

                                        : <div>Pobieram dane, proszę czekać.</div>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="shadow listed-attribute">
                            <div className="head-txt">{"wybierz pomiar"}</div>
                            <div className="position-cent">

                            </div>
                        </div>
                        <div className="shadow listed-attribute">
                            <div className="head-txt">{"wybierz regułę"}</div>
                            <div className="position-cent">
                                <div
                                    className="btn btn-color"
                                    onClick={() => console.log("wybrano równy")}
                                >
                                    równy
                                </div>
                                <div
                                    className="btn btn-color"
                                    onClick={() => console.log("wybrano większy niż")}
                                >
                                    większy niż
                                </div>
                                <div
                                    className="btn btn-color"
                                    onClick={() => console.log("wybrano mniejszy niż")}
                                >
                                    mniejszy niż
                                </div>

                            </div>
                        </div>
                        <div className="shadow listed-attribute">
                            <div className="head-txt">{"podaj wartość graniczną"}</div>
                            <div className="position-cent">
                                <input
                                    className="input"
                                /> [jednostka]
                            </div>
                        </div>
                        <div className="object-container">
                            <div
                                className="btn btn-color"
                                onClick={() => console.log("stworzono nowy alarm")}
                            >
                                gotowe
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default AddNewAlert;