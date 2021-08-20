import React from 'react';
import ChartDataChoices from "../chartDataChoices";
import ButtonFunc from "../buttonFunc";
import { getLabels } from "../chartUtils";
import DisplayChoices from "../displayChoices";
import getSensors from "../../FakeBackend/getSensors";
import getChartsInfo from "../../FakeFrontend/getChartsInfo";

const EditSensorChart = (props) => {

    const id = props.match.params.id;
    const sensor = getSensors.filter(s => s.id === id)[0];

    return (
        <div>
            <div className="main">
                <div className="buttons-container">
                    <ButtonFunc
                        text={"anuluj"}
                        link={`/sensors}/${sensor.id}`}
                    />
                </div>

                <div className="content-3x">
                    <div className="content-srodek">
                        <div className="headline-color">
                            edycja wykresu
                        </div>

                        <div className="shadow white-space top-contact  txt-center">
                            <div className="head-txt">
                                wybierz typ wykresu
                            </div>
                            <div className="object-container">
                                <ChartDataChoices list={getChartsInfo}/>

                                {/*<DisplayChoices*/}
                                {/*    availableChoices={getChartsInfo}*/}
                                {/*    alreadyAssigned={[getChartsInfo[0]]}*/}
                                {/*/>*/}

                            </div>

                            <div className="object-container-grid mrg-0-top30">
                                <div className="head-txt">
                                    zaznacz wartości do wyświetlenia
                                </div>

                                <div className="object-container">
                                <div
                                    className="btn btn-color"
                                    onClick={() => console.log("Wysłano!")}
                                >
                                    gotowe
                                </div>
                                </div>

                                <div className="object-container">

                                    {/*<DisplayChoices*/}
                                    {/*    availableChoices={getLabels(sensor)}*/}
                                    {/*    alreadyAssigned={[sensor]}*/}
                                    {/*/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditSensorChart;