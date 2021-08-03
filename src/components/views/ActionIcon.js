import done from "../../media/done.svg";
import done2 from "../../media/done2.svg";
import del from "../../media/delete.svg";
import del2 from "../../media/delete2.svg";

const ActionIcon = ({action}) => {
    return(
        // przyjmie tez akcje onClick
        <div className="icon-container">
            <img src={action === "done" ? done2 : del2} alt="check" className="btn action-icon-overlay"/>
            <img src={action === "done" ? done : del} alt="check" className="btn action-icon"/>
        </div>
        )
}

export default ActionIcon;