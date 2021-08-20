
const getChartsInfo = [
    {
        id: "1",
        type: "AreaChart",
        name: "liniowy"
    },
    {
        id: "2",
        type: "BarChart",
        name: "słupkowy"
    },
    {
        id: "3",
        type: "LineChart",
        name: "punktowy"
    }
].map(chart => {
    chart.getDisplayName = () => chart.name
    return chart
})


export default getChartsInfo;