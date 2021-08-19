import { useState } from "react";
import SearchBox from "./searchBox";


const DisplayChoices = ({ availableChoices, alreadyAssigned }) => {
    let [selected, setSelected] = useState(alreadyAssigned);
    let [searchQuery, setSearchQuery] = useState("");
    let [queryChoices, setQueryChoices] = useState(availableChoices);

    //availableChoices type: [{},{},{},...] lista obiektów

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

        <div className="object-container-grid">
            <SearchBox value={searchQuery} onChange={(query) => handleSearch(query)}/>

            <div className="object-container">
                <div
                    className="btn btn-color insert-button"
                    onClick={() => console.log("Zaznaczono wszystkie!")}
                >
                    zaznacz wszystkie
                </div>

                <div
                    className="btn btn-color insert-button"
                    onClick={() => console.log("Wysłano!")}
                >
                    gotowe
                </div>
            </div>

            <div className="object-container">
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
        </div>

    );
};

export default DisplayChoices;