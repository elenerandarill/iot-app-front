import sensorGroups from "../FakeBackend/sensorGroups";
import { Link } from "react-router-dom";

const ListGroups = (sensorObj) => {
    // console.log("wlasciwy obiekt jest pod key=sensor, ",sensorObj.sensor)
    const sGrps = sensorObj.sensor.groups; //lista

    let result = [];

    const findObjectInList = (key_id, list) => {
        for (let j = 0; j < list.length; j++) {
            if (key_id === list[j].id) {
                return list[j]
            }
        }}

    for (let i = 0; i < sGrps.length; i++) {
        result.push(findObjectInList(sGrps[i], sensorGroups))
    }

    return (
        result.map(g =>
            <Link key={g.id} to={`/sensor-groups/${g.id}`}>
                <div className="object shadow">
                    {g.name}
                </div>
            </Link>)
    )
}

export default ListGroups;