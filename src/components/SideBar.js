import MenuButton from "./MenuButton";
import logo_iot from "../media/logo.svg";
import LogoutButton from "./LogoutButton";
import {Link} from "react-router-dom";


const SideBar = ({ location }) => {
    const onClick = () => {
        console.log("kliknięto ")
    }

    return(
        <div className="sidebar">
            <img src={logo_iot} alt="IoT Solution logo" className="sidebar-logo"/>

            <Link to="/">
                <MenuButton text="Pulpit" path="/"/>
            </Link>
            <Link to="/alerts">
                <MenuButton text="Alerty"  path="/alerts"/>
            </Link>
            <Link to="/sensors">
                <MenuButton text="Czujniki"  path="/sensors"/>
            </Link>
            <Link to="/sensor-groups">
                <MenuButton text="Grupy" path="/sensor-groups"/>
            </Link>
            <Link to="/team">
                <MenuButton text="Zespół" path="/team"/>
            </Link>
            <Link to="/contact">
                <MenuButton text="Kontakt" path="/contact"/>
            </Link>

            <LogoutButton text="Wyloguj" onClick={onClick}/>
        </div>
    )
}

export default SideBar;