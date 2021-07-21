import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import PopAlerts from "./components/PopAlerts";
import Homepage from "./components/views/Homepage";
import Alerts from "./components/views/Alerts";
import Sensors from "./components/views/Sensors";
import SensorGroups from "./components/views/SensorGroups";
import Team from "./components/views/Team";
import Contact from "./components/views/Contact";
import {Notifications} from "react-push-notification";
import React from "react";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <SideBar/>
                <Notifications/>

                <Route path="/" exact component={Homepage}/>
                <Route path="/alerts" component={Alerts}/>
                <Route path="/sensors" component={Sensors}/>
                <Route path="/sensor-groups" component={SensorGroups}/>
                <Route path="/team" component={Team}/>
                <Route path="/contact" component={Contact}/>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
