import {Link} from "react-router-dom";
import dot from "../media/dot.svg";


const ListObjects =({list, type}) => {
    return (
        list.map(obj =>
            <Link
                key={obj.id}
                to={`/${type === "group"? "groups-of-sensors" : "sensors"}/${obj.id}`}
            >
                <div className={"object shadow" + (obj.assigned.length === 0 ? " mark-as-new" : "")}>
                    {obj.name.trim() === ""
                        ? <div className="txt-semibold">{obj.sn}</div>
                        : <div>
                            <div className="txt-semibold">{obj.name}</div>
                            <div className="obj-sn">{obj.sn}</div>
                        </div>}
                </div>
            </Link>)
    )
}

export default ListObjects;