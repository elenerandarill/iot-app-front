import React from "react";
import { useHistory} from "react-router-dom";
import {ROUTE_HOME, URL_RESTART} from "../../iotConfig";
import {sendRequest} from "../../FakeFrontend/backendConnector";


const Restart = () => {
    let history = useHistory();

    sendRequest(URL_RESTART)
        .then(() => history.push(ROUTE_HOME))

    return (
        <div>RESTART</div>
    )
}

export default Restart;
