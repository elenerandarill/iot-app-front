const ButtonFunc = ({ text, onClick }) => {
    return (
        <button
            className="btn-func"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default ButtonFunc;