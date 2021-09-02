// import ButtonSendOne from "./buttonSendOne";
import {useState} from "react";
import {useParams} from "react-router-dom";


export const InputAttribute = ({ label, name, placeholder }) => {
    const [newValue, setNewValue] = useState(undefined);
    const {id} = useParams();

    // const getEndpoint = () => {
    //     //TODO: logika do znalezienia odpowiedniego endpointa????
    //     return "http://localhost:8000/cgi-bin/fake/team/:id/edit"
    // }

    let data = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://example.com/product.schema.json",
        title: "EditObjectValue",
        objectId: id,
        valueName: name,
        newValue: newValue
    }

    const handleSend = async () => {
        console.log("handle send z buttona")
        // POST z podmiana wartosci 'name' na zawartość 'newValue'?
        // const res = await fetch(
        //     getEndpoint(),
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(data)
        //     }
        // )
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
                onClick={() => handleSend()}
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