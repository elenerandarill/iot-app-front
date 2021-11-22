import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {delSDDN, fetchSDDN} from "../../../FakeFrontend/backendAdminConnector";
import AdminSDDN from "./adminSDDN";


const AdminSDDNs = ({alertMsg}) => {
    const [sddns, setSddns] = useState(
        /** @type {SDDN[]} */undefined)
    const history = useHistory()


    useEffect(() => {
        fetchSDDN()
            .then(setSddns)
            .catch(error => handleUnauthorizedException(error, history))
    }, [])

    // Adding???

    const onDelete = (id) => {
        const decision = window.confirm("Czy na pewno chcesz usunąć?")
        if(!decision){return}
        delSDDN(id)
            .then(() => {
                setSddns([...sddns].filter(o => o.SDDSID !== id))
                alertMsg('admin__msg--success', 'Usunięto.')
            })
            .catch(error => handleUnauthorizedException(error, history))
            .catch(error =>
                alertMsg('admin__msg--error', `Wystąpił błąd: ${error.message}`)
            )
    }

    if (!sddns) {
        return <div> Pobieram dane...</div>
    }
    return (
        <table>
            <thead>
                <tr>
                    <th> </th>
                    <th>SDDSID</th>
                    <th>SDDPN</th>
                    <th>SDDPA</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                {sddns.map(sddn =>
                    <AdminSDDN
                        key={sddn.SDDSID}
                        sddn={sddn}
                        alertMsg={alertMsg}
                        onDelete={onDelete}
                        />
                )}
            </tbody>
        </table>
    )
};

export default AdminSDDNs;