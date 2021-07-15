import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import BodySection from "./components/MainSection";
import TopBar from "./components/TopBar";


function App() {
  return (
    <div className="container">
        <SideBar />
        <TopBar/>
        <BodySection className="body-container"/>
        <Footer/>
    </div>
  );
}

export default App;
