import done from "../../media/done.svg";
import del from "../../media/delete.svg";
import ActionIcon from "./ActionIcon";
import ListAlerts from "./ListAlerts";
import alerts from "../../FakeBackend/alerts";
import plus from "../../media/plus.svg";
import AlertDetailView from "./AlertDetailView";
import {useState} from "react";
import SearchBox from "../SearchBox";


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

            <div className="content-alerts">

                <div className="flex-center">
                    <div className="flex-center-lr"/>
                    <div className="flex-centered alerts-list">
                        <div className="btn-purple btn-section">Twoje alerty</div>
                        <div className="white-space top-contact">
                            <SearchBox/>
                            <div className="btn btn-small txt-right mrg-r mrg-b">
                                oznacz wszystkie jako przeczytane
                            </div>
                            {alerts.length === 0
                                ? <div>Brak nowych alertów.</div>
                                : <ListAlerts
                                    list={alerts}
                                    showDetails={showDetails}
                                    onSelect={(a) => setShowDetails(a)}
                                />
                            }
                        </div>
                    </div>
                    <div className="flex-center-lr"/>
                </div>

                {/*<i className="fas fa-times fa-lg" style={{color: "red"}}></i>*/}
                {/*<i className="fas fa-check fa-lg"></i>*/}
            </div>
        </div>
    )
}

export default Alerts;