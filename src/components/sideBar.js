import MenuButton from "./menuButton";
import logo_iot from "../media/logo.svg";
import LogoutButton from "./logoutButton";
import useWindowDimensions from "./useWindowDimensions";
import {
    ROUTE_CONTACT,
    ROUTE_HOME,
    ROUTE_NOTIFS_LIST,
    ROUTE_SENSOR_LIST,
    ROUTE_SGROUP_LIST,
    ROUTE_TMEMBER_LIST
} from "../iotConfig";


const SideBar = () => {
    const { width, height } = useWindowDimensions();

    const onClick = () => {
        console.log("kliknięto Wyloguj")
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
            <MenuButton text="Zespół" path={ROUTE_TMEMBER_LIST}/>
            <MenuButton text="Kontakt" path={ROUTE_CONTACT}/>

            <LogoutButton text="Wyloguj" onClick={onClick}/>
            <br/>
            <h6>Tymczasowe skróty:</h6>
            <MenuButton text="Logowanie" path="/login"/>
            <MenuButton text="Rejestracja" path="/register"/>
            <MenuButton text="Test Requesta" path="/text"/>

        </div>
    )
}

export default SideBar;