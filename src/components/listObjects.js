import {Link} from "react-router-dom";
import dot from "../media/dot.svg";


const ListObjects =({list, type}) => {
    return (
        list.map(obj =>
            <Link
                key={obj.id}
                to={`/${type === "group"? "groups-of-sensors" : "sensors"}/${obj.id}`}
            >
                <div className="object shadow">
                    <div>
                        {obj.assigned.length === 0 &&
                            <img className="dot" src={dot} alt="nie przypisano" height={10}/>}
                    </div>

                    {obj.name.trim() === ""
                        ? <div>{obj.sn}</div>
                        : <div>{obj.name}</div>}
                </div>
            </Link>)
    )
}

export default ListObjects;