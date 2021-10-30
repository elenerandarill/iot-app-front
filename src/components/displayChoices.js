import { useState } from "react";
import SearchBox from "./searchBox";
import SelectChoices from "./selectChoices";
import {ButtonFunc} from "./buttons";

/**
 * @param availableChoices {Sensor[] | GroupOfSensors[]}
 * @param alreadyAssigned {Sensor[] | GroupOfSensors[]}
 * @param onNewSelection {Sensor[] | GroupOfSensors[]}
 * @return {JSX.Element}
 * @constructor
 */
const DisplayChoices = ({ availableChoices,
                            alreadyAssigned,
                            onNewSelection }) => {

    let [selected, setSelected] = useState(alreadyAssigned);
    let [searchQuery, setSearchQuery] = useState("");

    // choices within searchQuery
    const getFilteredChoices = () => {
        return availableChoices.filter(
            ch => ch.getDisplayName().toLowerCase().includes(searchQuery.toLowerCase())
        )
    }
    // console.log("DisplayChoices.getFilteredChoices: ", getFilteredChoices)

    const handleSearch = (query) => {
        setSearchQuery(query);
    }

    const onSelectAllClick = () => {
        let newSelection = [...selected]
        let newSelectionIds = newSelection.map((o) => o.id)

        for(const qc of getFilteredChoices()) {
            if(!newSelectionIds.includes(qc.id)) {
                newSelection.push(qc)
            }
        }
        setSelected(newSelection)
        onNewSelection(newSelection)
    };

    const onDeselectAllClick = () => {
        let newSelection = []
        let queryChoicesIds = getFilteredChoices().map(qc => qc.id)

        for(const s of selected) {
            if(!queryChoicesIds.includes(s.id)) {
                newSelection.push(s)
            }
        }
        setSelected(newSelection)
        onNewSelection(newSelection)
    }

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
                    onClick={onDeselectAllClick}
                />

            </div>

            <SelectChoices
                availableChoices={getFilteredChoices()}
                selected={selected}
                onNewSelection={(newSelection) => {
                    setSelected(newSelection)
                    onNewSelection(newSelection)
                }}
            />
        </div>

    );
};

export default DisplayChoices;