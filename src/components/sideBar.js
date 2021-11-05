import MenuButton from "./menuButton";
import logo_iot from "../media/logo.svg";
import useWindowDimensions from "./useWindowDimensions";
import {
    ROUTE_CONTACT,
    ROUTE_HOME, ROUTE_LOGIN,
    ROUTE_NOTIFS_LIST,
    ROUTE_SENSOR_LIST,
    ROUTE_SGROUP_LIST, ROUTE_TEAMS_LIST,
    ROUTE_TMEMBER_LIST, URL_TEAMS_LIST
} from "../iotConfig";
import {sendLogout} from "../FakeFrontend/backendAuthConnector";
import {useHistory} from "react-router-dom";
import LogoutButton from "./logoutButton";
import * as authService from "../authService";


const SideBar = () => {
    const { width, height } = useWindowDimensions()
    const history = useHistory()

    const onLogout = () => {
        // Info do backendu
        sendLogout()
            .then(() => {
                authService.logout()
                history.push(ROUTE_LOGIN)
            })
    }

    return (
        <div
            className={width >= 640 ? "sidebar" : "burgermenu"}
        >
            <img src={logo_iot} alt="IoT Solution logo" className="sidebar-logo"/>
            <MenuButton text="Pulpit" path={ROUTE_HOME}/>
            <MenuButton text="Alerty" path={ROUTE_NOTIFS_LIST}/>
            <MenuButton text="Czujniki" path={ROUTE_SENSOR_LIST}/>
            <MenuButton text="Grupy" path={ROUTE_SGROUP_LIST}/>
            <MenuButton text="Zespoły" path={ROUTE_TEAMS_LIST}/>
            <MenuButton text="Kontakt" path={ROUTE_CONTACT}/>

            <LogoutButton text="Wyloguj" onClick={onLogout}/>
            <br/>
            <h6>Tymczasowe skróty:</h6>
            <MenuButton text="Logowanie" path="/login"/>
            <MenuButton text="Rejestracja" path="/register"/>
            <MenuButton text="Restart" path="/restart"/>

        </div>
    )
}

export default SideBar;