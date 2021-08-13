const LogoutButton = ({ text, onClick }) => {
    return (
        <button
            className="btn menu-btn logout"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default LogoutButton;