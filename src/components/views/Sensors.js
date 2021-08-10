import TopBar from "../TopBar";
import BodySection from "../MainSection";
import plus from "../../media/plus.svg";
import sensors from "../../FakeBackend/sensors";
import {newAlerts, oldAlerts} from "../../FakeBackend/alerts";
import ActionIcon from "./ActionIcon";
import done from "../../media/done.svg";
import SearchBox from "../SearchBox";

const Sensors = () => {
    return (
        <div className="main">
            <div className="main-func-buttons">
                <button className="btn btn-purple btn-func insert-button">
                    <img src={plus} className="icon-plus" alt="dodaj wartość"/>
                    <p>zakup czujniki</p>
                </button>
            </div>

            <div className="main-split">
                <div className="alerts-new">
                    <p className="btn-purple btn-section">czujniki nieprzypisane (0)</p>
                    <div className="white-space white-contact">
                        <div className="object-container">
                        {/* tylko nowe sensory */}
                        {sensors.filter(s => s.groups.length === 0).map(s =>
                            <div key={s.id} className="object obj-free">{s.name? s.name : s.sn}</div>
                        )}
                        </div>
                    </div>
                </div>

                <div className="alerts-old">
                    <p className="btn-purple btn-section">wszystkie czujniki</p>
                    <div className="white-space white-contact">
                        <SearchBox/>
                        <div className="object-container">
                            {/* tylko przypisane sensory */}
                            {sensors.filter(s => s.groups.length > 0).map(s =>
                                <div key={s.id} className="object obj-owned">{s.name? s.name : s.sn}</div>
                            )}
                        </div>
                    </div>
                </div>

                {/* ------------------------------- details for the picked new sensor */}
                <div className="alert-open alert-new-open">
                    <div className="white-space white-separated">
                        <div className="obj-details">
                            <b>2021.10.13</b>
                            <div>czujnik: "moj-sad-011"</div>
                            <br/>
                            Stan baterii 15/100, ostatni raport otrzymano o 9:00
                            <div className="btn mrg-tb">zobacz&nbsp;czujnik</div>
                            <img src={done} alt="mark as read" className="btn action-icon mrg-0"/>
                        </div>
                    </div>
                </div>
                {/* details for the picked old sensor */}
                <div className="alert-open alert-old-open">
                    <div className="white-space white-separated">
                        <div className="obj-details">
                            <b>2021.10.13</b>
                            <div>czujnik: "moj-sad-011"</div>
                            <br/>
                            Stan baterii 15/100, ostatni raport otrzymano o 9:00
                            <div className="btn mrg-tb">zobacz&nbsp;czujnik</div>
                            <img src={done} alt="mark as read" className="btn action-icon mrg-0"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}

export default Sensors;