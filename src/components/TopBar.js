import gear from "../media/gear.svg";

const TopBar = () => {
    return(
        <div className="topbar">
            <div className="topbar-buttons">
                <button className="btn topbar-add">+&nbsp;wartość</button>
                <button className="btn topbar-add">+&nbsp;tabela</button>
                <button className="btn topbar-add">+&nbsp;wykres</button>
                <button className="btn topbar-add">+&nbsp;mapa</button>
            </div>
            <div className="topbar-alert">Powiadomienie !</div>
            <div className="topbar-buttons">
                <img src={gear} className="gear edit" alt="restore default layout"/>
                <button className="btn topbar-restore">przywróć&nbsp;widok&nbsp;domyślny</button>
            </div>
        </div>
    )
}

export default TopBar;