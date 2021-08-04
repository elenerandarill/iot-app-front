import SideBar from "../SideBar";
import {Notifications} from "react-push-notification";
import TopBar from "../TopBar";
import {Route} from "react-router-dom";
import Homepage from "./Homepage";
import Alerts from "./Alerts";
import Sensors from "./Sensors";
import SensorGroups from "./SensorGroups";
import Team from "./Team";
import Contact from "./Contact";
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
