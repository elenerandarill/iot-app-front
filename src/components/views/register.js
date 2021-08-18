import axios from "axios";
import {useState} from "react";
import {Link} from "react-router-dom";

const Register = ({onAdd}) => {
    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const onSubmit = (e) => {
        // powstrzyma form przed automatycznym wyslaniem, zeby mozna bylo zrobic walidacje
        e.preventDefault()

        // jesli nie wpisano nic w email
        if (!email) {
            alert("Podaj email")
            return
        }
        // jesli wpisano...
        onAdd({ fname, mname, lname, email, password })

        // wyslanie POST
        axios.post('/cgi-bin/dezd', {
            fname: fname,
            mname: mname,
            lname: lname,
            email: email,
            password: password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="overlay-bgd">
            <div className="login-area">
                <h2>Strona Rejestracji</h2>
                <form onSubmit={onSubmit} className="white-space no-contact centered width-700">
                    <input
                        type="text"
                        placeholder="imię"
                        className="input"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="drugie imię*"
                        className="input"
                        value={mname}
                        onChange={(e) => setMname(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="nazwisko"
                        className="input"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="login"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="hasło"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="submit"
                        value="Zaloguj"
                        className="btn btn-color"
                    />
                </form>
                <div className="mrg-tb txt-center">Masz już konto? <br/>
                    <Link to="/register">Zaloguj się!</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;