import { Link } from "react-router-dom";
// import plus from "../../media/plus.svg";
import sensors from "../../FakeBackend/sensors";
import SearchBox from "../SearchBox";
import dot from "../../media/dot.svg";
import ButtonFunc from "../ButtonFunc";

const Sensors = () => {
    const unsignedSensors = (list) => {
        list.filter(s => s.groups.length === 0)
    }

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
                            {sensors.map(s =>
                                <Link key={s.id}
                                      to={`/sensors/${s.id}`}
                                      sensor_id={s.id}
                                     className={s.groups.length === 0 ? "object shadow obj-free" : "object shadow"}
                                >
                                    {s.name? s.name
                                        : <><img src={dot} alt="new" height={10} />
                                            <div className="mrg-l">{s.sn}</div></>}
                                </Link>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )}

export default Sensors;