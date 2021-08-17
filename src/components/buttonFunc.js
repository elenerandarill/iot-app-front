import plus from "../media/plus.svg";
import {Link} from "react-router-dom";

const ButtonFunc = ({ text, add, link }) => {
    return (
        <Link to={link}>
        <button className="btn btn-color insert-button">
            {add === true && <img src={plus} className="icon-plus" alt="dodaj wartość"/>}
            <p>{text}</p>
        </button>
        </Link>
    )
}

export default ButtonFunc;