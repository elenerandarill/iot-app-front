import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ListObjects from "../../listObjects";
import {InputString, InputTextarea} from "../../attributes";
import {sensorObjectRenderer} from "../sensors/sensors";
import {ROUTE_SGROUP_DEL, ROUTE_SGROUP_EDIT, ROUTE_SGROUP_LIST, URL_SGROUP_SET, URL_USER_SET} from "../../../iotConfig";
import {fetchSgroup, getSgroupAssignedSensors} from "../../../FakeFrontend/backendSgroupConnector";
import {changeValue} from "../../../FakeFrontend/backendConnector";
import {ButtonFunc, ButtonLink} from "../../buttons";


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
                <ButtonLink
                    link={ROUTE_SGROUP_LIST}
                    text="powrót do listy"
                />
                <ButtonLink
                    link={ROUTE_SGROUP_DEL(id)}
                    text="usuń tę grupę"
                />
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        {sgroup.name}
                    </div>
                    <div className="white-space top-contact">
                        <InputString
                            label="nazwa"
                            placeholder={sgroup.name}
                            sendChange={(newValue) => changeValue(
                                URL_SGROUP_SET, "SGRID", sgroup.id, "SGNAME", newValue)}
                        />

                        <InputTextarea
                            label="notatka"
                            placeholder={sgroup.notes === "" ? "Tu wpisz notatkę." : sgroup.notes}
                            sendChange={(newValue) =>
                                changeValue(URL_SGROUP_SET, "SGRID", sgroup.id, "SGDESC", newValue)}
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
                            <div className="head-txt ">CZUJNIKI</div>
                            <div className="position-cent">
                                <div className="object-container-grid">
                                    <div className="edit-objs-btn centered">
                                        <ButtonLink
                                            text="edytuj"
                                            link={ROUTE_SGROUP_EDIT(id)}
                                        />
                                    </div>
                                    <div className="object-container txt-violet txt-semibold">
                                        {assignedObjs.length === 0
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