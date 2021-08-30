import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/views/homepage";
import Alerts from "./components/views/alerts";
import Sensors from "./components/views/sensors";
import GroupsOfSensors from "./components/views/groupsOfSensors";
import Team from "./components/views/team";
import Contact from "./components/views/contact";
import Login from "./components/views/login";
import UserViews from "./components/views/userViews";
import Register from "./components/views/register";
import SensorDetails from "./components/views/sensorDetails";
import GroupDetails from "./components/views/groupDetails";
import TeamMemberDetails from "./components/views/teamMemberDetails";
import Test from "./components/views/test";
import AddGroupOfSensors from "./components/views/addGroupOfSensors";
import EditSensorGroups from "./components/views/editSensorGroups";
import EditGroupOfSensors from "./components/views/editGroupOfSensors";
import EditPersonGroups from "./components/views/editPersonGroups";
import EditSensorChart from "./components/views/editSensorChart";
import AddTeamMember from "./components/views/addTeamMember";
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
                        <Route path="/groups-of-sensors/" exact component={GroupsOfSensors}/>
                        <Route path="/add/groups-of-sensors" exact component={AddGroupOfSensors}/>
                        <Route path="/groups-of-sensors/:id" exact component={GroupDetails}/>
                        <Route path="/groups-of-sensors/:id/edit" exact component={EditGroupOfSensors}/>
                        <Route path="/team" exact component={Team}/>
                        <Route path="/team/:id" exact component={TeamMemberDetails}/>
                        <Route path="/add/team" exact component={AddTeamMember}/>
                        <Route path="/team/:id/edit" exact component={EditPersonGroups}/>
                        <Route path="/contact" component={Contact}/>
                </UserViews>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
