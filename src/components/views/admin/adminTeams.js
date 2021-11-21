import React, {useEffect, useState} from 'react';
import {fetchTeams} from "../../../FakeFrontend/backendMemberConnector";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {useHistory} from "react-router-dom";
import AdminTeam from "./adminTeam";


const AdminTeams = ({alertMsg}) => {
    const [teams, setTeams] = useState(
        /** @type {Team[]} */undefined)
    const history = useHistory()

    useEffect(() => {
        fetchTeams()
            .then(setTeams)
            .catch(error => handleUnauthorizedException(error, history))
    }, [])


    if (!teams) {
        return (<div> Pobieram dane...</div>)
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>ZAPISZ</th>
                    <th>UGRID</th>
                    <th>UGNAME</th>
                    <th>UGOWN</th>
                </tr>
            </thead>
            <tbody>
                {teams.map(team =>
                    <AdminTeam key={team.id} team={team} alertMsg={alertMsg}/>
                )}
            </tbody>
        </table>
    )
};

export default AdminTeams;