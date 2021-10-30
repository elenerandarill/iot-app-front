import React from 'react';
import {ButtonFunc, ButtonLink} from "../../buttons";
import {ROUTE_TMEMBER_DETAILS, ROUTE_TMEMBER_LIST} from "../../../iotConfig";
import {useHistory, useParams} from "react-router-dom";
import {remMember} from "../../../FakeFrontend/backendMemberConnector";
import UserViews from "../userViews";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";

const RemoveTeamMember = () => {
    const {id} = useParams();
    let history = useHistory();

    const handleSend = () => {
        remMember(id)
            .then(() => history.push(ROUTE_TMEMBER_LIST))
            .catch(error => handleUnauthorizedException(error, history))
    }

    return (
        <UserViews>
            <div className="main">
                <div className="buttons-container">
                    <ButtonLink
                        text="Anuluj"
                        link={ROUTE_TMEMBER_DETAILS(id)}
                    />
                </div>

                <div className="content-3x">
                    <div className="content-srodek">

                        <div className="headline-color">
                            Usunięcie osoby z zespołu
                        </div>
                        <div className="white-space top-contact">

                            <div className="shadow no-contact centered">
                                <div className="head-txt">
                                    Kliknięcie w&nbsp;"usuń" spowoduje odłączenie użytkownika od&nbsp;tego zespołu.
                                    Nie&nbsp;spowoduje to&nbsp;skasowania użytkownika.
                                </div>

                            </div>
                            <div className="object-container">
                                <ButtonFunc
                                    text="usuń"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleSend()
                                    }}
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </UserViews>
    )
};

export default RemoveTeamMember;