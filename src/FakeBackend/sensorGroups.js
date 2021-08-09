const sensorGroups = [
    {
        object: "group",
        name: "szklarnia",
        id: "1",
        sensors: ["szklarnia-001", "szklarnia-002", "szklarnia-003"],
        stats: { avTemp: "22", avHumid: "55%", avWind: "14"},
        extraContent: "wykresik/tabelka"
    },
    {
        object: "group",
        name: "sad jabłonie",
        id: "2",
        sensors: ["jabłonie-001", "jabłonie-002", "jabłonie-003", "jabłonie-004"],
        stats: { avTemp: "18", avHumid: "45%", avWind: "15"},
        extraContent: "wykresik/tabelka"
    },
]

export default sensorGroups;