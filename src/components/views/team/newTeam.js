import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {ROUTE_TEAM_DETAILS, ROUTE_TEAMS_LIST, ROUTE_TMEMBER_DETAILS, ROUTE_TMEMBER_LIST} from "../../../iotConfig";
import {ButtonFunc, ButtonLink} from "../../buttons";
import {newTeam} from "../../../FakeFrontend/backendMemberConnector";
import UserViews from "../userViews";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";

const NewTeam = () => {
    const [teamName, setTeamName] = useState("");
    let history = useHistory();

    const handleSend = () => {
        if(teamName.length > 0) {
            newTeam(teamName)
                .then((id) => history.push(ROUTE_TEAM_DETAILS(id)))
                .catch(error => handleUnauthorizedException(error, history))
        } else {
            alert("Nazwa zespołu musi być dłuższa niż 0 znaków.")
        }
    }

    return (
        <UserViews>
            <div className="main">
                <div className="buttons-container">
                    <ButtonLink
                        text="powrót"
                        link={ROUTE_TEAMS_LIST}
                    />
                </div>

                <div className="content-3x">
                    <div className="content-srodek">

                        <div className="headline-color">
                            Tworzenie nowego zespołu
                        </div>
                        <div className="white-space top-contact">

                            <div className="shadow no-contact centered">
                                <div className="head-txt">nazwa</div>
                                <div className="position-cent">
                                    <input
                                        type="text"
                                        placeholder="nazwa grupy"
                                        className="input"
                                        value={teamName}
                                        onChange={(e) => setTeamName(e.target.value)}
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

export default NewTeam;