import plus from "../media/plus.svg";
import {Link} from "react-router-dom";

const ButtonFunc = ({ text, add, link, onClick }) => {
    return (
        <Link to={link}>
        <div className="btn btn-color insert-button" onClick={() => onClick}>
            {add === true && <img src={plus} className="icon-plus" alt="dodaj wartość"/>}
            {text}
        </div>
        </Link>
    )
}

export default ButtonFunc;