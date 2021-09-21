import { useState } from "react";
import SearchBox from "./searchBox";
import SelectChoices from "./selectChoices";
import {ButtonFunc} from "./buttons";


const DisplayChoices = ({ availableChoices, alreadyAssigned, onNewSelection }) => {

    // availableChoices = [1, 2, 3, 4, 5]
    // selected = [3, 4]
    // 1. <SelectChoices availableChoices={[1, 2, 3, 4, 5]} selected={[3, 4]} onNewSelection={(newSelected) => onNewSelection(newSelected)}
    // 2. User zaznacza element #2
    // 3. Uruchamia sie SelectChoices.toggleChoices(), w ktorej powstaje nowa lista
    // 4. toggleChoices() informuje rodzica o nowej liscie przez wywolanie onNewSelection() z nowa lista
    // 5.


    let [selected, setSelected] = useState(alreadyAssigned);  //list
    let [searchQuery, setSearchQuery] = useState("");
    let [queryChoices, setQueryChoices] = useState(availableChoices);

    //availableChoices type: [{},{},{},...] lista obiektów



    const handleSearch = (query) => {
        setSearchQuery(query);

        // TODO: Filtrowanie po ID a nie displayName
        const filtered = availableChoices.filter(
            choice => choice.getDisplayName().toLowerCase().includes(query.toLowerCase()))

        setQueryChoices(filtered);
    }

    const onSelectAllClick = () => {
        let newSelection = [...selected]
        // console.log("newSelection", newSelection)
        // queryChoices.map(ch => newSelection.push(ch))
        newSelection.push(...queryChoices)
        const uniqueSelection = Array.from(new Set(newSelection))
        console.log("uniqueSelection: ",uniqueSelection)
        setSelected(uniqueSelection)
        onNewSelection(newSelection)
    };

    return (

        <div className="object-container-grid">
            <SearchBox value={searchQuery} onChange={(query) => handleSearch(query)}/>

            <div className="object-container">
                <ButtonFunc
                text="zaznacz wszystkie"
                onClick={() => onSelectAllClick()}
                />
                <ButtonFunc
                    text="odznacz wszystkie"
                    onClick={() => setSelected()}
                />

            </div>

            <SelectChoices
                availableChoices={queryChoices}
                selected={selected}
                // onNewSelection={(newSelected) => onNewSelection(newSelected)}
                onNewSelection={(newSelection) => {
                    setSelected(newSelection)
                    onNewSelection(newSelection)
                }}
            />
        </div>

    );
};

export default DisplayChoices;