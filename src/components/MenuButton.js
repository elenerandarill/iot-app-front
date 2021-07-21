import { useLocation } from 'react-router-dom';

const MenuButton = ({ text, path }) => {
    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }

    return (
        <button
            className={usePathname() === path ? "btn sidebar-btn active" : "btn sidebar-btn inactive"}
        >
            {text}
        </button>
    )
}

export default MenuButton;