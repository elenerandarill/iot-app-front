import ButtonSendOne from "./buttonSendOne";


export const InputAttribute = ({ label, name, placeholder }) => {
    // onChange={}

    return (
        <div className="shadow listed-attribute">
            <div className="head-txt">{label}</div>
            <div className="position-cent">
                <input
                    type="text"
                    name={name}
                    className="input"
                    placeholder={placeholder}
                    // onFocus={(e) => onFocusShow()}
                />
            </div>
            <ButtonSendOne text="zapisz" forField={label}/>
        </div>
    );
};

export const DisplayAttribute = ({ name, value }) => {
    return (
        <div className="shadow listed-attribute">
            <div className="head-txt">{name}</div>
            <div className="position-cent">
                <div className="txt-water txt-semibold">{value}</div>
            </div>
        </div>
    );
};