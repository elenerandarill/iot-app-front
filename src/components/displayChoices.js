import { useState } from "react";

const DisplayChoices = ({ availableChoices }) => {
    let [selected, setSelected] = useState([]);

    const toggleChoices = (choice) => {
        console.log("list: ", selected)
        selected.includes(choice)
            ? selected = selected.filter(ch => ch !== choice)
            : selected.push(choice)
        setSelected([...selected])
        console.log("list: ", selected)
    }

    return (
        <div className="object-container">
            {availableChoices.map(choice =>
                <div
                    key={choice.id}
                    className={`object-choices shadow ${selected.includes(choice) ? " choice-active" : ""}`}
                    onClick={() => toggleChoices(choice)}
                >
                    {choice.getDisplayName()}
                </div>
            )}
        </div>
    );
};

export default DisplayChoices;