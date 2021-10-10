import {CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, ResponsiveContainer} from 'recharts';
import {getChartData, chartsColors, chartsColorsByName} from "./chartUtils";

/**
 * @param height {number}
 * @param msData {Measurement[]}
 * @return {JSX.Element}
 * @constructor
 */
const ChartTypeArea = ({ height, msData }) => {


    return (
        <ResponsiveContainer width="95%" height={height}>
        <AreaChart data={getChartData(msData)}
                   margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <defs>
                {
                    chartsColors.map((cc, index) => {
                        return (
                            <linearGradient key={index} id={`colorTemp${index}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={chartsColors[index]} stopOpacity={0.8}/>
                                <stop offset="95%" stopColor={chartsColors[index]} stopOpacity={0}/>
                            </linearGradient>
                        )
                    })
                }
            </defs>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            {
                // Ponizsza linijka ze wszystkich measurementow pobiera tylko liste unikalnych SDATYPE
                [...new Set((msData.map(m => m.SDATYPE)))]
                    .map((sdatype, index) => {
                    return (
                        <Area
                            key={sdatype}
                            name={sdatype}
                            type="monotone"
                            dataKey={sdatype}
                            stroke={chartsColors[index]}
                            fillOpacity={1}
                            fill={`url(#colorTemp${index})`}
                        />
                    )
                })
            }
        </AreaChart>
        </ResponsiveContainer>
    );
};

export default ChartTypeArea;