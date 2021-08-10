import axios from "axios";
import {useState} from "react";
import {Link} from "react-router-dom";

const Login = ({onAdd}) => {
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
        // onAdd({ email, password })

        // wyzerowanie wartosci pol
        setEmail("")
        setPassword("")

        // wyslanie POST
        axios.post('/cgi-bin/dezd', {
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
                <h2>Strona Logowania</h2>
                <form onSubmit={onSubmit} className="white-space no-contact centered width-700">
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
                        className="btn btn-purple btn-func mrg-tb"
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