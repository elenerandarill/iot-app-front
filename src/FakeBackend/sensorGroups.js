const sensorGroups = [
    {
        datatype: "group",
        title: "szklarnia",
        id: "1",
        sensors: ["szklarnia-001", "szklarnia-002", "szklarnia-003"],
        stats: { temp: "24", avTemp: "22", humid: "55%", wind: "14"},
        content: "wykresik/tabelka"
    },
    {
        datatype: "group",
        title: "sad jabłonie",
        id: "2",
        sensors: ["jabłonie-001", "jabłonie-002", "jabłonie-003", "jabłonie-004"],
        stats: { temp: "24", avTemp: "22", humid: "55%", wind: "14"},
        content: "wykresik/tabelka"
    },
]

export default sensorGroups;