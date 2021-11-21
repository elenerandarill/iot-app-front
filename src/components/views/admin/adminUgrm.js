import React from 'react';
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {useHistory} from "react-router-dom";
import {remMember} from "../../../FakeFrontend/backendMemberConnector";

/**
 * @param urgm {UGRM}
 * @param alertMsg
 * @param removePair
 * @return {JSX.Element}
 * @constructor
 */
const AdminUgrm = ({urgm, alertMsg, removePair}) => {
    const history = useHistory()

    const remove = () => {
        remMember(urgm.UGMUID, urgm.UGMGID)
            .then(() => {
                removePair(urgm)
                alertMsg('admin__msg--success', 'Usunięto.')
            })
            .catch(error => handleUnauthorizedException(error, history))
            .catch(error => alertMsg('admin__msg--error', `Wystąpił błąd: ${error.message}`))
    }

    return (
        <tr>
            <td>
                <button onClick={remove}>Usuń</button>
            </td>
            <td>
                {urgm.UGMGID}
            </td>
            <td>
                {urgm.UGMUID}
            </td>
        </tr>
    );
};

export default AdminUgrm;