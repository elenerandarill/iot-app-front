import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import BodySection from "./components/MainSection";
import TopBar from "./components/TopBar";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Homepage from "./components/views/Homepage";
import Alerts from "./components/views/Alerts";
import Sensors from "./components/views/Sensors";
import SensorGroups from "./components/views/SensorGroups";
import Team from "./components/views/Team";
import Contact from "./components/views/Contact";


function App() {
  return (
      <BrowserRouter>
          <div className="container">

              <SideBar />

              <Route path="/" exact>
                  <Homepage/>
              </Route>
              <Route path="/alerts" exact>
                  <Alerts/>
              </Route>
              <Route path="/sensors" exact>
                  <Sensors/>
              </Route>
              <Route path="/sensor-groups" exact>
                  <SensorGroups/>
              </Route>
              <Route path="/team" exact>
                  <Team/>
              </Route>
              <Route path="/contact" exact>
                  <Contact/>
              </Route>
              {/*<Route path="/logout" exact>*/}
              {/*    <Logout/>*/}
              {/*</Route>*/}

              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
