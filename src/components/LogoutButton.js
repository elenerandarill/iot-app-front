const LogoutButton = ({ text, onClick }) => {
    return (
        <button
            className="btn sidebar-btn logout"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default LogoutButton;