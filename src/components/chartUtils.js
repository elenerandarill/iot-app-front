
export const getChartData = (obj) => {
    let results = []
    for (const item of obj.measurements) {
        console.log("mamy dany obiekt: ", item);
        const name = item.datetime.slice(11, 16);
        results.push({
            name: name,
            temperature: item.data.temperature,
            humidity: item.data.humidity
        });
        console.log("results: ", results);
    }
    return results
}

export const chartsColors = {
    blue: "#00AFD9",
    water: "#8095ac",
    darkBlue: "#001544",
    violet01: "#171A44",
}