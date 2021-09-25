import { useState } from "react";
import DisplayChoices from "./displayChoices";
import {ButtonFunc, ButtonLink} from "./buttons";

/**
 * @param type --> sensors-in
 * @returns {JSX.Element}
 * @constructor
 */
const EditAssigned = ({headline, description, linkTo, object, availableChoices, handleSend}) => {
    const [selection, setSelection] = useState([])

    console.log("dostał obiekt: ", object)

    const getAssignedObjects = (obj) => {
        const results = availableChoices.filter(o => obj.assigned.includes(o.id));
        console.log("getAssignedObjects, res: ", results);
        return results
    }

    return (
        <div className="main">
            <div className="buttons-container">
                <ButtonLink
                    link={`/${linkTo}/${object.id}`}
                    text="anuluj"
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
                            <ButtonFunc
                                text="gotowe"
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleSend(selection)
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditAssigned;