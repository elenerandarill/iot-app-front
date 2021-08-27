import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";
import ButtonFunc from "../buttonFunc";
import ListObjects from "../listObjects";
import {Link} from "react-router-dom";
import {GroupOfSensors} from "../../FakeBackend/getGroupsOfSensors";

/**
 * @param group {GroupOfSensors}
 * @returns {JSX.Element}
 */
export const groupObjectRenderer = (group) => {
    return (
        <Link
            key={group.id}
            to={`/groups-of-sensors/${group.id}`}
        >
            <div className={"object shadow" + (group.assigned.length === 0 ? " mark-as-new" : "")}>
                <div className="txt-semibold">{group.getDisplayName()}</div>
            </div>
        </Link>
    )
}

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
                            <ListObjects list={getGroupsOfSensors} objectRenderer={groupObjectRenderer}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupsOfSensors;