const getSensors = [
    {
        id: "1",
        type: "AM104",
        name: "moj-sad-001",
        sn: "123asd456",
        battery: 15,
        groups: ["1", "2"],
        measurements: {
            temperature: 20, humidity: 45,
            activity: 14, illumination: 8000
        },
        GPS: [21.5620, 32.1230],
        notes: "jakas tam notatka"
    },
    {
        id: "2",
        type: "AM107",
        name: "moj-ulubiony-czujnik-ktory-jest-za-rogiem",
        sn: "456asd456",
        battery: 50,
        groups: ["3", "4"],
        measurements: {
            temperature: 24, humidity: 51,
            activity: 75, illumination: 8500,
            CO2: 398, tVOC: 28000,
            pressure: 1023
        },
        GPS: [20.5624, 28.1234],
        notes: "jakas tam notatka"
    },
    {
        id: "3",
        type: "EM300-MCS",
        name: "",
        sn: "111asd111",
        battery: 90,
        groups: [],
        measurements: {temperature: "", humidity: "", door: ""},
        GPS: [20.5624, 28.1234],
        notes: "nowy czujnik"
    },
    {
        id: "4",
        type: "EM300-SLD",
        name: "   ",
        sn: "222asd111",
        battery: 95,
        groups: [],
        measurements: {temperature: "", humidity: "", water_leak: ""},
        GPS: [20.4624, 28.1234],
        notes: "nowy czujnik, jeszcze nie przypisany"
    },
    {
        id: "5",
        type: "EM300-TH",
        name: "szklarnia001",
        sn: "77asdfghjkl",
        battery: 15,
        groups: ["5"],
        measurements: { temperature: 19, humidity: 43},
        GPS: [21.5124, 32.3434],
        notes: "jakas tam notatka"
    },
    {
        id: "6",
        type: "EM500-CO2",
        name: "szklarnia002",
        sn: "66zxcvbnm",
        battery: 50,
        groups: ["2", "5"],
        measurements: {
            temperature: 23,  humidity: 56,
            CO2: 400, pressure: 1022
        },
        GPS: [21.3624, 32.2234],
        notes: "jakas tam notatka"
    },
    {
        id: "7",
        type: "EM500-LGT",
        name: "",
        sn: "55qwertyuiop",
        battery: 90,
        groups: [],
        measurements: {illumination: 13000},
        GPS: [20.5619, 28.1228],
        notes: "jakas tam notatka"
    },
    {
        id: "8",
        type: "EM500-PP",
        name: "ciśnieniowy",
        sn: "33qwerthjkl",
        battery: 95,
        groups: [],
        measurements: {pressure: 1024},
        GPS: [20.5621, 28.1231],
        notes: "jakas tam notatka"
    },
    {
        id: "9",
        type: "EM500-PT100",
        name: "szklarnia003",
        sn: "22zxcvbnm",
        battery: 50,
        groups: ["2", "3"],
        measurements: { temperature: 23},
        GPS: [20.5624, 28.1234],
        notes: "jakas tam notatka"
    },
    {
        id: "10",
        type: "EM500-SMT",
        name: "szklarnia004",
        sn: "00zxcvbnm",
        battery: 50,
        groups: ["2"],
        measurements: { temperature: 23,  moisture: 56, EC: 120},
        GPS: [20.5024, 28.1204],
        notes: "jakas tam notatka"
    },
    {
        id: "11",
        type: "EM500-SWL",
        name: "poziom wody",
        sn: "00zxcvbnm",
        battery: "50",
        groups: ["3"],
        measurements: { water_level: "5"},
        GPS: [20.5654, 28.1204],
        notes: "jakas tam notatka"
    },
    {
        id: "12",
        type: "EM500-UDL",
        name: "szklarnia005",
        sn: "00zxcvbnm",
        battery: 50,
        groups: ["2", "4"],
        measurements: { distance: "125"},
        GPS: [20.5684, 28.1284],
        notes: "jakas tam notatka"
    },
]

export default getSensors;