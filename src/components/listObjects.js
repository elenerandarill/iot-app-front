import SearchBox from "./searchBox";
import {useState} from "react";


const ListObjects = ({list, objectRenderer}) => {
    let [searchQuery, setSearchQuery] = useState("");
    console.log("The list of objects: ", list)

    const filtered = list.filter(
        choice => choice.getDisplayName().toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div>
            <SearchBox value={searchQuery} onChange={setSearchQuery}/>
            <div className="object-container">
                {filtered.map(objectRenderer)}
            </div>
        </div>

    )
}

export default ListObjects;