import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import AdminSensor from "./adminSensor";
import {fetchSensors} from "../../../FakeFrontend/backendSensorConnector";

const AdminSensors = ({alertMsg}) => {
    const [sensors, setSensors] = useState(
        /** @type {Sensor[]} */undefined)
    const history = useHistory()

    useEffect(() => {
        fetchSensors()
            .then(setSensors)
            .catch(error => handleUnauthorizedException(error, history))
    }, [])


    if (!sensors) {
        return (<div> Pobieram dane...</div>)
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>ZAPISZ</th>
                    <th>SENID</th>
                    <th>SEOWN</th>
                    <th>SETYPE</th>
                    <th>SENAME</th>
                    <th>SEDID</th>
                    <th>SEDES</th>
                    <th>SELAT</th>
                    <th>SELONG</th>
                </tr>
            </thead>
            <tbody>
                {sensors.map(sensor =>
                    <AdminSensor key={sensor.id} sensor={sensor} alertMsg={alertMsg}/>
                )}
            </tbody>
        </table>
    )
};

export default AdminSensors;