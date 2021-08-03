const sensors = [
    {
        element: "simple",
        elemType: "",
        datatype: "sensor",
        title: "moj-sad-001",
        sn: "123asd456",
        groups: ["moj-sad"],
        stats: { temp: "24", avTemp: "22", humid: "55%", wind: "14"},
        content: "wykresik/tabelka"
    },
    {
        element: "simple",
        elemType: "",
        datatype: "sensor",
        title: "moj-sad-002",
        sn: "123qwe456",
        groups: [],
        stats: { temp: "24", avTemp: "22", humid: "55%", wind: "14"},
        content: "wykresik/tabelka"
    },
    {
        element: "complex",
        elemType: "chart",
        datatype: "group",
        title: "szklarnia",
        stats: { temp: "16", avTemp: "17", humid: "35%", wind: "10"},
        content: "wykresik/tabelka"
    },
]

export default sensors;