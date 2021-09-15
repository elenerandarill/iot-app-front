import React, {useState} from 'react';
import ListObjects from "../../listObjects";
import {sensorObjectRenderer} from "../sensors/sensors";

const AddNewAlert = () => {
    const [selectCategory, setSelectCategory] = useState("")
    const sensorsList = ["1", "2", "3"]
    const groupsList = ["1", "2", "3"]

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
                            <div className="head-txt">{"obiekt do monitorowania"}</div>
                            <div className="position-cent">
                                <div
                                    className="btn btn-color"
                                    onClick={() => setSelectCategory("sensor")}
                                >
                                    czujnik
                                </div>
                                <div
                                    className="btn btn-color"
                                    onClick={() => setSelectCategory("group")}
                                >
                                    grupa czujników
                                </div>
                            </div>
                            <div className="object-container">
                                {selectCategory === "sensor" && "Tu będą pokazane czujniki do wyboru"}
                                {selectCategory === "group" && "Tu będą pokazane grupy do wyboru"}
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
};

export default AddNewAlert;