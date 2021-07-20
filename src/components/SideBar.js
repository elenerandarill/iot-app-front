import MenuButton from "./MenuButton";
import logo_iot from "../media/logo.svg";
import LogoutButton from "./LogoutButton";
import {Link} from "react-router-dom";


const SideBar = () => {
    const onClick = () => {
        console.log("kliknięto ")
    }

    return(
        <div className="sidebar">
            <img src={logo_iot} alt="IoT Solution logo" className="sidebar-logo"/>

            <Link to="/">
                <MenuButton text="Pulpit" onClick={onClick}/>
            </Link>
            <Link to="/alerts">
                <MenuButton text="Alerty" onClick={onClick}/>
            </Link>
            <Link to="/sensors">
                <MenuButton text="Czujniki" onClick={onClick}/>
            </Link>
            <Link to="/sensor-groups">
                <MenuButton text="Grupy" onClick={onClick}/>
            </Link>
            <Link to="/team">
                <MenuButton text="Zespół" onClick={onClick}/>
            </Link>
            <Link to="/contact">
                <MenuButton text="Kontakt" onClick={onClick}/>
            </Link>

            <LogoutButton text="Wyloguj" onClick={onClick}/>
        </div>
    )
}

export default SideBar;