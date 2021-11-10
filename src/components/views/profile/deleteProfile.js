import React from 'react';
import {ButtonFunc, ButtonLink} from "../../buttons";
import {ROUTE_LOGIN, ROUTE_PROFILE} from "../../../iotConfig";
import {useHistory, useParams} from "react-router-dom";
import UserViews from "../userViews";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {delUser} from "../../../FakeFrontend/backendMemberConnector";

const DeleteProfile = () => {
    const {id} = useParams()
    let history = useHistory();

    const handleSend = () => {
        delUser(id)
            .then(() => history.push(ROUTE_LOGIN))
            .catch(error => handleUnauthorizedException(error, history))
    }


    return (
        <UserViews>
            <div className="main">
                <div className="buttons-container">
                    <ButtonLink
                        text="Anuluj"
                        link={ROUTE_PROFILE(id)}
                    />
                </div>

                <div className="content-3x">
                    <div className="content-srodek">

                        <div className="headline-color">
                            Trwałe zlikwidowanie profilu użytkownika.
                        </div>
                        <div className="white-space top-contact">

                            <div className="shadow no-contact centered">
                                <div className="head-txt">
                                    Kliknięcie w&nbsp;"usuń" spowoduje trwałe usunięcie tego użytkownika oraz&nbsp;jego&nbsp;profilu.
                                    Przywrócenie profilu będzie wymagało kontaku z&nbsp;IoT&nbsp;Solution.
                                </div>

                            </div>
                            <div className="object-container">
                                <ButtonFunc
                                    text="usuń"
                                    onClick={() => {
                                        handleSend()
                                    }}
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </UserViews>
    );
};

export default DeleteProfile;