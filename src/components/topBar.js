import gear from "../media/gear.svg";

const TopBar = () => {

    const countNew = () => {
        return 5
        // TODO - request do serwera: ile mam nieprzeczytanych alertów?
    }

    return(
        <div className="topbar txt-semibold txt-blue">
            <div>
                {countNew() === 0 ? "TODO: Nie masz nowych alertów" : "TODO: Nowe alerty: " + countNew()}
            </div>
            <div className="topbar-restore">
                    <img src={gear} className="gear" alt="restore default layout"/>
                    <div className="mrg-r">widok&nbsp;domyślny</div>
            </div>
        </div>
    )
}

export default TopBar;