import {Link} from "react-router-dom";
import getGroupsOfSensors from "../../FakeBackend/getGroupsOfSensors";
import getSensors from "../../FakeBackend/getSensors";
import ButtonFunc from "../buttonFunc";
import ListAssignedObjects from "../listAssignedObjects";

const GroupDetails = (props) => {
    const id = props.match.params.id;

    const getGroup = (id) => {
        // zwraca liste!
        return getGroupsOfSensors.filter(s => s.id === id)[0]
    }

    const group = getGroup(id);

    return(
        <div className="main">
            <div className="buttons-container">
                <Link to="/groups-of-sensors">
                    <ButtonFunc text={"powrót do listy"}/>
                </Link>
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        {group.name}
                    </div>
                    <div className="white-space top-contact">

                        <div className="shadow object">
                            <div>NAZWA</div>
                            <div className="position-cent">
                                <input
                                    type="text"
                                    name="name"
                                    className="input"
                                    placeholder={group.name}
                                />
                            </div>
                        </div>

                        <div className="shadow object">
                            <div>NOTATKA</div>
                            <div className="position-cent">
                                <input
                                    type="text"
                                    name="notes"
                                    className="input"
                                    placeholder={group.notes === "" ? "Tu wpisz notatkę." : group.notes}
                                />
                            </div>
                        </div>

                        <div className="shadow no-contact centered pad-bot-15px">
                            <div className="mrg-tb">OSTATNI POMIAR</div>
                            <div className="position-cent">
                                <div className="txt-violet txt-semibold object-container">

                                    {Object.entries(group.measurements).map(([key, value]) =>
                                        <div key={key.toString()} className="mrg-tb mrg-lr">
                                            {key === "avTemp" && "śr. temperatura"}
                                            {key === "avHumid" && "śr. wilgotność"}
                                            {key === "avWind" && "śr. prędkość wiatru"}
                                            :<br/>
                                            <h2>{value}
                                                {key === "avTemp" && " °C"}
                                                {key === "avWind" && " km/h"}
                                            </h2>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>

                        <div className="shadow no-contact centered pad-bot-15px">
                            <div className="mrg-tb">CZUJNIKI ({group.sensors.length})</div>
                            <div className="position-cent">
                                <div className="object-container-grid">
                                    <div className="edit-objs-btn centered">
                                        <ButtonFunc text={"edytuj"}/>
                                    </div>
                                    <div className="object-container txt-violet txt-semibold">

                                        {group.sensors.length === 0
                                            ? <div className="centered">nie przypisano do żadnej grupy</div>
                                            : <ListAssignedObjects assigned={group.sensors} list={getSensors} linkTo={"sensor"}/>}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupDetails;