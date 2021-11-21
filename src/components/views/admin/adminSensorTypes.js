import React, {useEffect, useState} from 'react';
import AdminSensorType from "./adminSensorType";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {delSETYPE, fetchSETYPE, newSETYPE} from "../../../FakeFrontend/backendAdminConnector";
import {useHistory} from "react-router-dom";
import SensorType from "../../../FakeBackend/SensorType";

const AdminSensorTypes = ({alertMsg}) => {
    const [seTypes, setSeTypes] = useState(
        /** @type {SensorType[]} */undefined)
    const [newStName, setNewStName] = useState(
        /** @type {string} */ '')
    const [newStMan, setNewStMan] = useState(
        /** @type {string} */ '')
    const history = useHistory()

    useEffect(() => {
        fetchSETYPE()
            .then(setSeTypes)
            .catch(error => handleUnauthorizedException(error, history))
    }, [])

    const onAdd = () => {
        if(!newStName || !newStMan) {
            alertMsg('admin__msg--error', 'Należy wypełnić oba pola.')
        } else {
            newSETYPE(newStName, newStMan)
                .then((id) => {
                    setSeTypes([...seTypes, new SensorType(id, newStName, newStMan)])
                    alertMsg('admin__msg--success', 'Zapisano.')
                    setNewStName('')
                    setNewStMan('')
                })
                .catch(error => handleUnauthorizedException(error, history))
        }
    }

    const onRemove = (id) => {
        delSETYPE(id)
            .then(() => {
                setSeTypes([...seTypes].filter(o => o.STYID !== id))
                alertMsg('admin__msg--success', 'Usunięto.')
            })
            .catch(error => handleUnauthorizedException(error, history))
            .catch(error => alertMsg('admin__msg--error', `Wystąpił błąd: ${error.message}`))
    }

    if(!seTypes){
        return <div>Pobieram dane...</div>
    }
    return (
        <table>
            <thead>
                <tr>
                    <th> </th>
                    <th>STYID</th>
                    <th>STNAME</th>
                    <th>STMAN</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <button onClick={onAdd}>Dodaj</button>
                    </td>
                    <td> </td>
                    <td>
                        <input type="text" value={newStName}
                               onChange={e => setNewStName(e.target.value)}/>
                    </td>
                    <td>
                        <input type="text" value={newStMan}
                               onChange={e => setNewStMan(e.target.value)}/>
                    </td>
                </tr>
                {seTypes.map(seType =>
                    <AdminSensorType
                        key={seType.STYID}
                        seType={seType}
                        alertMsg={alertMsg}
                        onRemove={onRemove}
                    />
                )}
            </tbody>
        </table>
    );
};

export default AdminSensorTypes;