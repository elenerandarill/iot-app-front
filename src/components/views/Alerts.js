import ListAlerts from "./ListAlerts";
import alerts from "../../FakeBackend/alerts";
import plus from "../../media/plus.svg";
import {useState} from "react";
import SearchBox from "../SearchBox";
import ButtonFunc from "../ButtonFunc";


const Alerts = () => {
    const [showDetails, setShowDetails] = useState(undefined)

    return (
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc text={"alert"} add="yes"/>
                <ButtonFunc text={"przeczytano wszystkie"}/>
                <ButtonFunc text={"usuń wszystkie"}/>
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        Twoje alerty
                    </div>
                    <div className="white-space top-contact">
                        <div className="position-cent">
                            <SearchBox/>
                        </div>
                        {/*<div className="shadow no-contact fx-between paint-gray01">*/}
                        {/*    <div className="btn btn-color">oznacz wszystkie <br/> jako przeczytane</div>*/}
                        {/*    <div className="btn btn-color">skasuj wszystkie<br/> alerty</div>*/}
                        {/*</div>*/}

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

                {/*<i className="fas fa-times fa-lg" style={{color: "red"}}></i>*/}
                {/*<i className="fas fa-check fa-lg"></i>*/}
            </div>
        </div>
    )
}

export default Alerts;