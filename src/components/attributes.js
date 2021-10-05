import {useState} from "react";
import {ButtonFunc} from "./buttons";

export const InputString = ({label, placeholder, sendChange}) => {
    const [newValue, setNewValue] = useState(placeholder)

    const onNewValue = (value) => {
        if (value) {
            sendChange(value) // przekazuje do gory
        }
        else {
            // pokazac alert!
            console.log("Nowa wartość powinna być dłuższa niż 0 znaków.")
        }
    }

    return (
        <div className="shadow listed-attribute">
            <div className="head-txt">{label}</div>
            <div className="position-cent">
                <input
                    type="text"
                    className="input"
                    placeholder={placeholder}
                    onChange={(e) => setNewValue(e.target.value)}
                />
            </div>
            <ButtonFunc
                text="zapisz"
                onClick={() => onNewValue(newValue)}
            />
        </div>
    )
}


export const InputTextarea = ({label, placeholder, sendChange}) => {
    const [newValue, setNewValue] = useState(placeholder)

    const onNewValue = (value) => {
        if (value) {
            sendChange(value) // przekazuje do gory
        }
        else {
            // pokazac alert!
            console.log("Nowa wartość powinna być dłuższa niż 0 znaków.")
        }
    }

    return (
        <div className="shadow listed-attribute">
            <div className="head-txt">{label}</div>
            <div className="position-cent">
                <div
                    className="txtarea"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    onInput={(e) => setNewValue(e.target.textContent)}
                >
                    {placeholder}
                </div>
            </div>
            <ButtonFunc
            text="zapisz"
            onClick={() => onNewValue(newValue)}
            />
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