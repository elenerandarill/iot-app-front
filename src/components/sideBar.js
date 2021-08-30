import MenuButton from "./menuButton";
import logo_iot from "../media/logo.svg";
import LogoutButton from "./logoutButton";
import {Link} from "react-router-dom";


const SideBar = ({location}) => {
    const onClick = () => {
        console.log("kliknięto ")
    }

    return (
        <div className="sidebar">
            <img src={logo_iot} alt="IoT Solution logo" className="sidebar-logo"/>

            <MenuButton text="Pulpit" path="/"/>
            <MenuButton text="Alerty" path="/alerts"/>
            <MenuButton text="Czujniki" path="/sensors"/>
            <MenuButton text="Grupy" path="/sgroups"/>
            <MenuButton text="Zespół" path="/team"/>
            <MenuButton text="Kontakt" path="/contact"/>

            <LogoutButton text="Wyloguj" onClick={onClick}/>
            <br/>
            Tymczasowe skróty:
            <MenuButton text="Logowanie" path="/login"/>
            <MenuButton text="Rejestracja" path="/register"/>
            <MenuButton text="Test Requesta" path="/text"/>

        </div>
    )
}

export default SideBar;