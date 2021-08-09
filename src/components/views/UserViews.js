import SideBar from "../SideBar";
import {Notifications} from "react-push-notification";
import TopBar from "../TopBar";
import Footer from "../Footer";

const UserViews = ({children}) => {
    return (
        <div className="container">
            <SideBar/>
            <Notifications/>
            <TopBar/>
            {children}
            <Footer/>
        </div>
    )
}

export default UserViews;
