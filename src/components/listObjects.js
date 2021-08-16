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
                    {obj.name.trim() === ""
                        ? <><img src={dot} alt="nie przypisano" height={10} />
                            <div className="mrg-l">{obj.sn}</div></>
                        : obj.name}
                </div>
            </Link>)
    )
}

export default ListObjects;