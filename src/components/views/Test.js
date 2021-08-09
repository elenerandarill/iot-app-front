import axios from "axios";

const Test = () => {

    const onSubmit = (e) => {
        // powstrzyma form przed automatycznym wyslaniem, zeby mozna bylo zrobic walidacje
        e.preventDefault()

        // Make a request for a user with a given ID
        axios.post('/cgi-bin/dezd', {
            glodny: "kanapka",
            czlowiek: "bigos",
            zamawia: "kaczka",
            kebaba: "boczek",
        })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    return (
        <div className="overlay-bgd">
            <div className="test-area">
            <h2>Wysłanie testowego requesta</h2><br/>
            <button onClick={onSubmit} className="btn btn-purple btn-func test-btn">
                Klik!
            </button>
        </div>
        </div>
    )
}

export default Test;