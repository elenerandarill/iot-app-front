import done from "../../media/done.svg";
import del from "../../media/delete.svg";
import ActionIcon from "./ActionIcon";
import {newAlerts} from "../../FakeBackend/alerts";
import {oldAlerts} from "../../FakeBackend/alerts";
import plus from "../../media/plus.svg";


const Alerts = () => {
    return (
        <div className="main">
            <div className="main-func-buttons">
                <button className="btn btn-purple btn-func insert-button">
                    <img src={plus} className="icon-plus" alt="dodaj wartość"/>
                    <p>dodaj nowy alert</p>
                </button>
            </div>

            <div className="main-split">
                <div className="alerts-new">
                    <p className="btn-purple btn-section">nowe alerty (0)</p>
                    <div className="white-space white-contact">
                        {newAlerts.length === 0
                        ? <div>Brak nowych alertów.</div>
                        : newAlerts.map((a) =>
                            <div className="alert-msg alert-new">
                                <p>{a.date} /
                                    <b> czujnik: {a.sensor}</b>
                                    / {a.msg}
                                </p>
                                <ActionIcon action="done"/>
                            </div>)
                        }
                    </div>
                </div>
                <div className="alerts-old">
                    <p className="btn btn-purple btn-section">historia alertów</p>
                    <div className="white-space white-contact">
                        {oldAlerts.map((a) =>
                            <div className="alert-msg alert-old">
                                <p>{a.date} /
                                    <b> czujnik: {a.sensor}</b>
                                    / {a.msg}
                                </p>
                                <ActionIcon action="del"/>
                            </div>)}
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
                {/* details for the old alert */}
                <div className="alert-open alert-old-open">
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

export default Alerts;