import React from 'react';

/**
 *
 * @param seType {SensorType}
 * @param alertMsg
 * @param onRemove {function(id: number)}
 * @return {JSX.Element}
 * @constructor
 */
const AdminSensorType = ({seType, alertMsg, onRemove}) => {
    return (
        <tr>
            <td>
                <button onClick={() => onRemove(seType.STYID)}>
                    Usuń
                </button>
            </td>
            <td>
                {seType.STYID}
            </td>
            <td>
                {seType.STNAME}
            </td>
            <td>
                {seType.STMAN}
            </td>
        </tr>
    );
};

export default AdminSensorType;