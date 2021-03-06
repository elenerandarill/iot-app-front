import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {ROUTE_TMEMBER_DETAILS, ROUTE_TMEMBER_LIST} from "../../../iotConfig";
import {ButtonFunc, ButtonLink} from "../../buttons";
import {addMember} from "../../../FakeFrontend/backendMemberConnector";
import UserViews from "../userViews";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";

const NewTeamMember = () => {
    const [uid, setUid] = useState("");
    let history = useHistory();

    const handleSend = () => {
        addMember(uid)
            .then(() => history.push(ROUTE_TMEMBER_DETAILS(uid)))
            .catch(error => handleUnauthorizedException(error, history))
    }

    return (
        <UserViews>
            <div className="main">
                <div className="buttons-container">
                    <ButtonLink
                        text="powrót"
                        link={ROUTE_TMEMBER_LIST}
                    />
                </div>

                <div className="content-3x">
                    <div className="content-srodek">

                        <div className="headline-color">
                            Dodawanie nowej osoby do zespołu
                        </div>
                        <div className="white-space top-contact">

                            <div className="shadow no-contact centered">
                                <div className="head-txt">ID</div>
                                <div className="position-cent">
                                    <input
                                        type="text"
                                        placeholder="id usera"
                                        className="input"
                                        value={uid}
                                        onChange={(e) => setUid(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="object-container">
                                <ButtonFunc
                                    text="utwórz"
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

export default NewTeamMember;