// import plus from "../../media/plus.svg";
import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";
import SearchBox from "../searchBox";
import { Link } from "react-router-dom";
import dot from "../../media/dot.svg";
import ButtonFunc from "../buttonFunc";
import getSensors from "../../FakeBackend/getSensors";
import ListAssignedObjects from "../listAssignedObjects";
import ListObjects from "../listObjects";

const GroupsOfSensors = () => {

    return(
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc text={"nowa grupa"} add="yes"/>
            </div>

            <div className="content-3x">
                <div className="content-srodek">

                    <div className="headline-color btn-section">Grupy czujników</div>
                    <div className="white-space top-contact">
                        <div className="centered"><SearchBox/></div>
                        <div className="object-container">

                            <ListObjects list={getGroupsOfSensors} type={"group"}/>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GroupsOfSensors;