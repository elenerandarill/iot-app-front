const getSensors = [
    {
        id: "1",
        type: "AM104",
        name: "moj-sad-001",
        sn: "123asd456",
        battery: 15,
        assigned: ["1", "2"],
        measurements: [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: 20, humidity: 45,
                    activity: 14, illumination: 8000
                }
            },
            {
                datetime: "2021.07.11 17:35:33",
                data: {
                    temperature: 19.5, humidity: 46,
                    activity: 14, illumination: 8000
                }
            },
            {
                datetime: "2021.07.11 17:45:33",
                data: {
                    temperature: 19, humidity: 47,
                    activity: 14, illumination: 8000
                }
            },
            {
                datetime: "2021.07.11 17:55:33",
                data: {
                    temperature: 17.5, humidity: 49,
                    activity: 14, illumination: 8000
                }
            },
            {
                datetime: "2021.07.11 18:05:33",
                data: {
                    temperature: 16, humidity: 55,
                    activity: 14, illumination: 7999
                }
            },
        ],
        GPS: [21.5620, 32.1230],
        notes: "jakas tam notatka"
    },
    {
        id: "2",
        type: "AM107",
        name: "moj-ulubiony-czujnik-ktory-jest-za-rogiem",
        sn: "456asd456",
        battery: 50,
        assigned: ["3", "4"],
        measurements: [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: 24, humidity: 51,
                    activity: 75, illumination: 8500,
                    CO2: 398, tVOC: 28000,
                    pressure: 1023
                }
            }
        ],
        GPS: [20.5624, 28.1234],
        notes: "jakas tam notatka"
    },
    {
        id: "3",
        type: "EM300-MCS",
        name: "",
        sn: "111asd111",
        battery: 90,
        assigned: [],
        measurements: [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: "", humidity: "", door: ""
                }
            }
        ],
        GPS: [20.5624, 28.1234],
        notes: "nowy czujnik"
    },
    {
        id: "4",
        type: "EM300-SLD",
        name: "   ",
        sn: "222asd111",
        battery: 95,
        assigned: [],
        measurements: [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: "", humidity: "", water_leak: ""
                }
            }
        ],
        GPS: [20.4624, 28.1234],
        notes: "nowy czujnik, jeszcze nie przypisany"
    },
    {
        id: "5",
        type: "EM300-TH",
        name: "szklarnia001",
        sn: "77asdfghjkl",
        battery: 15,
        assigned: ["5", "1"],
        measurements: [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: 19, humidity: 43
                }
            }
        ],
        GPS: [21.5124, 32.3434],
        notes: "jakas tam notatka"
    },
    {
        id: "6",
        type: "EM500-CO2",
        name: "szklarnia002",
        sn: "66zxcvbnm",
        battery: 50,
        assigned: ["2", "5"],
        measurements: [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: 23, humidity: 56,
                    CO2: 400, pressure: 1022
                }
            }
        ],
        GPS: [21.3624, 32.2234],
        notes: "jakas tam notatka"
    },
    {
        id: "7",
        type: "EM500-LGT",
        name: "",
        sn: "55qwertyuiop",
        battery: 90,
        assigned: [],
        measurements: [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    illumination: 13000
                }
            }
        ],
        GPS: [20.5619, 28.1228],
        notes: "jakas tam notatka"
    },
    {
        id: "8",
        type: "EM500-PP",
        name: "ciśnieniowy",
        sn: "33qwerthjkl",
        battery: 95,
        assigned: [],
        measurements: [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    pressure: 1024
                }
            }
        ],
        GPS: [20.5621, 28.1231],
        notes: "jakas tam notatka"
    },
    {
        id: "9",
        type: "EM500-PT100",
        name: "szklarnia003",
        sn: "22zxcvbnm",
        battery: 50,
        assigned: ["2", "3"],
        measurements: [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: 23
                }
            }
        ],
        GPS: [20.5624, 28.1234],
        notes: "jakas tam notatka"
    },
    {
        id: "10",
        type: "EM500-SMT",
        name: "szklarnia004",
        sn: "00zxcvbnm",
        battery: 50,
        assigned: ["2"],
        measurements: [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: 23, moisture: 56, EC: 120
                }
            }
        ],
        GPS: [20.5024, 28.1204],
        notes: "jakas tam notatka"
    },
    {
        id: "11",
        type: "EM500-SWL",
        name: "poziom wody",
        sn: "00zxcvbnm",
        battery: "50",
        assigned: ["3"],
        measurements: [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    water_level: "5"
                }
            }
        ],
        GPS: [20.5654, 28.1204],
        notes: "jakas tam notatka"
    },
    {
        id: "12",
        type: "EM500-UDL",
        name: "szklarnia005",
        sn: "00zxcvbnm",
        battery: 50,
        assigned: ["2", "4"],
        measurements: [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    distance: "125"
                }
            },
        ],
        GPS: [20.5684, 28.1284],
        notes: "jakas tam notatka"
    },
].map(sensor => {
    sensor.getDisplayName = () => sensor.name.trim() === "" ? sensor.sn : sensor.name
    return sensor
})

export default getSensors;