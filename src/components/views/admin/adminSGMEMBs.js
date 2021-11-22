import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {fetchSGMEMB} from "../../../FakeFrontend/backendAdminConnector";
import {SGMEMB} from "../../../FakeBackend/SGMEMB";
import {addSgroupMemb, remSgroupMemb} from "../../../FakeFrontend/backendSgroupConnector";
import AdminSGMEMB from "./adminSGMEMB";

/**
 * @param alertMsg {function(status: string, msg: string)}
 * @return {JSX.Element}
 * @constructor
 */
const AdminSGMEMBs = ({alertMsg}) => {
    const [sgMembs, setSgMembs] = useState(
        /** @type {SGMEMB[]} */undefined)
    const [newSgmGid, setNewSgmGid] = useState(
        /** @type {number} */ 0)
    const [newSgmSid, setNewSgmSid] = useState(
        /** @type {number} */ 0)
    const history = useHistory()

    useEffect(() => {
        fetchSGMEMB()
            .then(setSgMembs)
            .catch(error => handleUnauthorizedException(error, history))
    }, [])

    const addNewPair = () => {
        if (!newSgmGid || !newSgmSid) {
            alertMsg('admin__msg--error', "Należy wypełnić oba pola.")
        } else {
            addSgroupMemb(newSgmGid, newSgmSid)
                .then(() => {
                    setSgMembs([...sgMembs, new SGMEMB(newSgmGid, newSgmSid)])
                    alertMsg('admin__msg--success', 'Zapisano.')
                })
                .catch(error => handleUnauthorizedException(error, history))
                .catch(error => alertMsg('admin__msg--error', `Wystąpił błąd: ${error.message}`))
        }
        setNewSgmGid(0)
        setNewSgmSid(0)
    }

    const removePair = (pair) => {
        remSgroupMemb(pair.SGMGID, pair.SGMSID)
            .then(() => {
                setSgMembs([...sgMembs].filter(o => o !== pair))
                alertMsg('admin__msg--success', 'Usunięto.')
            })
            .catch(error => handleUnauthorizedException(error, history))
            .catch(error => alertMsg('admin__msg--error', `Wystąpił błąd: ${error.message}`))
    }


    if (!sgMembs) {
        return <div> Pobieram dane...</div>
    }
    return (
        <table>
            <thead>
                <tr>
                    <th> </th>
                    <th>UGMGID</th>
                    <th>UGMUID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <button onClick={addNewPair}>Dodaj</button>
                    </td>
                    <td>
                        <input type="number" value={newSgmGid}
                               onChange={e => setNewSgmGid(e.target.valueAsNumber)}/>
                    </td>
                    <td>
                        <input type="number" value={newSgmSid}
                               onChange={e => setNewSgmSid(e.target.valueAsNumber)}/>
                    </td>
                </tr>
                {sgMembs.map(sgMemb =>
                    <AdminSGMEMB
                        key={`${sgMemb.SGMGID}_${sgMemb.SGMSID}`}
                        sgMemb={sgMemb}
                        remove={removePair}/>
                )}
            </tbody>
        </table>
    )
};

export default AdminSGMEMBs;