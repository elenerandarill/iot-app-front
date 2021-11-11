import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {sendLogin} from "../../FakeFrontend/backendAuthConnector";
import {ROUTE_HOME, URL_REGISTER} from "../../iotConfig";
import {ButtonFunc} from "../buttons";
import * as authService from "../../authService";
import {handleUnauthorizedException} from "../../FakeFrontend/backendConnector";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const history = useHistory()

    const onLogin = () => {
        if (!email) {
            // TODO: toastify
            alert("Podaj email")
            return
        }
        if (!password) {
            // TODO: toastify
            alert("Podaj hasło")
            return
        }

        if (email && password) {
            sendLogin(email, password)
                .then((body) => {
                    setEmail("")
                    setPassword("")
                    authService.login(
                        body["USRID"], body["SESID"], body["UFNAME"], body["ULNAME"]
                    )

                    history.push(ROUTE_HOME)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    return (
        <div className="overlay-bgd">
            <div className="login-area">
                <div className="head-txt">Strona Logowania</div>

                <div className="white-login-area">
                    <input
                        type="email"
                        placeholder="email"
                        className="input-login"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="hasło"
                        className="input-login"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <ButtonFunc
                        text="Zaloguj"
                        onClick={() => onLogin()}
                    />
                    <div>Nie pamiętasz hasła?</div>
                </div>

                <div className="mrg-tb txt-center">Nie posiadasz konta? <br/>
                    <Link to={URL_REGISTER}>Zarejestruj się!</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;