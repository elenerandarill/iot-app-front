import done from "../../media/done.svg";
import del from "../../media/delete.svg";
import ActionIcon from "./ActionIcon";
import ListAlerts from "./ListAlerts";
import {newAlerts} from "../../FakeBackend/alerts";
import {oldAlerts} from "../../FakeBackend/alerts";
import plus from "../../media/plus.svg";
import AlertDetailView from "./AlertDetailView";
import {useState} from "react";


const Alerts = () => {
    const[showDetails, setShowDetails] = useState(undefined)

    return (
        <div className="main">
            <div className="main-func-buttons">
                <button className="btn btn-purple btn-func insert-button">
                    <img src={plus} className="icon-plus" alt="dodaj wartość"/>
                    <p>dodaj nowy alert</p>
                </button>
            </div>

            <div className="main-split">
                {/* Lista alertow nowych */}
                <div className="alerts-new">
                    <div className="btn-purple btn-section">Twoje alerty</div>
                    <div className="white-space white-contact">
                        <div className="btn btn-small txt-right mrg-r">
                            oznacz wszystkie jako przeczytane
                        </div>
                        {newAlerts.length === 0
                        ? <div>Brak nowych alertów.</div>
                        : <ListAlerts
                                list={newAlerts}
                                showDetails={showDetails}
                                onClick={(a) => setShowDetails(a)}
                            />
                        }
                    </div>
                </div>

                {showDetails && <AlertDetailView
                    a={showDetails}
                    onClick={() => setShowDetails(undefined)}
                />}




                <div className="alerts-old">
                    <div className="btn btn-purple btn-section">historia alertów</div>
                    <div className="white-space white-contact">
                        {oldAlerts.map((a) =>
                            <div key={a.id} className="alert-msg alert-old">
                                <p>{a.time} /{a.date} /
                                    <b> czujnik: {a.sensor} </b>
                                    / {a.msg}
                                </p>
                                <ActionIcon action="del"/>
                            </div>)}
                    </div>
                </div>

                {/*<i className="fas fa-times fa-lg" style={{color: "red"}}></i>*/}
                {/*<i className="fas fa-check fa-lg"></i>*/}
                {/* ------------------------------- details for the new alert */}


            </div>
        </div>
    )
}

export default Alerts;