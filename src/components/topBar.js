import gear from "../media/gear.svg";
import {useEffect, useState} from "react";
import {getUnreadAlertsCount} from "../FakeFrontend/backendAlertConnector";

const TopBar = () => {
    const [unreadAlerts, setUnreadAlerts] = useState(0)

    // Dostaje liczbe z gory, z App.
    // unreadAlertsCount((count) => {
    //     setUnreadAlerts(count)
    // })

    useEffect(() => {
        getUnreadAlertsCount()
            .then((count) => {setUnreadAlerts(count)})
    })

    return(
        <div className="topbar txt-semibold txt-blue">
            <div>
                {unreadAlerts === 0
                    ? "Nie masz nowych alertów"
                    : "Nowe alerty: " + unreadAlerts}
            </div>
            <div className="topbar-restore">
                    <img src={gear} className="gear" alt="restore default layout"/>
                    <div className="mrg-r">widok&nbsp;domyślny</div>
            </div>
        </div>
    )
}

export default TopBar;