import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
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
import EditMemberSgroups from "./components/views/team/editMemberSgroups";
import EditMemberSensors from "./components/views/team/editMemberSensors";
import EditSensorChart from "./components/views/sensors/editSensorChart";
import AddTeamMember from "./components/views/team/addTeamMember";
import AddNewAlert from "./components/views/alerts/addNewAlert";
import {
    ROUTE_CONTACT,
    ROUTE_HOME, ROUTE_LOGIN,
    ROUTE_NOTIFS_LIST,
    ROUTE_NOTIFS_NEW, ROUTE_REGISTER,
    ROUTE_SENSOR_DETAILS,
    ROUTE_SENSOR_EDIT,
    ROUTE_SENSOR_EDIT_CHART,
    ROUTE_SENSOR_LIST,
    ROUTE_SGROUP_ADD,
    ROUTE_SGROUP_DETAILS,
    ROUTE_SGROUP_EDIT,
    ROUTE_SGROUP_LIST,
    ROUTE_TMEMBER_ADD, ROUTE_TMEMBER_DETAILS,
    ROUTE_TMEMBER_LIST, ROUTE_TMEMBER_SENSORS_EDIT, ROUTE_TMEMBER_SGROUPS_EDIT
} from "./iotConfig";
// import {getUnreadAlertsCount} from "./FakeFrontend/backendAlertConnector";
// import PopAlerts from "./components/PopAlerts";
// import {Notifications} from "react-push-notification";


function App() {
    // const [unreadAlerts, setUnreadAlerts] = useState()
    //
    // const refreshAlertCount = () => {
    //     getUnreadAlertsCount()
    //             .then((count) => {setUnreadAlerts(count)})
    // }

    return (
        <BrowserRouter>
            <Switch>
                <Route path={ROUTE_LOGIN} exact component={Login}/>
                <Route path={ROUTE_REGISTER} exact component={Register}/>
                <Route path="/test" exact component={Test}/>

                <UserViews>
                    <Route path={ROUTE_HOME} exact component={Homepage}/>
                    <Route path={ROUTE_NOTIFS_LIST} exact component={Alerts}/>
                    <Route path={ROUTE_NOTIFS_NEW} exact component={AddNewAlert}/>
                    <Route path={ROUTE_SENSOR_LIST} exact component={Sensors}/>
                    <Route path={ROUTE_SENSOR_DETAILS(`:id`)} exact component={SensorDetails}/>
                    <Route path={ROUTE_SENSOR_EDIT(`:id`)} exact component={EditSensorGroups}/>
                    <Route path={ROUTE_SENSOR_EDIT_CHART(`:id`)} exact component={EditSensorChart}/>
                    <Route path={ROUTE_SGROUP_LIST} exact component={SGroups}/>
                    <Route path={ROUTE_SGROUP_ADD} exact component={AddSGroup}/>
                    <Route path={ROUTE_SGROUP_DETAILS(`:id`)} exact component={SGroupDetails}/>
                    <Route path={ROUTE_SGROUP_EDIT(`:id`)} exact component={EditSGroup}/>
                    <Route path={ROUTE_TMEMBER_LIST} exact component={Team}/>
                    <Route path={ROUTE_TMEMBER_ADD} exact component={AddTeamMember}/>
                    <Route path={ROUTE_TMEMBER_DETAILS(`:id`)} exact component={TeamMemberDetails}/>
                    <Route path={ROUTE_TMEMBER_SGROUPS_EDIT(`:id`)} exact component={EditMemberSgroups}/>
                    <Route path={ROUTE_TMEMBER_SENSORS_EDIT(`:id`)} exact component={EditMemberSensors}/>
                    <Route path={ROUTE_CONTACT} component={Contact}/>
                </UserViews>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
