import React from 'react';
import {ButtonFunc, ButtonLink} from "../../buttons";
import {ROUTE_TEAM_DETAILS, ROUTE_TEAMS_LIST} from "../../../iotConfig";
import {useHistory, useParams} from "react-router-dom";
import UserViews from "../userViews";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {delTeam} from "../../../FakeFrontend/backendMemberConnector";

const DeleteTeam = () => {
    const {id} = useParams()
    let history = useHistory();

    const handleSend = () => {
        delTeam(id)
            .then(() => history.push(ROUTE_TEAMS_LIST))
            .catch(error => handleUnauthorizedException(error, history))

    }

    return (
        <UserViews>
            <div className="main">
                <div className="buttons-container">
                    <ButtonLink
                        text="Anuluj"
                        link={ROUTE_TEAM_DETAILS(id)}
                    />
                </div>

                <div className="content-3x">
                    <div className="content-srodek">

                        <div className="headline-color">
                            Trwałe zlikwidowanie zespołu.
                        </div>
                        <div className="white-space top-contact">

                            <div className="shadow no-contact centered">
                                <div className="head-txt">
                                    Kliknięcie w&nbsp;"usuń" spowoduje trwałe usunięcie tego zespołu,
                                    a&nbsp;wszystkie należące do&nbsp;niego osoby, zostaną z&nbsp;niego wypisane.
                                </div>

                            </div>
                            <div className="object-container">
                                <ButtonFunc
                                    text="usuń"
                                    onClick={handleSend}
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </UserViews>
    );
};

export default DeleteTeam;