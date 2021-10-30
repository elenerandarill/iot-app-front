import React, {useState} from 'react';

const SelectObject = ({selectObjCategory, listOfObjects, objSelected}) => {
    const [selection, setSelection] = useState(undefined)

    const setChoice = (choice) => {
            setSelection(choice)
            objSelected(choice)
    }

    return (
        <div className="txt-center">
            {selectObjCategory === "sensors" && "Zaznacz czujnik do monitorowania"}
            {selectObjCategory === "sgroups" && "Zaznacz grupę do monitorowania"}

            {listOfObjects
                ? <div className="object-container">
                    {listOfObjects.map((choice =>
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
    );
};

export default SelectObject;