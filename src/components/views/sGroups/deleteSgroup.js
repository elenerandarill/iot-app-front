import React from 'react';
import {ButtonFunc, ButtonLink} from "../../buttons";
import {ROUTE_SGROUP_DETAILS, ROUTE_SGROUP_LIST} from "../../../iotConfig";
import {useHistory, useParams} from "react-router-dom";
import {delSgroup} from "../../../FakeFrontend/backendSgroupConnector";
import UserViews from "../userViews";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";

const DeleteSGroup = () => {
    const {id} = useParams()
    let history = useHistory();

    const handleSend = () => {
        delSgroup(id)
            .then(() => history.push(ROUTE_SGROUP_LIST))
            .catch(error => handleUnauthorizedException(error, history))
    }


    return (
        <UserViews>
            <div className="main">
                <div className="buttons-container">
                    <ButtonLink
                        text="Anuluj"
                        link={ROUTE_SGROUP_DETAILS(id)}
                    />
                </div>

                <div className="content-3x">
                    <div className="content-srodek">

                        <div className="headline-color">
                            Trwałe zlikwidowanie grupy.
                        </div>
                        <div className="white-space top-contact">

                            <div className="shadow no-contact centered">
                                <div className="head-txt">
                                    Kliknięcie w&nbsp;"usuń" spowoduje trwałe usunięcie tej grupy,
                                    a&nbsp;wszystkie należące do&nbsp;niej czujniki, zostaną z&nbsp;niej wypisane.
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

export default DeleteSGroup;