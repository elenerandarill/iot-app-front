// import plus from "../../media/plus.svg";
import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";
import SearchBox from "../searchBox";
import { Link } from "react-router-dom";
import dot from "../../media/dot.svg";
import ButtonFunc from "../buttonFunc";

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

                            {getGroupsOfSensors.map(sg =>
                                <Link key={sg.id}
                                      to={`/groups-of-sensors/${sg.id}`}
                                      sensor_id={sg.id}
                                      className={sg.sensors.length === 0
                                          ? "object shadow obj-free"
                                          : "object shadow"}
                                >
                                    {sg.name ? sg.name
                                        : <><img src={dot} alt="nie przypisano" height={10}/>
                                            <div className="mrg-l">{sg.sn}</div>
                                        </>}
                                </Link>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GroupsOfSensors;