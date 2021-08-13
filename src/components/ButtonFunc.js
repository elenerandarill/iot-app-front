import plus from "../media/plus.svg";

const ButtonFunc = ({ text, add }) => {
    return (
        <button className="btn btn-color insert-button">
            {add === "yes" && <img src={plus} className="icon-plus" alt="dodaj wartość"/>}
            <p>{text}</p>
        </button>
    )
}

export default ButtonFunc;