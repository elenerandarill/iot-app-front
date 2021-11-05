import React, {useEffect, useState} from 'react';
import UserViews from "../userViews";
import {useHistory, useParams} from "react-router-dom";
import EditAssigned from "../../editAssigned";
import {
    fetchTeam,
    fetchTeamMembers,
    fetchUsers, addMember, remMember
} from "../../../FakeFrontend/backendMemberConnector";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {ROUTE_TEAM_DETAILS} from "../../../iotConfig";
import {findDifferenceInLists} from "../../utils";

const EditTeam = () => {
    const [team, setTeam] = useState(undefined)
    const [membAssigned, setMembAssigned] = useState(undefined)
    const [members, setMembers] = useState(undefined)
    const history = useHistory()
    const {id} = useParams()


    useEffect(() => {
        fetchTeam(id)
            .then(setTeam)
            .catch(error => handleUnauthorizedException(error, history))

        fetchUsers()
            .then(setMembers)
            .catch(error => handleUnauthorizedException(error, history))

        fetchTeamMembers(id)
            .then(setMembAssigned)
            .catch(error => handleUnauthorizedException(error, history))

    }, [id])

    const sendChangeRequest = async (selected) => {
        const [addedList, removedList] = findDifferenceInLists(membAssigned, selected)
        let promiseList = []

        for (const member of addedList) {
            promiseList.push(addMember(member.id, id)
                .then()
                .catch(error => handleUnauthorizedException(error, history))
            )
        }

        for (const member of removedList) {
            promiseList.push(remMember(member.id, id)
                .then()
                .catch(error => handleUnauthorizedException(error, history))
            )
        }

        await Promise.all(promiseList)
        console.log(">>> Team members changes finished.")
        history.push(ROUTE_TEAM_DETAILS(id))
    }


    if (!team || !members || !membAssigned) {
        return (
            <UserViews>
                <div className="head-txt">
                    Pobieranie danych. Proszę czekać.
                </div>
            </UserViews>
        )
    } else {
        return (
            <UserViews>
                <EditAssigned
                    headline="edycja członków zespołu - "
                    description="Zaznacz lub odznacz osoby"
                    linkTo="team"
                    object={team}
                    assigned={membAssigned}
                    availableChoices={members}
                    handleSend={sendChangeRequest}
                />
            </UserViews>
        )
    }
};

export default EditTeam;