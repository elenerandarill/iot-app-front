import { useHistory } from "react-router-dom";
import ButtonFunc from "./buttonFunc";
import DisplayChoices from "./displayChoices";
import axios from "axios";
import {CATFISH_URL} from "../iotConfig";

/**
 * @param type --> sensors-in
 * @returns {JSX.Element}
 * @constructor
 */
const EditAssigned = ({headline, linkTo, object, availableChoices}) => {

    let history = useHistory();

    const headline2 = (object) => {
        if (object.fullname) {
            return "Zaznacz grupy, do których udzielasz dostępu"
        }
        else if (object.sn) {
            return "Zaznacz grupy, w których ma być czujnik"
        }
        else {
            return "Zaznacz czujniki, które chcesz monitorować w grupie"
        }
    }

    const getAssignedObjects = (obj) => {
        const results = availableChoices.filter(o => obj.assigned.includes(o.id));
        console.log(results);
        return results
    }

    const handleSend = (object) => {
        // POST
        const id = object.id
        const list = object.assigned
        console.log("przekazano: ", object)
        axios.post(CATFISH_URL, {
            $schema: "https://json-schema.org/draft/2020-12/schema",
            $id: "https://example.com/product.schema.json",
            title: "GroupsOfASensor",
            sensorId: id,
            groups: list
        })

            .then(function (response) {
                console.log("response to Front", response);
                if (response.status === 200){
                    // console.log("Przekierowuję...");
                    history.push(`/${linkTo}/${object.id}`);
                }
            })
            .catch(function (error) {
                console.log("error", error);
            });
    };


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
                        edycja {headline} {object.name}
                    </div>

                    <div className="shadow white-space top-contact  txt-center">
                        <div className="head-txt">
                            {headline2(object)}
                        </div>
                        <div className="object-container">
                            <DisplayChoices
                                availableChoices={availableChoices}
                                alreadyAssigned={getAssignedObjects(object)}
                            />
                        </div>
                        <div className="object-container">
                        <div
                            className="btn btn-color"
                            onClick={() => handleSend(object)}
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