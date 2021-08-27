import SearchBox from "./searchBox";
import {useState} from "react";


const ListObjects = ({list, objectRenderer}) => {
    let [searchQuery, setSearchQuery] = useState("");
    let [filteredChoices, setFilteredChoices] = useState(list);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = list.filter(
            choice => choice.getDisplayName().toLowerCase().includes(query.toLowerCase()))
        setFilteredChoices(filtered);
    }

    return (
        <div>
            <SearchBox value={searchQuery} onChange={(query) => handleSearch(query)}/>
            <div className="object-container">
                {filteredChoices.map(objectRenderer)}
            </div>
        </div>

    )
}

export default ListObjects;