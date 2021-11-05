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
import {
    ROUTE_CONTACT,
    ROUTE_HOME,
    ROUTE_LOGIN,
    ROUTE_NOTIFS_LIST,
    ROUTE_NOTIFS_NEW,
    ROUTE_REGISTER,
    ROUTE_SENSOR_DETAILS,
    ROUTE_SENSOR_EDIT,
    ROUTE_SENSOR_EDIT_CHART,
    ROUTE_SENSOR_LIST,
    ROUTE_SGROUP_NEW,
    ROUTE_SGROUP_DETAILS,
    ROUTE_SGROUP_EDIT,
    ROUTE_SGROUP_LIST,
    ROUTE_TMEMBER_NEW,
    ROUTE_TMEMBER_DETAILS,
    ROUTE_TMEMBER_SENSORS_EDIT,
    ROUTE_TMEMBER_SGROUPS_EDIT,
    ROUTE_TMEMBER_REM,
    ROUTE_SGROUP_DEL,
    ROUTE_RESTART, ROUTE_TEAMS_LIST, ROUTE_TEAM_DETAILS, ROUTE_TEAM_NEW, ROUTE_TEAM_EDIT, ROUTE_TEAM_DEL
} from "./iotConfig";
import RemoveTeamMember from "./components/views/team/removeTeamMember";
import DeleteSGroup from "./components/views/sGroups/deleteSgroup";
import PrivateRoute from "./components/privateRoute";
import NotFound from "./components/views/notFound";
import Restart from "./components/views/restart";
import Teams from "./components/views/team/teams";
import NewTeam from "./components/views/team/newTeam";
import EditTeam from "./components/views/team/editTeam";
import DeleteTeam from "./components/views/team/deleteTeam";


function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path={ROUTE_RESTART} exact component={Restart}/>
                <Route path={ROUTE_LOGIN} exact component={Login}/>
                <Route path={ROUTE_REGISTER} exact component={Register}/>
                <Route path="/test" exact component={Test}/>

                <PrivateRoute path={ROUTE_HOME} exact component={Homepage}/>
                <PrivateRoute path={ROUTE_NOTIFS_LIST} exact component={Alerts}/>
                <PrivateRoute path={ROUTE_NOTIFS_NEW} exact component={NewAlert}/>
                <PrivateRoute path={ROUTE_SENSOR_LIST} exact component={Sensors}/>
                <PrivateRoute path={ROUTE_SENSOR_DETAILS(`:id`)} exact component={SensorDetails}/>
                <PrivateRoute path={ROUTE_SENSOR_EDIT(`:id`)} exact component={EditSensorGroups}/>
                <PrivateRoute path={ROUTE_SENSOR_EDIT_CHART(`:id`)} exact component={EditSensorChart}/>
                <PrivateRoute path={ROUTE_SGROUP_LIST} exact component={SGroups}/>
                <PrivateRoute path={ROUTE_SGROUP_NEW} exact component={NewSGroup}/>
                <PrivateRoute path={ROUTE_SGROUP_DETAILS(`:id`)} exact component={SGroupDetails}/>
                <PrivateRoute path={ROUTE_SGROUP_EDIT(`:id`)} exact component={EditSGroup}/>
                <PrivateRoute path={ROUTE_SGROUP_DEL(`:id`)} exact component={DeleteSGroup}/>
                <PrivateRoute path={ROUTE_TEAMS_LIST} exact component={Teams}/>
                <PrivateRoute path={ROUTE_TEAM_DETAILS(`:id`)} exact component={TeamDetails}/>
                <PrivateRoute path={ROUTE_TEAM_EDIT(`:id`)} exact component={EditTeam}/>
                <PrivateRoute path={ROUTE_TEAM_DEL(`:id`)} exact component={DeleteTeam}/>
                <PrivateRoute path={ROUTE_TEAM_NEW} exact component={NewTeam}/>
                <PrivateRoute path={ROUTE_TMEMBER_NEW} exact component={NewTeamMember}/>
                <PrivateRoute path={ROUTE_TMEMBER_DETAILS(`:id`)} exact component={TeamMemberDetails}/>
                <PrivateRoute path={ROUTE_TMEMBER_SGROUPS_EDIT(`:id`)} exact component={EditMemberSgroups}/>
                <PrivateRoute path={ROUTE_TMEMBER_SENSORS_EDIT(`:id`)} exact component={EditMemberSensors}/>
                <PrivateRoute path={ROUTE_TMEMBER_REM(`:id`)} exact component={RemoveTeamMember}/>
                <PrivateRoute path={ROUTE_CONTACT} component={Contact}/>

                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
