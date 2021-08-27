
export class GroupOfSensors {
    /** @type {string} */
    id
    /** @type {string} */
    name
    /** @type {string[]} */
    assigned
    /** @type {Measurement[]} */
    measurements
    /** @type {string} */
    notes

    constructor(id, name, assigned, measurements, notes) {
        this.id = id;
        this.name = name;
        this.assigned = assigned;
        this.measurements = measurements;
        this.notes = notes;
    }

    getDisplayName() {
        return this.name
    }
}

/** @type {GroupOfSensors[]} */
const getGroupsOfSensors = [
    new GroupOfSensors(
        "1",
        "szklarnia",
        ["1", "2", "3"],
        [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: 20, humidity: 45,
                    activity: 14, illumination: 8000
                }
            }
        ],
        "tu będzie jakaś ważna notatka"
    ),
    new GroupOfSensors(
        "2",
        "sad jabłonie",
        ["2", "4", "5", "6"],
        [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: 20, humidity: 45,
                    activity: 14, illumination: 8000
                }
            }
        ],
        "tu będzie jakaś ważna notatka"
    ),
    new GroupOfSensors(
        "3",
        "sad grusze",
        ["7", "8", "9", "10"],
        [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: 20, humidity: 45,
                    activity: 14, illumination: 8000
                }
            }
        ],
        "tu będzie jakaś ważna notatka"
    ),
    new GroupOfSensors(
        "4",
        "tulipany",
        ["11", "12", "1"],
        [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: 20, humidity: 45,
                    activity: 14, illumination: 8000
                }
            }
        ],
        "tu będzie jakaś ważna notatka"
    ),
    new GroupOfSensors(
        "5",
        "czereśnie",
        [],
        [
            {
                datetime: "2021.07.11 17:25:33",
                data: {
                    temperature: 20, humidity: 45,
                    activity: 14, illumination: 8000
                }
            }
        ],
        "tu będzie jakaś ważna notatka"
    ),
]

export default getGroupsOfSensors;