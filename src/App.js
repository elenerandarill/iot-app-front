import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/views/Homepage";
import Alerts from "./components/views/Alerts";
import Sensors from "./components/views/Sensors";
import SensorGroups from "./components/views/SensorGroups";
import Team from "./components/views/Team";
import Contact from "./components/views/Contact";
// import PopAlerts from "./components/PopAlerts";
// import {Notifications} from "react-push-notification";
import React from "react";
import Login from "./components/views/Login";
import UserViews from "./components/views/UserViews";
import Register from "./components/views/Register";
import SensorDetails from "./components/views/SensorDetails";
import GroupDetails from "./components/views/GroupDetails";
import Test from "./components/views/Test";


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/test" exact component={Test}/>

                <UserViews>
                        <Route path="/" exact component={Homepage}/>
                        <Route path="/alerts" component={Alerts}/>
                        <Route path="/sensors" exact component={Sensors}/>
                        <Route path="/sensors/:id" component={SensorDetails}/>
                        <Route path="/sensor-groups" exact component={SensorGroups}/>
                        <Route path="/sensor-groups/:id" component={GroupDetails}/>
                        <Route path="/team" component={Team}/>
                        <Route path="/contact" component={Contact}/>
                </UserViews>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
