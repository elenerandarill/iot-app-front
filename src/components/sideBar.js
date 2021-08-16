import MenuButton from "./menuButton";
import logo_iot from "../media/logo.svg";
import LogoutButton from "./logoutButton";
import {Link} from "react-router-dom";


const SideBar = ({ location }) => {
    const onClick = () => {
        console.log("kliknięto ")
    }

    return(
        <div className="sidebar">
            <img src={logo_iot} alt="IoT Solution logo" className="sidebar-logo"/>

            <Link to="/" className="txt-right">
                <MenuButton text="Pulpit" path="/"/>
            </Link>
            <Link to="/alerts" className="txt-right">
                <MenuButton text="Alerty"  path="/alerts"/>
            </Link>
            <Link to="/sensors" className="txt-right">
                <MenuButton text="Czujniki"  path="/sensors"/>
            </Link>
            <Link to="/groups-of-sensors" className="txt-right">
                <MenuButton text="Grupy" path="/groups-of-sensors"/>
            </Link>
            <Link to="/team" className="txt-right">
                <MenuButton text="Zespół" path="/team"/>
            </Link>
            <Link to="/contact" className="txt-right">
                <MenuButton text="Kontakt" path="/contact"/>
            </Link>

            <LogoutButton text="Wyloguj" onClick={onClick}/>
            <br/>
            Tymczasowe skróty:
            <Link to="/login">
                <MenuButton text="Logowanie" path="/login"/>
            </Link>
            <Link to="/register">
                <MenuButton text="Rejestracja" path="/register"/>
            </Link>
            <Link to="/test">
                <MenuButton text="Test Requesta" path="/text"/>
            </Link>

        </div>
    )
}

export default SideBar;