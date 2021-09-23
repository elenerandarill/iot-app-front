import {MenuBurgerButton} from "../menuButton";
import LogoutButton from "../logoutButton";

const BurgerMenu = ({ activateBurgerMenu }) => {

    return (
        <div className="burgermenu-overlay">
            <div className="burgermenu">
                <MenuBurgerButton
                    text="Pulpit"
                    path="/"
                    onClick={() => activateBurgerMenu(false)}
                />
                <MenuBurgerButton
                    text="Alerty"
                    path="/alerts"
                    onClick={() => activateBurgerMenu(false)}
                />
                <MenuBurgerButton
                    text="Czujniki"
                    path="/sensors"
                    onClick={() => activateBurgerMenu(false)}
                />
                <MenuBurgerButton
                    text="Grupy"
                    path="/sgroups"
                    onClick={() => activateBurgerMenu(false)}
                />
                <MenuBurgerButton
                    text="Zespół"
                    path="/team"
                    onClick={() => activateBurgerMenu(false)}
                />
                <MenuBurgerButton
                    text="Kontakt"
                    path="/contact"
                    onClick={() => activateBurgerMenu(false)}
                />

                <LogoutButton
                    text="Wyloguj"
                    onClick={() => {
                        console.log("Wylogowano")
                        activateBurgerMenu(false)
                    }}
                />
                <br/>

                <h6>Tymczasowe skróty:</h6>
                <MenuBurgerButton text="Logowanie" path="/login"
                                  onClick={() => activateBurgerMenu(false)}/>
                <MenuBurgerButton text="Rejestracja" path="/register"
                                  onClick={() => activateBurgerMenu(false)}/>
                <MenuBurgerButton text="Test Requesta" path="/text"
                                  onClick={() => activateBurgerMenu(false)}/>
            </div>
            <div className="txt-right icon-close-bmenu txt-left">
                <i
                    className="fas fa-times fa-2x txt-blue"
                    onClick={() => activateBurgerMenu(false)}
                />
            </div>
        </div>
    )
}

export default BurgerMenu;