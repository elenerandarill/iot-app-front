const sensorGroups = [
    {
        object: "group",
        name: "szklarnia",
        id: "1",
        sensors: ["szklarnia-001", "szklarnia-002", "moj-ulubiony-czujnik-ktory-jest-za-rogiem"],
        stats: { avTemp: "22", avHumid: "55%", avWind: "14"},
        notes: "tu będzie jakaś ważna notatka"
    },
    {
        object: "group",
        name: "sad jabłonie",
        id: "2",
        sensors: ["jabłonie-001", "jabłonie-002", "jabłonie-003", "jabłonie-004"],
        stats: { avTemp: "18", avHumid: "45%", avWind: "15"},
        notes: "tu będzie jakaś ważna notatka"
    },
    {
        object: "group",
        name: "sad grusze",
        id: "3",
        sensors: ["czujnik-gruszek-001", "czujnik-gruszek-002", "czujnik-gruszek-003", "jabłonie-004"],
        stats: { avTemp: "18", avHumid: "45%", avWind: "15"},
        notes: "tu będzie jakaś ważna notatka"
    },
    {
        object: "group",
        name: "tulipany",
        id: "4",
        sensors: ["cz-tulipany-001", "cz-tulipany-002", "jabłonie-003"],
        stats: { avTemp: "18", avHumid: "45%", avWind: "15"},
        notes: "tu będzie jakaś ważna notatka"
    },
    {
        object: "group",
        name: "czereśnie",
        id: "5",
        sensors: [],
        stats: { avTemp: "18", avHumid: "45%", avWind: "15"},
        notes: "tu będzie jakaś ważna notatka"
    },
]

export default sensorGroups;