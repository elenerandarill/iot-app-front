import gear from "../media/gear.svg";
import {useEffect, useState} from "react";
import {getUnreadAlertsCount} from "../FakeFrontend/backendAlertConnector";
import menu from "../media/menu.svg";
import useWindowDimensions from "./useWindowDimensions";
import * as authService from "../authService";

const TopBar = ({ activateBurgerMenu }) => {
    const [unreadAlerts, setUnreadAlerts] = useState(0)
    const { width, height } = useWindowDimensions()
    const loggedUser = authService.getLoggedUser()


    // Dostaje liczbe z gory, z App.
    // unreadAlertsCount((count) => {
    //     setUnreadAlerts(count)
    // })

    useEffect(() => {
        getUnreadAlertsCount()
            .then((count) => {setUnreadAlerts(count)})
    }, [])

    return(
        <div className="topbar txt-semibold txt-blue">
            <div className="mrg-l5">
                {unreadAlerts === 0
                    ? "Nie masz nowych alertów"
                    : "Nowe alerty: " + unreadAlerts}
            </div>
            <div className="topbar-restore">
                {/*<img src={gear} className="gear" alt="restore default layout"/>*/}
                {loggedUser
                    ? <div>{loggedUser.ufname} {loggedUser.ulname}</div>
                    : ""}
                {width <= 640 && <img
                    src={menu}
                    alt="menu"
                    className="burgermenu-icon"
                    onClick={() => activateBurgerMenu(true)}
                />}

            </div>
        </div>
    )
}

export default TopBar;