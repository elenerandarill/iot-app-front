import SideBar from "../sideBar";
import {Notifications} from "react-push-notification";
import TopBar from "../topBar";
import Footer from "../footer";

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
