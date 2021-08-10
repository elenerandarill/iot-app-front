import TopBar from "../TopBar";
import BodySection from "../MainSection";
import plus from "../../media/plus.svg";
import sensors from "../../FakeBackend/sensors";
import done from "../../media/done.svg";
import del from "../../media/delete.svg";
import sensorGroups from "../../FakeBackend/sensorGroups";
import SearchBox from "../SearchBox";

const SensorGroups = () => {

    return (
        <div className="main">
            <div className="main-func-buttons">
                <button className="btn btn-purple btn-func insert-button">
                    <img src={plus} className="icon-plus" alt="dodaj wartość"/>
                    <p>nowa grupa</p>
                </button>
            </div>

            <div className="content-split">
                <div className="alerts-list">
                    <p className="btn-purple btn-section">grupy czujników (0)</p>
                    <div className="white-space top-contact">
                        <div className="object-container">
                            {/* tylko nowe sensory */}
                            {sensorGroups.map(sg =>
                                <div key={sg.id} className="object obj-free">{sg.name ? sg.name : sg.sn}</div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="alerts-old">
                    <p className="btn-purple btn-section">czujniki wybranej grupy</p>
                    <div className="white-space top-contact">
                        <SearchBox/>
                        <div className="object-container">
                            jak ktos zaznaczy grupę powyżej<br/>
                            to tutaj pokażą się przynależące do niej czujniki.
                        </div>
                    </div>
                </div>

                {/* ------------------------------- details for the picked new sensor */}
                <div className="alert-open alert-new-open">
                    <div className="white-space no-contact">
                        <div className="obj-details">
                            <b>nazwa grupy</b>
                            <div>id grupy</div>
                            <br/>
                            avTemp: "22"<br/> avHumid: "55%"<br/> avWind: "14"
                            <div className="btn mrg-tb">mapa</div>
                            <div className="object-container">
                                <img src={done} alt="mark as read" className="btn action-icon mrg-0"/>
                                <img src={del} alt="mark as read" className="btn action-icon mrg-0"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SensorGroups;