import { useState } from "react";
import ButtonFunc from "./buttonFunc";
import DisplayChoices from "./displayChoices";

/**
 * @param type --> sensors-in
 * @returns {JSX.Element}
 * @constructor
 */
const EditAssigned = ({headline, description, linkTo, object, availableChoices, handleSend}) => {
    const [selection, setSelection] = useState([])

    const getAssignedObjects = (obj) => {
        const results = availableChoices.filter(o => obj.assigned.includes(o.id));
        console.log("getAssignedObjects, res: ", results);
        return results
    }

    return (
        <div className="main">
            <div className="buttons-container">
                    <ButtonFunc
                        text={"anuluj"}
                        link={`/${linkTo}/${object.id}`}
                    />
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                         {headline} {object.name}
                    </div>

                    <div className="shadow white-space top-contact  txt-center">
                        <div className="head-txt">
                            {description}
                        </div>
                        <div className="object-container">
                            <DisplayChoices
                                availableChoices={availableChoices}
                                alreadyAssigned={getAssignedObjects(object)}
                                onNewSelection={setSelection}
                            />
                        </div>
                        <div className="object-container">
                        <div
                            className="btn btn-color"
                            onClick={(e) => {
                                e.preventDefault()
                                handleSend(selection)
                            }}
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

export default EditAssigned;