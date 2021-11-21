import React, {useEffect, useState} from 'react';
import {ButtonLink} from "../../buttons";
import {ROUTE_TEAMS_LIST, ROUTE_TEAM_NEW, ROUTE_TEAM_DETAILS} from "../../../iotConfig";
import ListObjects from "../../listObjects";
import UserViews from "../userViews";
import {Link, useHistory} from "react-router-dom";
import {fetchTeams} from "../../../FakeFrontend/backendMemberConnector";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";


/**
 * @param team {Team}
 * @returns {JSX.Element}
 */
export const teamObjectRenderer = (team) => {
    return (
        <Link
            key={team.id}
            to={ROUTE_TEAM_DETAILS(team.id)}
        >
            <div className={"object shadow" + (team.is_new ? " mark-as-new" : "")}>
                <div>
                    <div className="txt-semibold">{team.name}</div>
                </div>
            </div>
        </Link>
    )
}


const Teams = () => {
    const [teams, setTeams] = useState([]);
    const history = useHistory()

    // zaraz po zaladowaniu strony pobierz obiekty z backendu
    useEffect(() => {
        fetchTeams(1)
            .then(setTeams)
            .catch(error => handleUnauthorizedException(error, history))
    }, [])

    return (
        <UserViews>
            <div className="main">
                <div className="buttons-container">
                    <ButtonLink
                        text="zespół"
                        add={true}
                        link={ROUTE_TEAM_NEW}
                    />
                </div>

                <div className="content-3x">
                    <div className="content-srodek">

                        <div className="headline-color">Zespoły</div>
                        <div className="white-space top-contact">
                            {teams.length === 0
                                ? <div className="centered">nie utworzono żadnych zespołów</div>
                                : <ListObjects
                                    list={teams}
                                    objectRenderer={teamObjectRenderer}
                                />}
                        </div>

                    </div>
                </div>

            </div>
        </UserViews>
    );
};

export default Teams;