const LogoutButton = ({ text, onClick }) => {
    return (
        <div
            className="btn menu-inactive"
            onClick={onClick}
        >
            {text}
        </div>
    )
}

export default LogoutButton;