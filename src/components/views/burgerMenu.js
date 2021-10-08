import {MenuBurgerButton} from "../menuButton";
import LogoutButton from "../logoutButton";
import {
    ROUTE_CONTACT,
    ROUTE_HOME, ROUTE_LOGIN,
    ROUTE_NOTIFS_LIST,
    ROUTE_SENSOR_LIST,
    ROUTE_SGROUP_LIST,
    ROUTE_TMEMBER_LIST
} from "../../iotConfig";
import {sendLogout} from "../../FakeFrontend/backendConnector";
import * as authService from "../../authService";
import {useHistory} from "react-router-dom";

const BurgerMenu = ({ activateBurgerMenu }) => {
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
        <div className="burgermenu-overlay">
            <div className="burgermenu">
                <MenuBurgerButton
                    text="Pulpit"
                    path={ROUTE_HOME}
                    onClick={() => activateBurgerMenu(false)}
                />
                <MenuBurgerButton
                    text="Alerty"
                    path={ROUTE_NOTIFS_LIST}
                    onClick={() => activateBurgerMenu(false)}
                />
                <MenuBurgerButton
                    text="Czujniki"
                    path={ROUTE_SENSOR_LIST}
                    onClick={() => activateBurgerMenu(false)}
                />
                <MenuBurgerButton
                    text="Grupy"
                    path={ROUTE_SGROUP_LIST}
                    onClick={() => activateBurgerMenu(false)}
                />
                <MenuBurgerButton
                    text="Zespół"
                    path={ROUTE_TMEMBER_LIST}
                    onClick={() => activateBurgerMenu(false)}
                />
                <MenuBurgerButton
                    text="Kontakt"
                    path={ROUTE_CONTACT}
                    onClick={() => activateBurgerMenu(false)}
                />

                <LogoutButton
                    text="Wyloguj"
                    onClick={onLogout}
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