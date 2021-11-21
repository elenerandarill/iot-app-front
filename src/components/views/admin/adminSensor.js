import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {changeValue, handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {URL_SENSOR_SET} from "../../../iotConfig";

/**
 * @param sensor {Sensor}
 * @param alertMsg {function(status: string, msg: string)}
 * @return {JSX.Element}
 * @constructor
 */
const AdminSensor = ({sensor, alertMsg}) => {
    const [sowner, setSowner] = useState(sensor.owner)
    const [stype, setStype] = useState(sensor.type)
    const [sname, setSname] = useState(sensor.name)
    const [sn, setSn] = useState(sensor.sn)
    const [snotes, setSnotes] = useState(sensor.notes)
    const [slat, setSlat] = useState(sensor.GPS.latitude)
    const [slong, setSlong] = useState(sensor.GPS.longitude)
    const history = useHistory()

    const sendSingle = async (propName, valueOrg, valueNew) => {
        if(valueOrg !== valueNew) {
            await changeValue(
                URL_SENSOR_SET, "SENID", sensor.id, propName, valueNew
            )
        }
    }

    const send = async () => {
        Promise.all([
            sendSingle("SEOWN", sensor.owner, sowner),
            sendSingle("SETYPE", sensor.type, stype),
            sendSingle("SENAME", sensor.name, sname),
            sendSingle("SEDID", sensor.sn, sn),
            sendSingle("SEDES", sensor.notes, snotes),
            sendSingle("SELAT", sensor.GPS.latitude, slat),
            sendSingle("SELONG", sensor.GPS.longitude, slong)
        ])
            .then(() => alertMsg('admin__msg--success', 'Zapisano.'))
            .catch(error => handleUnauthorizedException(error, history))
            .catch(error => alertMsg(
                'admin__msg--error', `Wystąpił błąd: ${error.message}`
            ))
    }


    return (
        <tr>
            <td>
                <button onClick={send}>Zapisz</button>
            </td>
            <td>
                {sensor.id}
            </td>
            <td>
                <input type="number" value={sowner}
                       onChange={e => setSowner(e.target.valueAsNumber)}/>
            </td>
            <td>
                <input type="number" value={stype}
                       onChange={e => setStype(e.target.valueAsNumber)}/>
            </td>
            <td>
                <input type="text" value={sname}
                       onChange={e => setSname(e.target.value)}/>
            </td>
            <td>
                <input type="text" value={sn}
                       onChange={e => setSn(e.target.value)}/>
            </td>
            <td>
                <input type="text" value={snotes}
                       onChange={e => setSnotes(e.target.value)}/>
            </td>
            <td>
                <input type="number" value={slat}
                       onChange={e => setSlat(e.target.valueAsNumber)}/>
            </td>
            <td>
                <input type="number" value={slong}
                       onChange={e => setSlong(e.target.valueAsNumber)}/>
            </td>
        </tr>
    );
};

export default AdminSensor;