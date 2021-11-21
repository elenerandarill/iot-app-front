import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {fetchSgroups} from "../../../FakeFrontend/backendSgroupConnector";
import AdminSgroup from "./adminSgroup";

const AdminSgroups = ({alertMsg}) => {
    const [sgroups, setSgroups] = useState(
        /** @type {GroupOfSensors[]} */undefined)
    const history = useHistory()

    useEffect(() => {
        fetchSgroups()
            .then(setSgroups)
            .catch(error => handleUnauthorizedException(error, history))
    }, [])


    if (!sgroups) {
        return (<div> Pobieram dane...</div>)
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>ZAPISZ</th>
                    <th>SGRID</th>
                    <th>SGOWN</th>
                    <th>SGNAME</th>
                    <th>SGDESC</th>
                </tr>
            </thead>
            <tbody>
                {sgroups.map(sgroup =>
                    <AdminSgroup key={sgroup.id} sgroup={sgroup} alertMsg={alertMsg}/>
                )}
            </tbody>
        </table>
    )
};

export default AdminSgroups;