
const SelectChoices = ({ availableChoices, selected, onNewSelection }) => {

    const toggleChoices = (choice) => {
        console.log("list: ", selected)
        let newSelected = [...selected]
        includedInSelection(choice)
            ? newSelected = selected.filter(ch => ch.id !== choice.id)
            : newSelected.push(choice)

        console.log("list: ", newSelected)
        onNewSelection(newSelected);
    }

    // console.log("availChoices: ", availableChoices)
    // console.log("selected: ", selected)

    const includedInSelection = (ch) => {
        const list = selected.filter(s => s.id === ch.id)
        return list.length > 0;
    }


    return (
        <div className="object-container">
        {availableChoices.map(choice =>
                <div
                    key={choice.id + choice.name}
                    className={`object-choices shadow ${includedInSelection(choice)
                        ? " choice-active" : ""}`}
                    onClick={() => toggleChoices(choice)}
                >
                    {choice.getDisplayName()}
                    {/*TODO: renderer? */}
                    {/*{choice.sn && <div className="obj-sn">{choice.sn}</div>}*/}
                </div>
            )}
        </div>
    );
};

export default SelectChoices;