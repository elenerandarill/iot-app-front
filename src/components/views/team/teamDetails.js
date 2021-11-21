import ListObjects from "../../listObjects";
import {Link, useHistory, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {
    ROUTE_SENSOR_DETAILS,
    ROUTE_SGROUP_DETAILS,
    ROUTE_TMEMBER_DETAILS,
    ROUTE_TEAMS_LIST,
    URL_TEAM_SET,
    ROUTE_TEAM_EDIT, ROUTE_TEAM_DEL
} from "../../../iotConfig";
import {ButtonLink} from "../../buttons";
import {fetchTeamMembers, fetchTeam} from "../../../FakeFrontend/backendMemberConnector";
import UserViews from "../userViews";
import {changeValue, handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {InputString} from "../../attributes";
import {Team} from "../../../FakeBackend/team";

/**
 * @param member {Member}
 * @returns {JSX.Element}
 */
export const memberObjectRenderer = (member) => {
    console.log("memberObjectRenderer dostaje: ", member)
    return (
        <Link
            key={member.id}
            to={ROUTE_TMEMBER_DETAILS(member.id)}
        >
            <div className={"object shadow" + (member.is_new ? " mark-as-new" : "")}>
                <div className="txt-semibold">{member.getDisplayName()}</div>
            </div>
        </Link>
    )
}

export const permRenderer = (perm) => {
    // console.log("permRenderer dostaje: ", perm)
    return (
        <Link
            key={perm.type + perm.id}
            to={perm.type === "SENSOR"
                ? ROUTE_SENSOR_DETAILS(perm.id)
                : ROUTE_SGROUP_DETAILS(perm.id)}
        >
            <div className={"object shadow"}>
                <div className="txt-semibold">{perm.getDisplayName()}</div>
            </div>
        </Link>
    )
}

const TeamDetails = () => {
    const [team, setTeam] = useState(
        /** @type {Team} */ new Team(undefined, undefined, undefined));
    const [members, setMembers] = useState(
        /** @type {Member[]} */[])
    const history = useHistory()
    const {id} = useParams()

    // zaraz po zaladowaniu strony pobierz obiekty z backendu
    useEffect(() => {
        fetchTeam(id)
            .then(setTeam)
            .catch(error => handleUnauthorizedException(error, history))

        fetchTeamMembers(id)
            .then(setMembers)
            .catch(error => handleUnauthorizedException(error, history))
    }, [])


    if (!team.name) {
        return (
            <UserViews>
                <div className="main">
                    <div className="position-cent centered">
                        <div className="head-txt">
                            nie znaleziono takiego zespołu
                        </div>
                    </div>
                </div>
            </UserViews>
        )
    }

    return (
        <UserViews>
            <div className="main">
                <div className="buttons-container">
                    <ButtonLink text={"powrót do listy"} link={ROUTE_TEAMS_LIST}/>
                    <ButtonLink
                        text="usuń"
                        link={ROUTE_TEAM_DEL(id)}
                    />
                </div>

                <div className="content-3x">
                    <div className="content-srodek">

                        <div className="headline-color">zespół</div>
                        <div className="white-space top-contact">
                            <InputString
                                label="nazwa"
                                placeholder={team.name}
                                sendChange={(newValue) => changeValue(
                                    URL_TEAM_SET, "UGRID", team.id, "UGNAME", newValue)}
                            />

                            <div className="shadow no-contact centered pad-bot-15px">
                                <div className="head-txt">członkowie</div>
                                <div className="position-cent">
                                    <div className="object-container-grid">

                                    <div className="edit-objs-btn centered">
                                        <ButtonLink
                                            text="edytuj"
                                            link={ROUTE_TEAM_EDIT(id)}
                                        />
                                    </div>

                                    <div className="object-container txt-violet txt-semibold">
                                        {members.length === 0
                                            ? <div className="centered">zespół nie ma członków</div>
                                            : <ListObjects
                                                list={members}
                                                objectRenderer={memberObjectRenderer}
                                            />}
                                    </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </UserViews>
    )
}

export default TeamDetails;