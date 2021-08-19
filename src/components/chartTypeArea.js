import {CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, ResponsiveContainer} from 'recharts';
import { getChartData, chartsColors } from "./chartUtils";

const ChartTypeArea = ({ height, object }) => {


    return (
        <ResponsiveContainer width="95%" height={height}>
        <AreaChart data={getChartData(object)}
                   margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <defs>
                <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={chartsColors.darkBlue} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={chartsColors.darkBlue} stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorHumid" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={chartsColors.blue} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={chartsColors.blue} stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area name="temperatura" type="monotone" dataKey="temperature" stroke={chartsColors.darkBlue} fillOpacity={1} fill="url(#colorTemp)"/>
            <Area name="wilgotność pow." type="monotone" dataKey="humidity" stroke={chartsColors.blue} fillOpacity={1} fill="url(#colorHumid)"/>
        </AreaChart>
        </ResponsiveContainer>
    );
};

export default ChartTypeArea;