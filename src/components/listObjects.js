import {Link} from "react-router-dom";
import SearchBox from "./searchBox";
import {useState} from "react";


const ListObjects = ({list, type}) => {
    let [searchQuery, setSearchQuery] = useState("");
    let [queryChoices, setQueryChoices] = useState(list);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = list.filter(
            choice => choice.getDisplayName().toLowerCase().includes(query.toLowerCase()))
        setQueryChoices(filtered);
    }

    return (
        <div>
            <SearchBox value={searchQuery} onChange={(query) => handleSearch(query)}/>
            <div className="object-container">
                {queryChoices.map(obj =>
                <Link
                    key={obj.id}
                    to={`/${type === "group" ? "groups-of-sensors" : "sensors"}/${obj.id}`}
                >
                    <div className={"object shadow" + (obj.assigned.length === 0 ? " mark-as-new" : "")}>
                        {obj.name.trim() === ""
                            ? <div className="txt-semibold">{obj.sn}</div>
                            : <div>
                                <div className="txt-semibold">{obj.name}</div>
                                <div className="obj-sn">{obj.sn}</div>
                            </div>}
                    </div>
                </Link>
                )}
            </div>
        </div>

    )
}

export default ListObjects;