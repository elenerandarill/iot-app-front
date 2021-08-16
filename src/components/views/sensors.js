import { Link } from "react-router-dom";
// import plus from "../../media/plus.svg";
import dot from "../../media/dot.svg";
import getSensors from "../../FakeBackend/getSensors";
import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";
import SearchBox from "../searchBox";
import ButtonFunc from "../buttonFunc";
import ListAssignedObjects from "../listAssignedObjects";
import ListObjects from "../listObjects";

const Sensors = () => {

    return (
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc text={"zakup czujniki"} add="yes"/>
            </div>

            <div className="content-3x">
                <div className="content-srodek">

                    <div className="headline-color">Twoje czujniki</div>
                    <div className="white-space top-contact">
                        <SearchBox/>
                        <div className="object-container">

                            <ListObjects list={getSensors} linkTo={"sensor"}/>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )}

export default Sensors;