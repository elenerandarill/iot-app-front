import React, {useState} from 'react';


const ChartDataChoices = ({ list }) => {
    const [chosen, setChosen] = useState(undefined);

    const handleChoices = (chart) => {
        setChosen(chart);
    };

    return (
        <div className="object-container">
            {list.map( (chart) => {
                return (
                    <div
                        key={chart.id}
                        onClick={() => {
                            handleChoices(chart);
                            console.log("chosen ", chart);
                        }}
                        className={`object-choices shadow ${chosen === chart
                            ? " choice-active" : ""}`}

                    >
                        {chart.name}
                    </div>)
            })
            }
        </div>
    );
};

export default ChartDataChoices;