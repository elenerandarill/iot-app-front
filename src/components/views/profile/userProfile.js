import React, {useEffect, useState} from 'react';
import UserViews from "../userViews";
import * as authService from "../../../authService" ;
import {InputString} from "../../attributes";
import {changeValue, handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";
import {useHistory, useParams} from "react-router-dom";
import {fetchUser} from "../../../FakeFrontend/backendMemberConnector";
import {ROUTE_PROFILE_DEL, ROUTE_SGROUP_DEL, ROUTE_SGROUP_LIST, URL_USER_SET} from "../../../iotConfig";
import {ButtonLink} from "../../buttons";

const UserProfile = () => {
    /** @type {LoggedUser|null} */
    let loggedUser = authService.getLoggedUser()
    const [user, setUser] = useState(
        /** @type {Member} */undefined)
    const history = useHistory()
    const {id} = useParams()

    useEffect(() => {
        fetchUser(id)
            .then(setUser)
            .catch(error => handleUnauthorizedException(error, history))
    },[])

    const refreshLoggedUser = (name, value) => {
        localStorage.setItem(name, value)
        loggedUser = authService.getLoggedUser()
    }

    const changeUserName = (newValue) =>
        changeValue(URL_USER_SET, "USRID", user.id, "UFNAME", newValue)
            .then(() => refreshLoggedUser())
            .catch(error => handleUnauthorizedException(error, history))


    if(!loggedUser || !user || user.id !== parseInt(loggedUser.id)){
        return (
            <UserViews>
                <div className="main">
                    <div className="position-cent centered">
                        <div className="head-txt">
                            nie masz dostępu do tej strony
                        </div>
                    </div>
                </div>
            </UserViews>
        )
    }

    return (
        <UserViews>
            <div className="main">
                <div className="buttons-container">
                        <ButtonLink
                            link={ROUTE_PROFILE_DEL(id)}
                            text="usuń"
                        />
                </div>

                    <div className="content-3x">
                        <div className="content-srodek">

                            <div className="headline-color">profil użytkownika</div>
                            <div className="white-space top-contact">

                                <div className="head-txt">dane osobowe</div>

                                <InputString
                                    label="imię"
                                    placeholder={user.fname}
                                    sendChange={(newValue) => changeUserName(newValue)
                                    }
                                />
                                <InputString
                                    label="nazwisko"
                                    placeholder={user.lname}
                                    sendChange={(newValue) => changeValue(
                                        URL_USER_SET, "USRID", user.id, "ULNAME", newValue)}
                                />
                                <InputString
                                    label="email"
                                    placeholder={user.email}
                                    sendChange={(newValue) => changeValue(
                                        URL_USER_SET, "USRID", user.id, "UEMAIL", newValue)}
                                />

                                <div className="head-txt">dane rozliczeniowe????</div>

                                <InputString
                                    label="numer VAT"
                                    placeholder="numer VAT?????" // TODO
                                    sendChange={(newValue) => changeValue(
                                        URL_USER_SET, "USRID", user.id, "UVATID", newValue)}
                                />

                                <div className="head-txt">dane adresowe</div>

                                <InputString
                                    label="ulica"
                                    placeholder={user.astreet}
                                    sendChange={(newValue) => changeValue(
                                        URL_USER_SET, "USRID", user.id, "UASTREET", newValue)}
                                />
                                <InputString
                                    label="numer budynku"
                                    placeholder={user.anumber}
                                    sendChange={(newValue) => changeValue(
                                        URL_USER_SET, "USRID", user.id, "UANUMBER", newValue)}
                                />
                                <InputString
                                    label="numer lokalu"
                                    placeholder={user.aaprtmnt}
                                    sendChange={(newValue) => changeValue(
                                        URL_USER_SET, "USRID", user.id, "UAAPRTMNT", newValue)}
                                />
                                <InputString
                                    label="miasto/wieś"
                                    placeholder={user.alocality}
                                    sendChange={(newValue) => changeValue(
                                        URL_USER_SET, "USRID", user.id, "UALOCALITY", newValue)}
                                />
                                <InputString
                                    label="kod pocztowy"
                                    placeholder={user.apostcode}
                                    sendChange={(newValue) => changeValue(
                                        URL_USER_SET, "USRID", user.id, "UAPOSTCODE", newValue)}
                                />
                                <InputString
                                    label="województwo"
                                    placeholder={user.aprovince}
                                    sendChange={(newValue) => changeValue(
                                        URL_USER_SET, "USRID", user.id, "UAPROVINCE", newValue)}
                                />
                                <InputString
                                    label="państwo"
                                    placeholder={user.acountry}
                                    sendChange={(newValue) => changeValue(
                                        URL_USER_SET, "USRID", user.id, "UACOUNTRY", newValue)}
                                />

                            </div>
                        </div>
                    </div>
                </div>
        </UserViews>
    );
};

export default UserProfile;