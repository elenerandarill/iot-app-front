import React, {useState} from 'react';
import {changeValue, handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {URL_USER_SET} from "../../../iotConfig";
import {useHistory} from "react-router-dom";

/**
 * @param user {Member}
 * @param alertMsg {function(status: string, msg: string)}
 * @return {JSX.Element}
 * @constructor
 */
const AdminUser = ({user, alertMsg}) => {
    const [fname, setFname] = useState(user.fname)
    const [lname, setLname] = useState(user.lname)
    const [email, setEmail] = useState(user.email)
    // TODO zmiana hasla??
    const history = useHistory()

    const sendSingle = async (propName, valueOrg, valueNew) => {
        if(valueOrg !== valueNew) {
            await changeValue(URL_USER_SET, "USRID", user.id, propName, valueNew)
        }
    }

    const send = async () => {
        Promise.all([
            sendSingle("UFNAME", user.fname, fname),
            sendSingle("ULNAME", user.lname, lname),
            sendSingle("UEMAIL", user.email, email)
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
                {user.id}
            </td>
            <td>
                <input type="text" value={fname}
                       onChange={e => setFname(e.target.value)}/>
            </td>
            <td>
                <input type="text" value={lname}
                    onChange={e => setLname(e.target.value)}/>
            </td>
            <td>
                <input type="email" value={email}
                    onChange={e => setEmail(e.target.value)}/>
            </td>
            {/*<td>*/}
            {/*    <input*/}
            {/*        type="password"*/}
            {/*        placeholder="password"*/}
            {/*        name="pass"*/}
            {/*    />*/}
            {/*</td>*/}
        </tr>
    );
};

export default AdminUser;