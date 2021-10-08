import React from 'react';
import {Link} from "react-router-dom";
import {ROUTE_HOME} from "../../iotConfig";

const NotFound = () => {
    return (
        <div className="overlay-bgd">
            <div className="login-area">

                <div className="white-space no-contact centered">
                    <h1>404</h1>
                    <div className="head-txt">nie znaleziono takiej strony</div>
                </div>

                <Link to={ROUTE_HOME} >
                    Strona główna
                </Link>
            </div>
        </div>
    );
};

export default NotFound;