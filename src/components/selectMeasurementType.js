import React, {useState} from 'react';
import MeasuremntType from "../FakeBackend/MeasuremntType";


const SelectMeasurementType = ({mmentSelection}) => {
    const [selection, setSelection] = useState(new MeasuremntType("", "", ""))
    // TODO: tymczasowe rozwiazanie!!!!
    const types = [
        new MeasuremntType("TEMP", "temperatura", "°C"),
        new MeasuremntType("RHUM", "wilgotność", "%"),
        new MeasuremntType("PRES", "ciśnienie", "hPa"),
    ]

    /** @param type {MeasuremntType} */
    const setChoice = (type) => {
        // console.log("SelectMeasurementType, type = ", type)
        setSelection(type)
        mmentSelection(type)
    }

    console.log("types:", types)

    return (
        <div>
            {types
                ? <div className="object-container">
                    {types.map((t =>
                            <div
                                key={t.name}
                                className={`object-choices shadow ${selection.name === t.name
                                    ? " choice-active" : ""}`}
                                onClick={() => setChoice(t)}
                            >
                                {t.description}
                            </div>
                    ))}
                </div>

                : <div>Pobieram dane, proszę czekać.</div>
            }
        </div>
    );
};

export default SelectMeasurementType;