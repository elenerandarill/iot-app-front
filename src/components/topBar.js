import gear from "../media/gear.svg";
import getAlerts from "../FakeBackend/getAlerts";

const TopBar = () => {

    const countNew = () => {
        return getAlerts.filter(alert => alert.read === true).length
    }

    return(
        <div className="topbar txt-semibold txt-blue">
            <div>
                {countNew() === 0 ? "Nie masz nowych alertów" : "Nowe alerty: " + countNew()}
            </div>
            <div className="topbar-restore">
                    <img src={gear} className="gear" alt="restore default layout"/>
                    <div className="mrg-r">widok&nbsp;domyślny</div>
            </div>
        </div>
    )
}

export default TopBar;