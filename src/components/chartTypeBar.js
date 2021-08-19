import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend } from 'recharts';
import { getChartData, chartsColors } from "./chartUtils";


const ChartTypeBar = ({ height, object }) => {

    return (
        <ResponsiveContainer width="95%" height={height}>
        <BarChart
            data={getChartData(object)}
            margin={{top: 5, left: 0, right: 20, bottom: 5}}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar name="temperatura" dataKey="temperature" fill={chartsColors.blue}/>
            <Bar name="wilgotność pow." dataKey="humidity" fill={chartsColors.darkBlue} />
        </BarChart>
        </ResponsiveContainer>
    );
};

export default ChartTypeBar;