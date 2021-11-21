import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {fetchUGRM} from "../../../FakeFrontend/backendAdminConnector";
import AdminUgrm from "./adminUgrm";
import {addMember} from "../../../FakeFrontend/backendMemberConnector";
import {UGRM} from "../../../FakeBackend/UGRM";

/**
 * @param alertMsg {function(status: string, msg: string)}
 * @return {JSX.Element}
 * @constructor
 */
const AdminURGMs = ({alertMsg}) => {
    const [ugrms, setUgrms] = useState(
        /** @type {UGRM[]} */undefined)
    const [newUgmGid, setNewUgmGid] = useState(
        /** @type {number} */ 0)
    const [newUgmUid, setNewUgmUid] = useState(
        /** @type {number} */ 0)
    const history = useHistory()

    useEffect(() => {
        fetchUGRM()
            .then(setUgrms)
            .catch(error => handleUnauthorizedException(error, history))
    }, [])

    const addPair = () => {
        setUgrms([...ugrms, new UGRM(newUgmGid, newUgmUid)])
    }

    const removePair = (pair) => {
        setUgrms([...ugrms]
            .filter(o => o !== pair)
        )
    }

    const onSend = () => {
        if (!newUgmGid || !newUgmUid) {
            alertMsg('admin__msg--error', "Należy wypełnić oba pola.")
        } else {
            addMember(newUgmUid, newUgmGid)
                .then(() => {
                    addPair()
                    alertMsg('admin__msg--success', 'Zapisano.')
                })
                .catch(error => handleUnauthorizedException(error, history))
                .catch(error => alertMsg('admin__msg--error', `Wystąpił błąd: ${error.message}`))
        }
        setNewUgmGid(0)
        setNewUgmUid(0)
    }


    if (!ugrms) {
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
                        <button onClick={onSend}>Dodaj</button>
                    </td>
                    <td>
                        <input type="number" value={newUgmGid}
                               onChange={e => setNewUgmGid(e.target.valueAsNumber)}/>
                    </td>
                    <td>
                        <input type="number" value={newUgmUid}
                               onChange={e => setNewUgmUid(e.target.valueAsNumber)}/>
                    </td>
                </tr>
                {ugrms.map(urgm =>
                    <AdminUgrm
                        key={`${urgm.UGMGID}_${urgm.UGMUID}`}
                        urgm={urgm}
                        alertMsg={alertMsg}
                        removePair={removePair}/>
                )}
            </tbody>
        </table>
    )
};

export default AdminURGMs;