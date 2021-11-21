import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {changeValue, handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {URL_SGROUP_SET} from "../../../iotConfig";

/**
 * @param sgroup {GroupOfSensors}
 * @param alertMsg {function(status: string, msg: string)}
 * @return {JSX.Element}
 * @constructor
 */
const AdminSgroup = ({sgroup, alertMsg}) => {
    const [sgowner, setSgowner] = useState(sgroup.owner)
    const [sgname, setSgname] = useState(sgroup.name)
    const [sgnotes, setSgnotes] = useState(sgroup.notes)
    const history = useHistory()


    const sendSingle = async (propName, valueOrg, valueNew) => {
        if(valueOrg !== valueNew) {
            await changeValue(URL_SGROUP_SET, "SGRID", sgroup.id, propName, valueNew)
        }
    }

    const send = async () => {
        Promise.all([
            sendSingle("SGOWN", sgroup.owner, sgowner),
            sendSingle("SGNAME", sgroup.name, sgname),
            sendSingle("SGDESC", sgroup.notes, sgnotes)
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
                {sgroup.id}
            </td>
            <td>
                <input type="number" value={sgowner}
                       onChange={e => setSgowner(e.target.valueAsNumber)}/>
            </td>
            <td>
                <input type="text" value={sgname}
                       onChange={e => setSgname(e.target.value)}/>
            </td>
            <td>
                <input type="text" value={sgnotes}
                       onChange={e => setSgnotes(e.target.value)}/>
            </td>
        </tr>
    )
};

export default AdminSgroup;