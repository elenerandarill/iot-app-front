import TopBar from "../TopBar";
import BodySection from "../MainSection";
import plus from "../../media/plus.svg";

const Team = () => {
    return(
        <div className="main">
            <div className="main-func-buttons">
                <button className="btn btn-purple btn-func insert-button">
                    <img src={plus} className="icon-plus" alt="dodaj wartość"/>
                    <p>osoba</p>
                </button>
            </div>
        </div>
    )
}

export default Team;