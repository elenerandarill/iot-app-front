import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend } from 'recharts';
import { getChartData, chartsColors } from "./chartUtils";
import {getUnique} from "../FakeFrontend/dataUtils";


/**
 * @param height {number}
 * @param msData {Measurement[]}
 * @return {JSX.Element}
 * @constructor
 */
const ChartTypeBar = ({ height, msData }) => {

    return (
        <ResponsiveContainer width="95%" height={height}>
        <BarChart
            data={getChartData(msData)}
            margin={{top: 5, left: 0, right: 20, bottom: 5}}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {
                // Ponizsza linijka ze wszystkich measurementow pobiera tylko liste unikalnych SDATYPE
                [...new Set((msData.map(m => m.SDATYPE)))]
                    .map((sdatype, index) => {
                    return (
                        <Bar name={sdatype} dataKey={sdatype} fill={chartsColors[index]}/>
                    )
                })
            }
        </BarChart>
        </ResponsiveContainer>
    );
};

export default ChartTypeBar;