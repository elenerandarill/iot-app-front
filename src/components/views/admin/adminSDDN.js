import React, {useState} from 'react';
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {useHistory} from "react-router-dom";
import {delSDDN, setSDDN} from "../../../FakeFrontend/backendAdminConnector";

/**
 *
 * @param sddn {SDDN}
 * @param alertMsg {function(status: string, msg: string)}
 * @return {JSX.Element}
 * @constructor
 */
const AdminSDDN = ({sddn, alertMsg, onDelete}) => {
    const [sddPn, setSddPn] = useState(
        /** @type {string} */ sddn.SDDPN)
    const [sddPa, setSddPa] = useState(
        /** @type {string} */ sddn.SDDPA)
    const history = useHistory()

    const onSave = () => {
        if (sddPn === sddn.SDDPN && sddPa === sddn.SDDPA) {
            alertMsg('admin__msg--error', `Wartości pól się nie zmieniły.`)
        } else {
        setSDDN(sddn.SDDSID, sddPn, sddPa)
            .then(() => {
                alertMsg('admin__msg--success', 'Zapisano.')
            })
            .catch(error => handleUnauthorizedException(error, history))
            .catch(error =>
                alertMsg('admin__msg--error', `Wystąpił błąd: ${error.message}`)
            )
        }
    }

return (
    <tr>
        <td>
            <button onClick={onSave}>Zapisz</button>
        </td>
        <td>{sddn.SDDSID}</td>
        <td>
            <input type="text" value={sddPn}
                   onChange={e => setSddPn(e.target.value)}/>
        </td>
        <td>
            <input type="text" value={sddPa}
                   onChange={e => setSddPa(e.target.value)}/>
        </td>
        <td><button onClick={() => onDelete(sddn.SDDSID)}>Usuń</button></td>
    </tr>
)
};

export default AdminSDDN;