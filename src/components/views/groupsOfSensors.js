import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";
import ButtonFunc from "../buttonFunc";
import ListObjects from "../listObjects";

const GroupsOfSensors = () => {

    return(
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc
                    text={"nowa grupa"}
                    add={true}
                    link={"/add/groups-of-sensors"}
                />
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">Grupy czujników</div>
                    <div className="white-space top-contact">
                            <ListObjects list={getGroupsOfSensors} type={"groups-of-sensors"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupsOfSensors;