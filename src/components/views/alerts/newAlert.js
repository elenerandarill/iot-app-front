import {useState} from 'react';
import {useHistory} from "react-router-dom";
import {fetchSensors} from "../../../FakeFrontend/backendSensorConnector";
import {fetchSgroups} from "../../../FakeFrontend/backendSgroupConnector";
import {ButtonFunc, ButtonLink} from "../../buttons";
import UserViews from "../userViews";
import SelectObject from "../../selectObject";
import SelectMeasurementType from "../../selectMeasurementType"
import Condition from "../../../FakeBackend/Condition";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";


const NewAlert = () => {
    const [selectCategory, setSelectCategory] = useState("")
    const [objectsList, setObjectsList] = useState(undefined)
    /** @type {Sensor | GroupOfSensors} */
    const [selectedObj, setSelectedObj] = useState(undefined)
    const [selectedCondition, setSelectedCondition] = useState(undefined)
    const [value, setValue] = useState(undefined)
    /** @type {MeasuremntType} */
    const [mmentSelection, setMmentSelection] = useState("")
    const history = useHistory()
    const conditions = [
        new Condition("EQUALS", "równy"),
        new Condition("GREATERTHAN", "większy niż"),
        new Condition("LESSTHAN", "mniejszy niż"),
    ]

    const getSensors = () => {
        setSelectCategory("sensors")
        // setRenderer(sensorObjectRenderer)
        fetchSensors()
            .then(setObjectsList)
            .catch(error => handleUnauthorizedException(error, history))
    }
    const getSgroups = () => {
        setSelectCategory("sgroups")
        // setRenderer(groupObjectRenderer)
        fetchSgroups()
            .then((sgroup) => setObjectsList(sgroup))
            .catch(error => handleUnauthorizedException(error, history))
    }


    // TODO trzeba bedzie zlozyc do kupy wiadomosc do reqiesta
    const sendNewCondition = () => {
        // selectCategory === "sensors" ? SENID : SGRID
        console.log("[ SENDING ] selectedObj = ", selectedObj.id)
        console.log("[ SENDING ] mmentSelection = ", mmentSelection.name)
        console.log("[ SENDING ] selectedCondition = ", selectedCondition)
        console.log("[ SENDING ] value = ", value)
    }

    return (
        <UserViews>
            <div className="main">
                <div className="buttons-container">
                    <ButtonLink
                        link="/notification/list"
                        text="anuluj"
                    />
                </div>
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
                                        onClick={getSensors}
                                    />
                                    <ButtonFunc
                                        text="grupa czujników"
                                        onClick={getSgroups}
                                    />
                                </div>
                                <SelectObject
                                    selectObjCategory={selectCategory}
                                    listOfObjects={objectsList}
                                    objSelected={setSelectedObj}
                                />
                            </div>

                            <div className="shadow listed-attribute">
                                <div className="head-txt">{"wybierz pomiar"}</div>
                                <div className="position-cent">
                                    <SelectMeasurementType
                                        mmentSelection={setMmentSelection}
                                    />
                                </div>
                            </div>

                            <div className="shadow listed-attribute">
                                <div className="head-txt">{"wybierz regułę"}</div>
                                <div className="position-cent">
                                    {conditions.map((cond) =>
                                        <div
                                            className={`object-choices shadow ${selectedCondition === cond.value
                                                ? " choice-active" : ""}`}
                                            onClick={() => setSelectedCondition(cond.value)}
                                        >
                                            {cond.description}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="shadow listed-attribute">
                                <div className="head-txt">{"podaj wartość graniczną"}</div>
                                <div className="position-cent">
                                    <input
                                        type="text"
                                        className="input"
                                        onChange={e => setValue(e.target.value)}
                                    /> [{mmentSelection.unit}]
                                </div>
                            </div>

                            <div className="object-container">
                                <div
                                    className="btn btn-color"
                                    onClick={sendNewCondition}
                                >
                                    gotowe
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserViews>
    );
}


export default NewAlert;