import { CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';


const ChartTypeArea = ({ width, height, data }) => {
    const colorBlue = "#00AFD9";
    const colorWater = "#8095ac";
    const colorDarkBlue = "#001544";
    const colorViolet01 = "#171A44";


    return (
        <AreaChart width={width} height={height} data={data}
                   margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <defs>
                <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={colorDarkBlue} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={colorDarkBlue} stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorHumid" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={colorBlue} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={colorBlue} stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area type="monotone" dataKey="temperature" stroke={colorDarkBlue} fillOpacity={1} fill="url(#colorTemp)"/>
            <Area type="monotone" dataKey="humidity" stroke={colorBlue} fillOpacity={1} fill="url(#colorHumid)"/>
        </AreaChart>
    );
};

export default ChartTypeArea;