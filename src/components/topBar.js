import menu from "../media/menu.svg";
import useWindowDimensions from "./useWindowDimensions";
import * as authService from "../authService";
import {useFetchAlertsQuery} from "../features/alerts/alertsApi";
import {ROUTE_LOGIN} from "../iotConfig";
import {useHistory} from "react-router-dom";

const TopBar = ({ activateBurgerMenu }) => {
    const { width, height } = useWindowDimensions()
    const loggedUser = authService.getLoggedUser()
    const history = useHistory()

    const { data, isError, error } = useFetchAlertsQuery(undefined, {
        pollingInterval: 60 * 1000,
    })
    if(isError && error.status === 401) {
        history.push(ROUTE_LOGIN)
    }

    const unreadAlerts = data
    console.log(">>>> unreadAlerts: ", unreadAlerts)

    const getUnreadAlertMessage = (unreadAlerts) => {
        if(!unreadAlerts) {
            return "Wczytuję listę alertów..."
        }
        return unreadAlerts === 0
            ? "Nie masz nowych alertów"
            : "Nowe alerty: " + unreadAlerts
    }

    return(
        <div className="topbar txt-semibold txt-blue">
            <div className="topbar__alerts">
                {getUnreadAlertMessage(unreadAlerts)}
            </div>
            <div className="topbar__name">
                {/*<img src={gear} className="gear" alt="restore default layout"/>*/}
                {loggedUser
                    ? <div className="mrg-r">
                        {loggedUser.ufname} {loggedUser.ulname}
                    </div>
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