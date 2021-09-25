import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {sendRequest} from "../../FakeFrontend/backendConnector";
import {ROUTE_HOME, URL_LOGIN} from "../../iotConfig";
import {ButtonFunc} from "../buttons";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()

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

        const handleSend = async () => {
            return await sendRequest(
                URL_LOGIN,
                {email: email, password: password}
            )
        }

        if (email && password) {
            const resp = handleSend()

            if (resp.status === 200) {
                console.log("[ Logowanie ] udane")
                // wyzerowanie wartosci pol
                setEmail("")
                setPassword("")
                history.push(ROUTE_HOME)
            } else {
                // TODO: toastify
                alert(`[ Logowanie ] nieudane, status: ${resp.status}`);
            }
        }
    }



    return (
        <div className="overlay-bgd">
            <div className="login-area">
                <div className="head-txt">Strona Logowania</div>

                <form
                    // onSubmit={onSubmit}
                    className="white-login-area"
                >
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
                        onClick={(e) => onSubmit(e)}
                    />
                    <div>Nie pamiętasz hasła?</div>
                </form>

                <div className="mrg-tb txt-center">Nie posiadasz konta? <br/>
                    <Link to="/register">Zarejestruj się!</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;