import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/views/homepage";
import Alerts from "./components/views/alerts/alerts";
import Sensors from "./components/views/sensors/sensors";
import SGroups from "./components/views/sGroups/sGroups";
import Team from "./components/views/team/team";
import Contact from "./components/views/contact";
import Login from "./components/views/login";
import UserViews from "./components/views/userViews";
import Register from "./components/views/register";
import SensorDetails from "./components/views/sensors/sensorDetails";
import SGroupDetails from "./components/views/sGroups/sGroupDetails";
import TeamMemberDetails from "./components/views/team/teamMemberDetails";
import Test from "./components/views/test";
import AddSGroup from "./components/views/sGroups/addSGroup";
import EditSensorGroups from "./components/views/sensors/editSensorGroups";
import EditSGroup from "./components/views/sGroups/editSGroup";
import EditMemberGroups from "./components/views/team/editMemberGroups";
import EditSensorChart from "./components/views/sensors/editSensorChart";
import AddTeamMember from "./components/views/team/addTeamMember";
// import PopAlerts from "./components/PopAlerts";
// import {Notifications} from "react-push-notification";


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
                        <Route path="/sensors/:id" exact component={SensorDetails}/>
                        <Route path="/sensors/:id/edit" exact component={EditSensorGroups}/>
                        <Route path="/sensors/:id/edit/chart" exact component={EditSensorChart}/>
                        <Route path="/sgroups/" exact component={SGroups}/>
                        <Route path="/add/sgroups" exact component={AddSGroup}/>
                        <Route path="/sgroups/:id" exact component={SGroupDetails}/>
                        <Route path="/sgroups/:id/edit" exact component={EditSGroup}/>
                        <Route path="/team" exact component={Team}/>
                        <Route path="/team/:id" exact component={TeamMemberDetails}/>
                        <Route path="/add/team" exact component={AddTeamMember}/>
                        <Route path="/team/:id/edit" exact component={EditMemberGroups}/>
                        <Route path="/contact" component={Contact}/>
                </UserViews>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
