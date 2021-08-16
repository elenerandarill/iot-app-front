import { useLocation } from 'react-router-dom';

const MenuButton = ({ text, path }) => {
    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }

    return (
        <button
            className={usePathname() === path ? "btn menu-btn menu-active" : "btn menu-btn menu-inactive"}
        >
            {text}
        </button>
    )
}

export default MenuButton;