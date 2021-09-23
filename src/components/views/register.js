import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {sendRequest} from "../../FakeFrontend/backendConnector";
import {REGISTER_URL} from "../../iotConfig";
import {ButtonFunc} from "../buttons";

const Register = () => {
    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [company, setCompany] = useState("")
    const history = useHistory()


    const onSubmit = async (e) => {
        e.preventDefault()

        // sprawdzenie pól obowiązkowych
        if (!fname) {
            // TODO: toastify
            alert("Podaj imię")
            return
        }
        if (!lname) {
            // TODO: toastify
            alert("Podaj nazwisko")
            return
        }
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
        if (!company) {
            // TODO: toastify
            alert("Podaj nazwę firmy")
            return
        }

        // czy password == password2
        if (password !== password2){
            alert("Oba hasła muszą być identyczne")
        }

        const handleSend = async () => {
            return await sendRequest(
                REGISTER_URL,
                {
                    fname: fname,
                    mname: mname,
                    lname: lname,
                    email: email,
                    password: password,
                    company:company
                }
            )
        }

        if (fname && lname && email && password && company && (password === password2)) {
            const resp = await handleSend()

            if (resp){
                if (resp.status === 200) {
                    console.log("[ Rejestracja ] udana")
                    // wyzerowanie wartosci pol
                    setFname("")
                    setMname("")
                    setLname("")
                    setEmail("")
                    setPassword("")
                    setCompany("")
                    history.push("/")
                } else {
                    // TODO: toastify
                    alert(`[ Rejestracja ] nieudana, status: ${resp.status}`);
                }
            }
        }
    }

    return (
        <div className="overlay-bgd">
            <div className="login-area">
                <div className="head-txt">Strona Rejestracji</div>
                <form
                    // onSubmit={onSubmit}
                    className="white-register-area"
                >
                    <input
                        type="text"
                        placeholder="imię"
                        className="input-login"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="drugie imię*"
                        className="input-login"
                        value={mname}
                        onChange={(e) => setMname(e.target.value)}
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
                    <input
                        type="company"
                        placeholder="nazwa firmy"
                        className="input-login"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    <ButtonFunc
                        text="Rejestruj"
                        onClick={(e) => onSubmit(e)}
                    />
                </form>
                <div className="mrg-tb txt-center">Masz już konto? <br/>
                    <Link to="/login">Zaloguj się!</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;