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
import TopBar from "./components/TopBar";
import Login from "./components/views/Login";
import UserViews from "./components/views/UserViews";
import Register from "./components/views/Register";


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>

                <UserViews>
                        <Route path="/" exact component={Homepage}/>
                        <Route path="/alerts" component={Alerts}/>
                        <Route path="/sensors" component={Sensors}/>
                        <Route path="/sensor-groups" component={SensorGroups}/>
                        <Route path="/team" component={Team}/>
                        <Route path="/contact" component={Contact}/>
                </UserViews>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
