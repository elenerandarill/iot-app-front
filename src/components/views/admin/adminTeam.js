import React, {useState} from 'react';
import {
    changeValue,
    handleUnauthorizedException
} from "../../../FakeFrontend/backendConnector";
import {URL_TEAM_SET} from "../../../iotConfig";
import {useHistory} from "react-router-dom";

/**
 * @param team {Team}
 * @param alertMsg {function(status: string, msg: string)}
 * @return {JSX.Element}
 * @constructor
 */
const AdminTeam = ({team, alertMsg}) => {
    const [tname, setTname] = useState(team.name)
    const [towner, setTowner] = useState(team.owner)
    const history = useHistory()

    const sendSingle = async (propName, valueOrg, valueNew) => {
        if(valueOrg !== valueNew) {
            await changeValue(URL_TEAM_SET, "UGRID", team.id, propName, valueNew)
        }
    }

    const send = async () => {
        Promise.all([
            sendSingle("UGNAME", team.name, tname),
            sendSingle("UGOWN", team.owner, towner)
        ])
            .then(() => alertMsg('admin__msg--success', 'Zapisano.'))
            .catch(error => handleUnauthorizedException(error, history))
            .catch(error => alertMsg('admin__msg--error', `Wystąpił błąd: ${error.message}`))
    }

    return (
        <tr>
            <td>
                <button onClick={send}>Zapisz</button>
            </td>
            <td>
                {team.id}
            </td>
            <td>
                <input type="text" value={tname}
                       onChange={e => setTname(e.target.value)}/>
            </td>
            <td>
                <input type="number" value={towner}
                       onChange={e => setTowner(e.target.valueAsNumber)}/>
            </td>
        </tr>
    );
};

export default AdminTeam;