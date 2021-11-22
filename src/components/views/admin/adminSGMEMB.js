import React from 'react';

/**
 * @param sgMemb {SGMEMB}
 * @param remove {function(sgMemb: Object)}
 * @return {JSX.Element}
 * @constructor
 */
const AdminSGMEMB = ({sgMemb, remove}) => {

    return (
        <tr>
            <td>
                <button onClick={() => remove(sgMemb)}>Usuń</button>
            </td>
            <td>
                {sgMemb.SGMGID}
            </td>
            <td>
                {sgMemb.SGMSID}
            </td>
        </tr>
    );
};

export default AdminSGMEMB;