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

    const presentData = (object) => {
        if (object.fullname){
            return <div className="txt-semibold">{object.fullname}</div>
        }
        else if (object.name.trim() === "") {
            return <div className="txt-semibold">{object.sn}</div>
        }
        else {
            return (
                <div>
                    <div className="txt-semibold">{object.name}</div>
                    <div className="obj-sn">{object.sn}</div>
                </div>)
        }
    }

    return (
        <div>
            <SearchBox value={searchQuery} onChange={(query) => handleSearch(query)}/>
            <div className="object-container">
                {queryChoices.map(obj =>
                <Link
                    key={obj.id}
                    to={`/${type}/${obj.id}`}
                >
                    <div className={"object shadow" + (obj.assigned.length === 0 ? " mark-as-new" : "")}>
                        {presentData(obj)}
                    </div>
                </Link>
                )}
            </div>
        </div>

    )
}

export default ListObjects;