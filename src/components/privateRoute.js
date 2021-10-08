import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {ROUTE_LOGIN} from "../iotConfig";
import * as authService from "../authService";

const PrivateRoute = ({component: Component, render, ...rest}) => {
    const loggedUser = authService.getLoggedUser()

    return (<Route
        {...rest}
        render={props => {
            if (!loggedUser) {
                return (
                    <Redirect to={{
                    pathname: ROUTE_LOGIN,
                    state: {from: props.location}
                    }}/>
                );
            }

            return Component ? <Component {...props}/> : render(props);
        }}
    />);
};

export default PrivateRoute