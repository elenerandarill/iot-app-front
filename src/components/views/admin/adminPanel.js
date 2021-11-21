import React, {useState} from 'react';
import * as authService from "../../../authService";
import {ROUTE_HOME, ROUTE_LOGIN} from "../../../iotConfig";
import {sendLogout} from "../../../FakeFrontend/backendAuthConnector";
import {Link, useHistory} from "react-router-dom";
import AdminUsers from "./adminUsers";
import AdminTeams from "./adminTeams";
import AdminSensors from "./adminSensors";
import AdminSgroups from "./adminSgroups";
import AdminURGMs from "./adminURGMs";
import AdminSensorTypes from "./adminSensorTypes";


const AdminPanel = () => {
    const user = authService.getLoggedUser(
        /** @type {LoggedUser}*/ undefined)
    const [menuActive, setMenuActive] = useState(undefined)
    const [status, setStatus] = useState()
    const [msg, setMsg] = useState()
    const history = useHistory()

    const onLogout = () => {
        sendLogout()
            .then(() => {
                authService.logout()
                history.push(ROUTE_LOGIN)
            })
    }

    /** @param name {string} */
    const isBtnActive = (name) => {
        return name === menuActive
            ? "admin__menu--btn btn--active"
            : "admin__menu--btn"
    }

    const alertMsg = (status, msg) => <div className={`admin__msg ${status}`}>{msg}</div>

    const showAlert = (cls, msg) => {
        setStatus(cls)
        setMsg(msg)
        setTimeout(() => {
            setStatus(undefined)
            setMsg(undefined)
        }, 10000)
    }

    const BtnAdminMenu = ({descPl, descEng, dbName}) => {
        return (
            <button
                type="button"
                className={isBtnActive(descEng)}
                onClick={() => setMenuActive(descEng)}
            >
                <span className="admin__uptxt">{dbName}</span>
                <br/> ({descPl})
            </button>
        )
    }

    if (!user) {
        return (
            <div className="admin__main">
                <div className="head-txt">400 brak dostępu</div>
                <Link to={ROUTE_LOGIN}>
                    Strona Logowania
                </Link>
            </div>
        )
    }
    return (
        <div className="admin__main">
            <div className="admin__main--menu">
                <BtnAdminMenu descPl="użytkownicy" descEng="users" dbName="USER"/>
                <BtnAdminMenu descPl="zespoły" descEng="teams" dbName="UGRP"/>
                <BtnAdminMenu descPl="ugrupa:user" descEng="ugrm" dbName="UGRM"/>
                <BtnAdminMenu descPl="czujniki" descEng="sensors" dbName="SENSOR"/>
                <BtnAdminMenu descPl="rodzaje czujników" descEng="sentypes" dbName="SETYPE"/>
                <BtnAdminMenu descPl="grupy czujników" descEng="sgroups" dbName="SGROUP"/>
                <BtnAdminMenu descPl="sgrupa:sensor" descEng="sgrsen" dbName="SGMEMB"/>
                <BtnAdminMenu descPl="czujnik DN" descEng="sendispname" dbName="SDDN"/>
                <BtnAdminMenu descPl="zbierane dane" descEng="sensordata" dbName="SDATA"/>
                <BtnAdminMenu descPl="pozwolenia" descEng="perms" dbName="PERM"/>
                <BtnAdminMenu descPl="perm-maska" descEng="pemask" dbName="PEMASK"/>
                <BtnAdminMenu descPl="warunek-reguła" descEng="condition" dbName="COND"/>
                <BtnAdminMenu descPl="notyfikacja" descEng="notifs" dbName="NOTIF"/>
                <BtnAdminMenu descPl="lista notyfikacji" descEng="notiflist" dbName="NLIST"/>

                <button className="admin__menu--btn btn--special"
                        onClick={() => history.push(ROUTE_HOME)}
                >
                    back to app
                </button>
                <button className="admin__menu--btn btn--special"
                        onClick={onLogout}
                >
                    logout
                </button>
            </div>

            <div className="admin__main--forms">
                <div>
                    <span className="admin__txt admin__uptxt">Panel administratora </span>
                    >>> zalogowano: {user.ufname} {user.ulname}
                </div>
                {alertMsg(status, msg)}
                <div>
                    {menuActive === "users" && <AdminUsers alertMsg={showAlert}/>}
                    {menuActive === "teams" && <AdminTeams alertMsg={showAlert}/>}
                    {menuActive === "sensors" && <AdminSensors alertMsg={showAlert}/>}
                    {menuActive === "sgroups" && <AdminSgroups alertMsg={showAlert}/>}
                    {menuActive === "ugrm" && <AdminURGMs alertMsg={showAlert}/>}
                    {menuActive === "sentypes" && <AdminSensorTypes alertMsg={showAlert}/>}
                </div>
            </div>
        </div>
    )
};

export default AdminPanel;