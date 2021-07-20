const MenuButton = ({ text, onClick }) => {
    return (
        <button
            className="btn sidebar-btn"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default MenuButton;