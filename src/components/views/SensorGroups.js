import TopBar from "../TopBar";
import BodySection from "../MainSection";
import plus from "../../media/plus.svg";
import sensors from "../../FakeBackend/sensors";
import done from "../../media/done.svg";
import sensorGroups from "../../FakeBackend/sensorGroups";

const SensorGroups = () => {
    return (
        <div className="main">
            <div className="main-func-buttons">
                <button className="btn btn-purple btn-func insert-button">
                    <img src={plus} className="icon-plus" alt="dodaj wartość"/>
                    <p>grupa</p>
                </button>
            </div>


            <div className="main-split">
                <div className="alerts-new">
                    <p className="btn-purple btn-section">wszystkie grupy (0)</p>
                    <div className="white-space white-contact">
                        {sensorGroups.map(sg =>
                            <div className="sensor-container">
                                <div className="sensor">{sg.title}</div>
                            </div>
                        )}
                    </div>
                </div>


                {/* ------------------------------- details for the new alert */}
                <div className="alert-open alert-new-open">
                    <div className="white-space white-separated">
                        <p className="alert-details-window">
                            <b>2021.10.13</b>
                            <p>czujnik: "moj-sad-011"</p>
                            <br/>
                            Stan baterii 15/100, ostatni raport otrzymano o 9:00
                            <div className="btn mrg-tb">zobacz&nbsp;czujnik</div>
                            <img src={done} alt="mark as read" className="btn action-icon mrg-0"/>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SensorGroups;