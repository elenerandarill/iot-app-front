import React, {useEffect, useState} from 'react';
import * as authService from "../../../authService";
import {ROUTE_HOME, ROUTE_LOGIN, URL_USER_LIST} from "../../../iotConfig";
import {sendLogout} from "../../../FakeFrontend/backendAuthConnector";
import {Link, useHistory} from "react-router-dom";
import {fetchTeams} from "../../../FakeFrontend/backendMemberConnector";
import {handleUnauthorizedException, sendRequest} from "../../../FakeFrontend/backendConnector";
import {fetchSensors} from "../../../FakeFrontend/backendSensorConnector";
import {fetchSgroups} from "../../../FakeFrontend/backendSgroupConnector";


const AdminPanel = () => {
    const user = authService.getLoggedUser(
        /** @type {LoggedUser}*/ undefined)
    const [menuActive, setMenuActive] = useState(undefined)
    const [objectList, setObjectList] = useState([])
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

    const fetchData = async (url) => {
        const res = await sendRequest(url, {})
        if(res.status === 200){
            console.log(">>> DATA received: ", res.body)
            setObjectList(res.body)
        }
    }

    useEffect(() => {
        if(menuActive === "users"){
            fetchData(URL_USER_LIST)
        }
        else if(menuActive === "teams"){
            fetchTeams()
                .then(setObjectList)
                .catch(error => handleUnauthorizedException(error, history))
        }
        else if(menuActive === "sensors"){
            fetchSensors()
                .then(setObjectList)
                .catch(error => handleUnauthorizedException(error, history))
        }
        else if(menuActive === "sgroups"){
            fetchSgroups()
                .then(setObjectList)
                .catch(error => handleUnauthorizedException(error, history))
        }

    }, [menuActive])


    if (!user) {
        return (
            <div className="admin__main">
                <div className="white-space no-contact centered">
                    <h1>400</h1>
                    <div className="head-txt">400 brak dostępu</div>
                </div>

                <Link to={ROUTE_LOGIN}>
                    Strona Logowania
                </Link>
            </div>
        )
    }
    return (
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
                    )}
                    {objectList.map(obj => {
                        return (
                            <>
                                <table key={obj.id} className="tb">
                                    {Object.entries(obj).map(([key, value]) => {
                                            return (
                                                <tbody key={obj.id}>
                                                <tr>
                                                    <td className="tb__name">{key}</td>
                                                    <td className="tb__value">{value}</td>
                                                </tr>
                                                </tbody>
                                            )
                                        }
                                    )
                                    }
                                </table>
                                <button type="button">zapisz</button>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
        ;
};

export default AdminPanel;