import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";


const MenuButton = ({ text, path }) => {
    const location = useLocation();

    return (
        <Link to={path}>
            <div
                className={location.pathname === path
                    ? "btn menu-active" : "btn menu-inactive"}
            >
                {text}
            </div>
        </Link>
    )
}

export default MenuButton;

export const MenuBurgerButton = ({ text, path, onClick }) => {
    const location = useLocation();

    return (
        <Link to={path}>
            <div
                className={location.pathname === path
                    ? "btn menu-active" : "btn menu-inactive"}
                onClick={onClick}
            >
                {text}
            </div>
        </Link>
    )
}
