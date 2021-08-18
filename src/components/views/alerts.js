import ListAlerts from "./listAlerts";
import getAlerts from "../../FakeBackend/getAlerts";
import plus from "../../media/plus.svg";
import {useState} from "react";
import SearchBox from "../searchBox";
import ButtonFunc from "../buttonFunc";


const Alerts = () => {
    const [showDetails, setShowDetails] = useState(undefined)

    return (
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc text={"alert"} add={true}/>
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

                        <div className="object-container">
                        <ButtonFunc text={"przeczytano wszystkie"}/>
                        <ButtonFunc text={"usuń wszystkie"}/>
                        </div>

                        {getAlerts.length === 0
                            ? <div>Brak nowych alertów.</div>
                            : <ListAlerts
                                list={getAlerts}
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