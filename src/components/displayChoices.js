import { useState } from "react";
import SearchBox from "./searchBox";


const DisplayChoices = ({ availableChoices }) => {
    let [selected, setSelected] = useState([]);
    let [searchQuery, setSearchQuery] = useState("");
    let [queryChoices, setQueryChoices] = useState(availableChoices);

    const toggleChoices = (choice) => {
        console.log("list: ", selected)
        selected.includes(choice)
            ? selected = selected.filter(ch => ch !== choice)
            : selected.push(choice)
        setSelected([...selected])
        console.log("list: ", selected)
    }

    const handleSearch = (query) => {
        setSearchQuery(query);

        const filtered = availableChoices.filter(
            choice => choice.getDisplayName().toLowerCase().includes(query.toLowerCase()))

        setQueryChoices(filtered);
    }

    return (

        <div className="object-container">
            <SearchBox value={searchQuery} onChange={(query) => handleSearch(query)}/>
            {/*<SearchBox />*/}
            {queryChoices.map(choice =>
                <div
                    key={choice.id}
                    className={`object-choices shadow ${selected.includes(choice) 
                        ? " choice-active" : ""}`}
                    onClick={() => toggleChoices(choice)}
                >
                    {choice.getDisplayName()}
                </div>
            )}

        </div>
    );
};

export default DisplayChoices;