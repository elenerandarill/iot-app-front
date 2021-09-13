import {useState} from "react";


export const InputAttribute = ({ label, name, placeholder, sendChange }) => {
    const [newValue, setNewValue] = useState(undefined);

    const onNewValue = (value) => {
        if (value !== undefined && value !== ""){
            sendChange(value) // przekazuje do gory
        }
        else{
            // pokazac alert!
            console.log("Nowa wartość powinna być dłuższa niż 0 znaków.")
        }
    }

    return(
        <div className="shadow listed-attribute">
            <div className="head-txt">{label}</div>
            <div className="position-cent">
                <input
                    type="text"
                    name={name}
                    className="input"
                    placeholder={placeholder}
                    onChange={(e) => setNewValue(e.target.value)}
                />
            </div>
            <div
                className="btn btn-color"
                onClick={() => onNewValue(newValue)}
            >
                zapisz
            </div>
        </div>
    )
}

export const DisplayAttribute = ({ name, value }) => {
    return(
        <div className="shadow listed-attribute">
            <div className="head-txt">{name}</div>
            <div className="position-cent">
                <div className="txt-water txt-semibold">{value}</div>
            </div>
        </div>
    )
}