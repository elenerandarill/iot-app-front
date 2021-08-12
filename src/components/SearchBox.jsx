import React from 'react';


const SearchBox = ({value, onChange}) => {
    return (
        <div className="position-cent">
            <input
                type="text"
                name="query"
                className="input"
                placeholder="Szukaj"
                // value={value}
                // onChange={e => onChange(e.currentTarget.value)}
            />
        </div>
    );
};

export default SearchBox;