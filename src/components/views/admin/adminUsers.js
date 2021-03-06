import React, {useEffect, useState} from 'react';
import {fetchUsers} from "../../../FakeFrontend/backendMemberConnector";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {useHistory} from "react-router-dom";
import AdminUser from "./adminUser";


const AdminUsers = ({alertMsg}) => {
    const [users, setUsers] = useState(
        /** @type {Member[]} */undefined)
    const history = useHistory()

    useEffect(() => {
        fetchUsers()
            .then(setUsers)
            .catch(error => handleUnauthorizedException(error, history))
    }, [])


    if (!users) {
        return (<div> Pobieram dane...</div>)
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>ZAPISZ</th>
                    <th>USRID</th>
                    <th>UFNAME</th>
                    <th>ULNAME</th>
                    <th>UEMAIL</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user =>
                    <AdminUser key={user.id} user={user} alertMsg={alertMsg}/>
                )}
            </tbody>
        </table>
    )
};

export default AdminUsers;