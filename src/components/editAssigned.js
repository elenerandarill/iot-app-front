import {Link} from "react-router-dom";
import { useState } from "react";
import ButtonFunc from "./buttonFunc";
import getGroupsOfSensors from "../FakeBackend/getGroupsOfSensors";
import getSensors from "../FakeBackend/getSensors";

const EditAssigned = (props) => {
    let [choices, setChoices] = useState([]);

    const pathElems = props.location.pathname.split("/");

    const fromView = pathElems[1]

    const typeOfEdit = fromView === "groups-of-sensors" ? "czujników grupy" : "grup czujnika"

    const iterableList = fromView === "groups-of-sensors" ? getGroupsOfSensors : getSensors

    const id = pathElems[2]

    const object = fromView === "groups-of-sensors"
        ? getGroupsOfSensors.filter(g => g.id === id)[0]
        : getSensors.filter(s => s.id === id)[0]

    console.log("object: ", object)

    return (
        <div className="main">
            <div className="buttons-container">
                <Link to="/groups-of-sensors">
                    <ButtonFunc
                        text={"powrót do grupy"}
                        link={`/groups-of-sensors/${object.id}`}
                    />
                </Link>
                <ButtonFunc text={"usuń tę grupę"}/>
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        edycja {typeOfEdit}
                    </div>

                    <div className="shadow no-contact centered txt-center">
                        <div className="head-txt">
                            Zaznacz czujniki, które chcesz monitorować w grupie
                        </div>
                        <div className="object-container">

                            {/*{iterableList.map(i =>*/}
                            {/*    <div*/}
                            {/*        key={i.id}*/}
                            {/*        className={`object-choices shadow ${choices.includes(i) ? " choice-active" : ""}`}*/}
                            {/*        onClick={() => toggleChoices(i)}*/}
                            {/*    >*/}
                            {/*        {i}*/}
                            {/*    </div>*/}
                            {/*)}*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditAssigned;