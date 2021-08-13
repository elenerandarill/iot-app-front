import plus from "../../media/plus.svg";
import sensorGroups from "../../FakeBackend/sensorGroups";
import SearchBox from "../SearchBox";
import { Link } from "react-router-dom";
import dot from "../../media/dot.svg";
import ButtonFunc from "../ButtonFunc";

const SensorGroups = () => {

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
                            {sensorGroups.map(sg =>
                                <Link key={sg.id}
                                      to={`/sensor-groups/${sg.id}`}
                                      sensor_id={sg.id}
                                      className={sg.sensors.length === 0
                                          ? "object shadow obj-free"
                                          : "object shadow"}
                                >
                                    {sg.name ? sg.name
                                        : <><img src={dot} alt="new" height={10}/>
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

export default SensorGroups;