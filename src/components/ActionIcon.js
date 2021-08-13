import done from "../media/done.svg";
import done2 from "../media/done2.svg";
import del from "../media/delete.svg";
import del2 from "../media/delete2.svg";
import close from "../media/close.svg";
import close2 from "../media/close2.svg";

const ActionIcon = ({ action, descr, height, onClick }) => {

    let icontype = [];

    if (action === "done")
        icontype = [done, done2]
    if (action === "del")
        icontype = [del, del2]
    if (action === "close")
        icontype = [close, close2]

    const styling = {height: `${height}px`}

    return(
        <div className="icon-container" onClick={onClick}>
            <img src={icontype[0]} alt={descr} className="btn icon-overlay" style={styling}/>
            <img src={icontype[1]} alt={descr} className="btn " style={styling}/>
        </div>
        )
}

export default ActionIcon;