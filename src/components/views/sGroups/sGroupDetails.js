import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import ListObjects from "../../listObjects";
import {InputString, InputTextarea} from "../../attributes";
import {sensorObjectRenderer} from "../sensors/sensors";
import {SET_SGROUP_NAME_URL, SET_SGROUP_NOTES_URL} from "../../../iotConfig";
import {fetchSgroup, getSgroupAssignedSensors} from "../../../FakeFrontend/backendSgroupConnector";
import {changeValue} from "../../../FakeFrontend/backendConnector";


const SGroupDetails = () => {
    const [sgroup, setSgroup] = useState(undefined)
    const [assignedObjs, setAssignedObjs] = useState([])
    const {id} = useParams();

    useEffect(() => {
        fetchSgroup(id)
            .then((sgroup) => setSgroup(sgroup))

        getSgroupAssignedSensors(id)
            .then(listObjs => setAssignedObjs(listObjs))
    }, [id])

    if (!sgroup) {
        return(
            <div className="main">
                <div className="stats-title">nie znaleziono takiej grupy</div>
            </div>
        )
    }

    return(
        <div className="main">
            <div className="buttons-container">
                <Link to={"/sgroups"}>
                    <div
                        className="btn btn-color"
                    >
                        powrót do listy
                    </div>
                </Link>
                <div
                    className="btn btn-color"
                    onClick={() => console.log("Usuwam tę grupę")}
                >
                    usuń tę grupę
                </div>
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        {sgroup.name}
                    </div>
                    <div className="white-space top-contact">
                        <InputString
                            label="nazwa"
                            name="name"
                            placeholder={sgroup.name}
                            object={sgroup}
                            url={SET_SGROUP_NAME_URL}
                            sendChange={changeValue}
                        />

                        <InputTextarea
                            label="notatka"
                            name="notes"
                            placeholder={sgroup.notes === "" ? "Tu wpisz notatkę." : sgroup.notes}
                            object={sgroup}
                            url={SET_SGROUP_NOTES_URL}
                            sendChange={changeValue}
                        />


                        <div className="shadow listed-attribute">
                            <div className="head-txt">OSTATNI POMIAR</div>
                            <div className="position-cent">
                                <div className="txt-violet txt-semibold object-container">
                                TU BĘDĄ JAKIEŚ DANE

                                </div>
                            </div>
                        </div>

                        {/* --- edit assigned --- */}
                        <div className="shadow no-contact centered pad-bot-15px">
                            <div className="head-txt ">CZUJNIKI ({sgroup.assigned.length})</div>
                            <div className="position-cent">
                                <div className="object-container-grid">
                                    <div className="edit-objs-btn centered">
                                        <Link to={`/sgroups/${id}/edit`}>
                                            <div
                                                className="btn btn-color"
                                            >
                                                edytuj
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="object-container txt-violet txt-semibold">
                                        {sgroup.assigned.length === 0
                                            ? <div className="centered">nie przypisano żadnych czujników</div>
                                            : <ListObjects
                                                list={assignedObjs}
                                                objectRenderer={sensorObjectRenderer}
                                            />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SGroupDetails;