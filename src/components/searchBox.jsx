import React from 'react';


const SearchBox = ({value, onChange}) => {
    return (
        <div  className="position-cent">
            <input
                className="input"
                type="text"
                name="query"
                placeholder="Szukaj"
                value={value}
                onChange={e => {
                    console.log(e.currentTarget.value);
                    onChange(e.currentTarget.value)
                }}
            />
        </div>
    );
};

export default SearchBox;