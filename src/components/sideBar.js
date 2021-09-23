import MenuButton from "./menuButton";
import logo_iot from "../media/logo.svg";
import LogoutButton from "./logoutButton";
import useWindowDimensions from "./useWindowDimensions";


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
            <MenuButton text="Pulpit" path="/"/>
            <MenuButton text="Alerty" path="/alerts"/>
            <MenuButton text="Czujniki" path="/sensors"/>
            <MenuButton text="Grupy" path="/sgroups"/>
            <MenuButton text="Zespół" path="/team"/>
            <MenuButton text="Kontakt" path="/contact"/>

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