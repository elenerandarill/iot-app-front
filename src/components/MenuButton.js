const MenuButton = ({ text, onClick, color }) => {
    return (
        <button
            className="btn sidebar-button"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default MenuButton;