import {Measurement} from "./Measurement";

export class Sensor {
    /** @type {string} */
    id
    /** @type {string} */
    type
    /** @type {string} */
    name
    /** @type {string} */
    sn
    /** @type {number} */
    battery
    /** @type {string[]} */
    assigned
    /** @type {Measurement[]} */
    measurements
    /** @type {[number, number]} */
    GPS
    /** @type {string} */
    notes

    constructor(id, type, name, sn, battery, assigned, measurements, GPS, notes) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.sn = sn;
        this.battery = battery;
        this.assigned = assigned;
        this.measurements = measurements;
        this.GPS = GPS;
        this.notes = notes;
    }

    getDisplayName() {
        return this.name.trim() === "" ? this.sn : this.name
    }
}

/** @type {Sensor[]} */
const getSensors = [
    new Sensor(
        "1",
        "AM104",
        "moj-sad-001",
        "123asd456",
        15,
        ["1", "2"],
        [
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
        [21.5620, 32.1230],
        "jakas tam notatka"
    ),
    new Sensor(
        "2",
        "AM107",
        "moj-ulubiony-czujnik-ktory-jest-za-rogiem",
        "456asd456",
        50,
        ["3", "4"],
        [
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
        [20.5624, 28.1234],
        "jakas tam notatka"
    ),
    new Sensor(
        "3",
        "EM300-MCS",
        "",
        "111asd111",
        90,
        [],
        [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: "", humidity: "", door: ""
                }
            }
        ],
        [20.5624, 28.1234],
        "nowy czujnik"
    ),
    new Sensor(
        "4",
        "EM300-SLD",
        "   ",
        "222asd111",
        95,
        [],
        [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: "", humidity: "", water_leak: ""
                }
            }
        ],
        [20.4624, 28.1234],
        "nowy czujnik, jeszcze nie przypisany"
    ),
    new Sensor(
        "5",
        "EM300-TH",
        "szklarnia001",
        "77asdfghjkl",
        15,
        ["5", "1"],
        [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: 19, humidity: 43
                }
            }
        ],
        [21.5124, 32.3434],
        "jakas tam notatka"
    ),
    new Sensor(
        "6",
        "EM500-CO2",
        "szklarnia002",
        "66zxcvbnm",
        50,
        ["2", "5"],
        [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: 23, humidity: 56,
                    CO2: 400, pressure: 1022
                }
            }
        ],
        [21.3624, 32.2234],
        "jakas tam notatka"
    ),
    new Sensor(
        "7",
        "EM500-LGT",
        "",
        "55qwertyuiop",
        90,
        [],
        [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    illumination: 13000
                }
            }
        ],
        [20.5619, 28.1228],
        "jakas tam notatka"
    ),
    new Sensor(
        "8",
        "EM500-PP",
        "ciśnieniowy",
        "33qwerthjkl",
        95,
        [],
        [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    pressure: 1024
                }
            }
        ],
        [20.5621, 28.1231],
        "jakas tam notatka"
    ),
    new Sensor(
        "9",
        "EM500-PT100",
        "szklarnia003",
        "22zxcvbnm",
        50,
        ["2", "3"],
        [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: 23
                }
            }
        ],
        [20.5624, 28.1234],
        "jakas tam notatka"
    ),
    new Sensor(
        "10",
        "EM500-SMT",
        "szklarnia004",
        "00zxcvbnm",
        50,
        ["2"],
        [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: 23, moisture: 56, EC: 120
                }
            }
        ],
        [20.5024, 28.1204],
        "jakas tam notatka"
    ),
    new Sensor(
        "11",
        "EM500-SWL",
        "poziom wody",
        "00zxcvbnm",
        "50",
        ["3"],
        [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    water_level: "5"
                }
            }
        ],
        [20.5654, 28.1204],
        "jakas tam notatka"
    ),
    new Sensor(
        "12",
        "EM500-UDL",
        "szklarnia005",
        "00zxcvbnm",
        50,
        ["2", "4"],
        [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    distance: "125"
                }
            },
        ],
        [20.5684, 28.1284],
        "jakas tam notatka"
    ),
]

export default getSensors;