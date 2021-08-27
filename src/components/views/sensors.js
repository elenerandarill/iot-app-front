import getSensors from "../../FakeBackend/getSensors";
import ButtonFunc from "../buttonFunc";
import ListObjects from "../listObjects";

const Sensors = () => {

    return (
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc
                    text={"zakup czujniki"}
                    add={true}
                    link=""
                />
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">Twoje czujniki</div>
                    <div className="white-space top-contact">
                        <ListObjects list={getSensors} type={"sensor"}/>
                    </div>
                </div>
            </div>
        </div>
    )}

export default Sensors;