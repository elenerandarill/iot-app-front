
import {ChoiceableString} from "../FakeFrontend/ChoiceableString";

/**
 * @param msData {Measurement[]}
 */
export const getChartData = (msData) => {
    // Measurement(1, "2021.07.11 17:25:33", "", "TEMP", 21.4),
    // Measurement(1, "2021.07.11 17:25:33", "", "RHUM", 45.3),
    // Measurement(1, "2021.07.11 17:15:33", "", "TEMP", 21.3),
    // Measurement(1, "2021.07.11 17:15:33", "", "RHUM", 45.2),
    if (!msData) {
        return []
    }

    let measurementsByDate = {}
    for (const m of msData) {
        if (!measurementsByDate[m.SDATS]) {
            measurementsByDate[m.SDATS] = {name: m.SDATS.slice(11, 16)}
        }
        measurementsByDate[m.SDATS][m.SDATYPE] = m.SDADATA
    }
    // {
    //   "17:25:33": { name: "17:25:33", "TEMP": 21.4, "RHUM": 45.3) },
    //   "17:15:33": { name: "17:15:33", "TEMP": 21.3, "RHUM": 45.2) }
    // }

    let results = []
    for(const [date, mValue] of Object.entries(measurementsByDate)) {
        results.push(mValue)
    }
    // [
    //   { name: "17:25:33", "TEMP": 21.4, "RHUM": 45.3),
    //   { name: "17:15:33", "TEMP": 21.3, "RHUM": 45.2)
    // ]

    return results
}

export const chartsColorsByName = {
    blue: "#00AFD9",
    water: "#8095ac",
    darkBlue: "#001544",
    violet01: "#171A44",
}

export const chartsColors = [
    chartsColorsByName.blue,
    chartsColorsByName.water,
    chartsColorsByName.darkBlue,
    chartsColorsByName.violet01
]


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