import { Link } from "react-router-dom";
// import plus from "../../media/plus.svg";
import dot from "../../media/dot.svg";
import getSensors from "../../FakeBackend/getSensors";
import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";
import SearchBox from "../searchBox";
import ButtonFunc from "../buttonFunc";

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

                            {getSensors.map(s =>
                                <Link
                                    key={s.id}
                                    to={`/sensors/${s.id}`}
                                    // sensor_id={s.id}
                                    className={s.groups.length === 0
                                        ? "object shadow obj-free"
                                        : "object shadow"}
                                >
                                    {s.name.trim() === ""
                                        ? <><img src={dot} alt="nie przypisano" height={10} />
                                            <div className="mrg-l">{s.sn}</div></>
                                        :s.name
                                    }
                                </Link>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )}

export default Sensors;