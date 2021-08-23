
const SelectChoices = ({ availableChoices, selected, onNewSelection }) => {

    const toggleChoices = (choice) => {
        console.log("list: ", selected)
        let newSelected = [...selected]
        selected.includes(choice)
            ? newSelected = selected.filter(ch => ch !== choice)
            : newSelected.push(choice)

        console.log("list: ", newSelected)
        onNewSelection(newSelected);
    }

    return (
        <div className="object-container">
        {availableChoices.map(choice =>
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

export default SelectChoices;