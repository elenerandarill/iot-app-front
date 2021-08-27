
import {ChoiceableString} from "../FakeFrontend/ChoiceableString";

export const getChartData = (obj) => {
    let results = []
    for (const item of obj.measurements) {
        // console.log("mamy dany obiekt: ", item);
        const name = item.datetime.slice(11, 16);
        results.push({
            name: name,
            temperature: item.data.temperature,
            humidity: item.data.humidity
        });
        // console.log("results: ", results);
    }
    return results
}

export const chartsColors = {
    blue: "#00AFD9",
    water: "#8095ac",
    darkBlue: "#001544",
    violet01: "#171A44",
}

export const getMeasurements = (obj) => {
    let labels = [];
    console.log("allLabels: ", (obj.measurements[1]).data);
    const allLabels = (obj.measurements[1]).data;
    Object.entries(allLabels).map(([key, value]) => {
        console.log("key: ", key);
        labels.push(key)
        console.log("labels: ", labels);
    })
    return labels
        .map(label => new ChoiceableString(label, label))
}