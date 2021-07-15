import MenuButton from "./MenuButton";
import logo_iot from "../media/logo.svg";


const SideBar = () => {
    const onClick = () => {
        console.log("kliknięto ")
    }

    return(
        <div className="sidebar">
            <img src={logo_iot} alt="IoT Solution logo" className="sidebar-logo"/>
            <MenuButton text="Team" onClick={onClick} />
            <MenuButton text="Alerty" onClick={onClick} />
            <MenuButton text="Zespół" onClick={onClick} />
            <MenuButton text="Czujniki" onClick={onClick} />
            <MenuButton text="Grupy" onClick={onClick} />
            <MenuButton text="Kontakt" onClick={onClick} />
            <MenuButton text="Wyloguj" onClick={onClick} className=""/>
        </div>
    )
}

export default SideBar;