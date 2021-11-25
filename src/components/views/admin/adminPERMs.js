import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {delPERM, fetchPERM, newPERM} from "../../../FakeFrontend/backendAdminConnector";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import AdminPERM from "./adminPerm";
import PERM from "../../../FakeBackend/PERM";

/**
 *
 * @param alertMsg {function(status: string, msg: string)}
 * @return {JSX.Element}
 * @constructor
 */
const AdminPERMs = ({alertMsg}) => {
    const [perms, setPerms] = useState(
        /** @type {PERM[]} */undefined)
    const [newPeOid, setNewPeOid] = useState(
        /** @type {number} */ 0)
    const [newPeObj, setNewPeObj] = useState(
        /** @type {number} */ 0)
    const [newPeOidt, setNewPeOidt] = useState(
        /** @type {string} */ '')
    const [newPeObjt, setNewPeObjt] = useState(
        /** @type {string} */ '')
    const [list, setList] = useState(/** @type {boolean} */ false)
    const [get, setGet] = useState(/** @type {boolean} */ false)
    const [set, setSet] = useState(/** @type {boolean} */ false)
    const [newPerm, setNewPerm] = useState(/** @type {boolean} */ false)
    const [del, setDel] = useState(/** @type {boolean} */ false)
    const [add, setAdd] = useState(/** @type {boolean} */ false)
    const [rem, setRem] = useState(/** @type {boolean} */ false)
    const history = useHistory()

    useEffect(() => {
        fetchPERM()
            .then(setPerms)
            .catch(error => handleUnauthorizedException(error, history))
    }, [])

    const onRemove = (perm) => {
        const decision = window.confirm("Czy na pewno chcesz usunąć?")
        if(!decision){return}
        delPERM(perm)
            .then(() => {
                setPerms([...perms].filter(o => o !== perm))
                alertMsg('admin__msg--success', 'Usunięto.')
            })
            .catch(error => handleUnauthorizedException(error, history))
            .catch(error => alertMsg('admin__msg--error', `Wystąpił błąd: ${error.message}`))
    }

    const prepareMask = () => {
        let maskList = []
        if(list){maskList.push("list")}
        if(get){maskList.push("get")}
        if(set){maskList.push("set")}
        if(newPerm){maskList.push("new")}
        if(del){maskList.push("del")}
        if(add){maskList.push("add")}
        if(rem){maskList.push("rem")}
        console.log("list for new PEMASK: ", maskList)
        return maskList
    }

    const addNew = () => {
        const perm = new PERM(newPeOid, newPeObj, newPeOidt, newPeObjt, prepareMask())
        newPERM(perm)
            .then(() => {
                setPerms([...perms, perm])
                alertMsg('admin__msg--success', 'Zapisano.')
            })
            .catch(error => handleUnauthorizedException(error, history))
            .catch(error => alertMsg('admin__msg--error', `Wystąpił błąd: ${error.message}`))
    }


    if(!perms){
        return <div>Pobieram dane...</div>
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>PEOID</th>
                    <th>PEOBJ</th>
                    <th>PEOIDT</th>
                    <th>PEOBJT</th>
                    <th> </th>
                    <th>PEMASK: list</th>
                    <th>PEMASK: get</th>
                    <th>PEMASK: set</th>
                    <th>PEMASK: new</th>
                    <th>PEMASK: del</th>
                    <th>PEMASK: add</th>
                    <th>PEMASK: rem</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="number" value={newPeOid}
                               onChange={e => setNewPeOid(e.target.valueAsNumber)}/>
                    </td>
                    <td>
                        <input type="number" value={newPeObj}
                               onChange={e => setNewPeObj(e.target.valueAsNumber)}/>
                    </td>
                    <td>
                        <select value={newPeOidt} onChange={e => setNewPeOidt(e.target.value)}>
                            <option value="USER">USER</option>
                            <option value="SENSOR">SENSOR</option>
                            <option value="SGROUP">SGROUP</option>
                        </select>
                    </td>
                    <td>
                        <select value={newPeObjt} onChange={e => setNewPeObjt(e.target.value)}>
                            <option value="USER">USER</option>
                            <option value="SENSOR">SENSOR</option>
                            <option value="SGROUP">SGROUP</option>
                        </select>
                    </td>

                    <td>
                        <button onClick={addNew}>Dodaj</button>
                    </td>

                    <td>
                        <input type="checkbox" value={list}
                               onChange={() => setList(!list)}/>
                    </td>
                    <td>
                        <input type="checkbox" value={get}
                               onChange={() => setGet(!get)}/>
                    </td>
                    <td>
                        <input type="checkbox" value={set}
                               onChange={() => setSet(!set)}/>
                    </td>
                    <td>
                        <input type="checkbox" value={newPerm}
                               onChange={() => setNewPerm(!newPerm)}/>
                    </td>
                    <td>
                        <input type="checkbox" value={del}
                               onChange={() => setDel(!del)}/>
                    </td>
                    <td>
                        <input type="checkbox" value={add}
                               onChange={() => setAdd(!add)}/>
                    </td>
                    <td>
                        <input type="checkbox" value={rem}
                               onChange={() => setRem(!rem)}/>
                    </td>
                    <td> </td>
                </tr>

                {perms.map(perm =>
                    <AdminPERM
                        key={`${perm.PEOID}${perm.PEOIDT}_${perm.PEOBJ}${perm.PEOBJT}`}
                        perm={perm}
                        remove={onRemove}
                        alertMsg={alertMsg}
                    />
                )}
            </tbody>
        </table>
    )
};

export default AdminPERMs;