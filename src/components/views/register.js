import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {ROUTE_LOGIN} from "../../iotConfig";
import {ButtonFunc} from "../buttons";
import {sendRegister} from "../../FakeFrontend/backendAuthConnector";
import {toast} from "react-toastify";

const Register = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    // const [company, setCompany] = useState("")
    const history = useHistory()


    const onSubmit = async (e) => {
        e.preventDefault()

        // sprawdzenie pól obowiązkowych
        if (!fname) {
            toast.error("Podaj imię")
            return
        }
        if (!lname) {
            toast.error("Podaj nazwisko")
            return
        }
        if (!email) {
            toast.error("Podaj email")
            return
        }
        if (!password) {
            toast.error("Podaj hasło")
            return
        }

        // czy password == password2
        if (password !== password2){
            toast.error("Oba hasła muszą być identyczne")
        }

        if (fname && lname && email && password && (password === password2)) {
            const resp = await sendRegister(fname,  lname, email, password)

            if (resp){
                if (resp.status === 200) {
                    console.log("[ Rejestracja ] udana")
                    // wyzerowanie wartosci pol
                    setFname("")
                    setLname("")
                    setEmail("")
                    setPassword("")
                    history.push(ROUTE_LOGIN)
                } else {
                    toast.error(`[ Rejestracja ] nieudana, status: ${resp.status}`);
                }
            }
        }
    }

    return (
        <div className="overlay-bgd">
            <div className="login-area">
                <div className="head-txt">Strona Rejestracji</div>
                <div className="white-register-area">
                    <input
                        type="text"
                        placeholder="imię"
                        className="input-login"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="nazwisko"
                        className="input-login"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                    />
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
                    <input
                        type="password"
                        placeholder="powtórz hasło"
                        className="input-login"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                    <ButtonFunc
                        text="Rejestruj"
                        onClick={(e) => onSubmit(e)}
                    />
                </div>
                <div className="mrg-tb txt-center">Masz już konto? <br/>
                    <Link to="/login">Zaloguj się!</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;