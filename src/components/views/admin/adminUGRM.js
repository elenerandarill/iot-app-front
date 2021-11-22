import React from 'react';

/**
 * @param urgm {UGRM}
 * @param remove {function(urgm: object)}
 * @return {JSX.Element}
 * @constructor
 */
const AdminUGRM = ({urgm, remove}) => {

    return (
        <tr>
            <td>
                <button onClick={() => remove(urgm)}>Usuń</button>
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

export default AdminUGRM;