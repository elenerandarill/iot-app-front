import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Homepage from "./components/views/homepage";
import Alerts from "./components/views/alerts/alerts";
import Sensors from "./components/views/sensors/sensors";
import SGroups from "./components/views/sGroups/sGroups";
import TeamDetails from "./components/views/team/teamDetails";
import Contact from "./components/views/contact";
import Login from "./components/views/login";
import Register from "./components/views/register";
import SensorDetails from "./components/views/sensors/sensorDetails";
import SGroupDetails from "./components/views/sGroups/sGroupDetails";
import TeamMemberDetails from "./components/views/team/teamMemberDetails";
import Test from "./components/views/test";
import NewSGroup from "./components/views/sGroups/newSGroup";
import EditSensorGroups from "./components/views/sensors/editSensorGroups";
import EditSGroup from "./components/views/sGroups/editSGroup";
import EditMemberSgroups from "./components/views/team/editMemberSgroups";
import EditMemberSensors from "./components/views/team/editMemberSensors";
import EditSensorChart from "./components/views/sensors/editSensorChart";
import NewTeamMember from "./components/views/team/newTeamMember";
import NewAlert from "./components/views/alerts/newAlert";
import * as config from "./iotConfig";
import RemoveTeamMember from "./components/views/team/removeTeamMember";
import DeleteSGroup from "./components/views/sGroups/deleteSgroup";
import PrivateRoute from "./components/privateRoute";
import NotFound from "./components/views/notFound";
import Restart from "./components/views/restart";
import Teams from "./components/views/team/teams";
import NewTeam from "./components/views/team/newTeam";
import EditTeam from "./components/views/team/editTeam";
import DeleteTeam from "./components/views/team/deleteTeam";
import UserProfile from "./components/views/profile/userProfile";
import AdminPanel from "./components/views/admin/adminPanel";
import DeleteProfile from "./components/views/profile/deleteProfile";


function App() {

    return (
        <BrowserRouter>
            <Switch>

                <Route path={config.ROUTE_RESTART} exact component={Restart}/>
                <Route path={config.ROUTE_LOGIN} exact component={Login}/>
                <Route path={config.ROUTE_REGISTER} exact component={Register}/>
                <Route path={config.ROUTE_PROFILE(`:id`)} exact component={UserProfile}/>
                <Route path={config.ROUTE_PROFILE_DEL(`:id`)} exact component={DeleteProfile}/>
                <Route path="/test" exact component={Test}/>

                <PrivateRoute path={config.ROUTE_ADMIN} component={AdminPanel}/>

                <PrivateRoute path={config.ROUTE_HOME} exact component={Homepage}/>
                <PrivateRoute path={config.ROUTE_NOTIFS_LIST} exact component={Alerts}/>
                <PrivateRoute path={config.ROUTE_NOTIFS_NEW} exact component={NewAlert}/>
                <PrivateRoute path={config.ROUTE_SENSOR_LIST} exact component={Sensors}/>
                <PrivateRoute path={config.ROUTE_SENSOR_DETAILS(`:id`)} exact component={SensorDetails}/>
                <PrivateRoute path={config.ROUTE_SENSOR_EDIT(`:id`)} exact component={EditSensorGroups}/>
                <PrivateRoute path={config.ROUTE_SENSOR_EDIT_CHART(`:id`)} exact component={EditSensorChart}/>
                <PrivateRoute path={config.ROUTE_SGROUP_LIST} exact component={SGroups}/>
                <PrivateRoute path={config.ROUTE_SGROUP_NEW} exact component={NewSGroup}/>
                <PrivateRoute path={config.ROUTE_SGROUP_DETAILS(`:id`)} exact component={SGroupDetails}/>
                <PrivateRoute path={config.ROUTE_SGROUP_EDIT(`:id`)} exact component={EditSGroup}/>
                <PrivateRoute path={config.ROUTE_SGROUP_DEL(`:id`)} exact component={DeleteSGroup}/>
                <PrivateRoute path={config.ROUTE_TEAMS_LIST} exact component={Teams}/>
                <PrivateRoute path={config.ROUTE_TEAM_DETAILS(`:id`)} exact component={TeamDetails}/>
                <PrivateRoute path={config.ROUTE_TEAM_EDIT(`:id`)} exact component={EditTeam}/>
                <PrivateRoute path={config.ROUTE_TEAM_DEL(`:id`)} exact component={DeleteTeam}/>
                <PrivateRoute path={config.ROUTE_TEAM_NEW} exact component={NewTeam}/>
                <PrivateRoute path={config.ROUTE_TMEMBER_NEW} exact component={NewTeamMember}/>
                <PrivateRoute path={config.ROUTE_TMEMBER_DETAILS(`:id`)} exact component={TeamMemberDetails}/>
                <PrivateRoute path={config.ROUTE_TMEMBER_SGROUPS_EDIT(`:id`)} exact component={EditMemberSgroups}/>
                <PrivateRoute path={config.ROUTE_TMEMBER_SENSORS_EDIT(`:id`)} exact component={EditMemberSensors}/>
                <PrivateRoute path={config.ROUTE_TMEMBER_REM(`:id`)} exact component={RemoveTeamMember}/>
                <PrivateRoute path={config.ROUTE_CONTACT} component={Contact}/>

                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
