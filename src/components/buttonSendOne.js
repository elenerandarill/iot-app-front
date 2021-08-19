import React from 'react';

const ButtonSendOne = ({ text, forField }) => {
    return (
            <div
                className="btn btn-color"
                onClick={() => console.log("Wysłano zmianę dot. ", forField)}
                // wyslij POSTem request ze zmiana
            >
                {text}
            </div>

    );
};

export default ButtonSendOne;