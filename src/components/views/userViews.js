import SideBar from "../sideBar";
import {Notifications} from "react-push-notification";
import TopBar from "../topBar";
import Footer from "../footer";
import useWindowDimensions from "../useWindowDimensions";
import BurgerMenu from "./burgerMenu";
import {useState} from "react";

const UserViews = ({children}) => {
    const { width, height  } = useWindowDimensions();
    const [burgerActive, setBurgerActive] = useState(false)

    const activateBurgerMenu = (value) => {
        setBurgerActive(value)
    }

    if (width <= 640){
        return (
            <div>
                {burgerActive && <BurgerMenu activateBurgerMenu={activateBurgerMenu}/>}
                <Notifications/>
                <TopBar activateBurgerMenu={activateBurgerMenu}/>
                {children}
                <Footer/>
            </div>
        )
    }
    else {
        return(
            <div className="container">
                <SideBar/>
                <Notifications/>
                <TopBar/>
                {children}
                <Footer/>
            </div>
        )
    }
}

export default UserViews;
