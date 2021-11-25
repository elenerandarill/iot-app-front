import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {removeFromList} from "../../utils";
import {setPEMASK} from "../../../FakeFrontend/backendAdminConnector";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";

/**
 *
 * @param perm {PERM}
 * @param remove {function(urgm: object)}}
 * @param alertMsg {function(status: string, msg: string)}}
 * @return {JSX.Element}
 * @constructor
 */
const AdminPERM = ({perm, remove, alertMsg}) => {
    const [peMask, setPeMask] = useState(perm.PEMASK)
    const permList = ["list", "get", "set", "new", "del", "add", "rem"]
    const history = useHistory()

    // console.log("peMask: ", peMask)

    // changes in PEMASK
    const savePemask = async () => {
        perm.PEMASK = peMask
        setPEMASK(perm)
            .then(() => alertMsg('admin__msg--success', 'Zapisano.'))
            .catch(error => handleUnauthorizedException(error, history))
            .catch(error => alertMsg('admin__msg--error', `Wystąpił błąd: ${error.message}`))
    }

    const isChecked = (permName) => {
        return peMask.includes(permName)
    }

    /**
     * @param e {ChangeEvent<HTMLInputElement>}
     */
    const toggleList = (e) => {
        const val = e.target.name
        if (peMask.includes(val)) {
            setPeMask(removeFromList(peMask, val))
        } else {
            setPeMask([...peMask, val])
        }
    }

    return (
        <tr>
            <td>{perm.PEOID}</td>
            <td>{perm.PEOBJ}</td>
            <td>{perm.PEOIDT}</td>
            <td>{perm.PEOBJT}</td>

            <td>
                <button onClick={savePemask}>Zapisz</button>
            </td>

            {permList.map(p =>
                <td key={p} className="mrg-r">
                    <input type="checkbox"
                           name={p}
                           checked={isChecked(p)}
                           onChange={toggleList}/>
                    <label>{p}</label>
                </td>
            )}

            <td>
                <button onClick={() => remove(perm)}>Usuń</button>
            </td>
        </tr>
    );
};

export default AdminPERM;