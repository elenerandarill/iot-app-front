import React, {useEffect, useState} from 'react';
import * as authService from "../../../authService";
import {ROUTE_HOME, ROUTE_LOGIN, URL_USER_LIST} from "../../../iotConfig";
import {sendLogout} from "../../../FakeFrontend/backendAuthConnector";
import {Link, useHistory} from "react-router-dom";
import AdminUsers from "./adminUsers";


const AdminPanel = () => {
    const user = authService.getLoggedUser(
        /** @type {LoggedUser}*/ undefined)
    const [menuActive, setMenuActive] = useState(undefined)
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
            ? "admin__sidebar--btn btn--active"
            : "admin__sidebar--btn"
    }


    // useEffect(() => {
    //     if (menuActive === "users") {
    //         fetchData(URL_USER_LIST)
    //     } else if (menuActive === "teams") {
    //         fetchTeams()
    //             .then(setObjectList)
    //             .catch(error => handleUnauthorizedException(error, history))
    //     } else if (menuActive === "sensors") {
    //         fetchSensors()
    //             .then(setObjectList)
    //             .catch(error => handleUnauthorizedException(error, history))
    //     } else if (menuActive === "sgroups") {
    //         fetchSgroups()
    //             .then(setObjectList)
    //             .catch(error => handleUnauthorizedException(error, history))
    //     }
    //
    // }, [menuActive])


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
        // <div style={{"backgroundColor": "red"}}>
        //     background-colorbackground-colorbackground-color
        //     background-color
        //     background-color
        //     background-color
        //     background-color
        //     background-color
        //     background-color
        // </div>
        <div className="admin__main">
            <div className="admin__main--sidebar">
                <ul>
                    <li>
                        <button
                            type="button"
                            className={isBtnActive("users")}
                            onClick={() => setMenuActive("users")}
                        >
                            użytkownicy
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className={isBtnActive("teams")}
                            onClick={() => setMenuActive("teams")}
                        >
                            zespoły
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className={isBtnActive("sensors")}
                            onClick={() => setMenuActive("sensors")}
                        >
                            czujniki
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className={isBtnActive("sgroups")}
                            onClick={() => setMenuActive("sgroups")}
                        >
                            grupy czujników
                        </button>
                    </li>

                    <br/>

                    <li>
                        <button className="admin__sidebar--btn"
                                onClick={() => history.push(ROUTE_HOME)}
                        >
                            to app
                        </button>
                    </li>
                    <li>
                        <button className="admin__sidebar--btn"
                                onClick={onLogout}
                        >
                            logout
                        </button>
                    </li>
                </ul>
            </div>
            <div className="admin__main--forms">
                <p className="admin__txt admin__uptxt">Panel administratora</p>
                <p className="mrg-tb">zalogowano: {user.ufname} {user.ulname}</p>
                <div>
                    {menuActive === "users" && <AdminUsers/>}
                </div>
            </div>
        </div>
    )
        ;
};

export default AdminPanel;