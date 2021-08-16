import gear from "../media/gear.svg";

const TopBar = () => {
    return(
        <div className="topbar">
            <div className="topbar-alert">Nie masz nowych alertów.</div>
            <div className="topbar-restore">
                <img src={gear} className="gear edit" alt="restore default layout"/>
                <button className="btn mrg-r">widok&nbsp;domyślny</button>
            </div>
        </div>
    )
}

export default TopBar;