import React from 'react';

const ButtonSendOne = ({ text, forField, onClick }) => {
    return (
            <div
                onClick={onClick}
                className="btn btn-color"
            >
                {text}
            </div>

    );
};

export default ButtonSendOne;