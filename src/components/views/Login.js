import { useState } from "react";

const Login = ({ onAdd }) => {
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
        onAdd({ email, password })

        // wyzerowanie wartosci pol
        setEmail("")
        setPassword("")
    }

    return (
        <div className="overlay-bgd">
            <h2>Strona Logowania</h2>
            <form onSubmit={onSubmit} className="">
                <label>email</label>
                <input
                    type="email"
                    placeholder="login"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>password</label>
                <input
                    type="email"
                    placeholder="hasło"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="submit"
                    value="Zaloguj"
                />
            </form>
            <div>Nie pamiętasz hasła?</div>
            <div>Nie posiadasz konta?</div>
            <div>Zarejestruj się!</div>
        </div>
    )
}

export default Login;