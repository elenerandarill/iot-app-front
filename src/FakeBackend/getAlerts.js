
export class Alert {
    /** @type {string} */
    id
    /** @type {boolean} */
    read
    /** @type {string} */
    datetime
    /** @type {string} */
    type
    /** @type {string} */
    name
    /** @type {string} */
    targetId
    /** @type {string} */
    msg

    constructor(id, read, datetime, type, name, targetId, msg) {
        this.id = id;
        this.read = read;
        this.datetime = datetime;
        this.type = type;
        this.name = name;
        this.targetId = targetId;
        this.msg = msg;
    }

    getDisplayName() {
        return this.name
    }
}

/** @type {Alert[]} */
const getAlerts = [
    new Alert(
        "6",
        true,
        "2021.10.13 19:00:01",
        "sensor",
        "moj-sad-001",
        "sensor",
        "1",
        "brak dostępu do sieci od 9:15, problemy z łącznością, ostatni raport otrzymano o 8:18"
    ),
    new Alert(
        "5",
        true,
        "2021.10.13 19:00:01",
        "sensor",
        "moj-sad-012",
        "sensor",
        "2",
        "brak dostępu do sieci od 19:00, problemy z łącznością, ostatni raport otrzymano o 17:00"
    ),
    new Alert(
        "4",
        true,
        "2021.10.13 19:00:01",
        "sensor",
        "moj-sad-011",
        "sensor",
        "3",
        "brak dostępu do sieci od 11:35, problemy z łącznością, ostatni raport otrzymano o 11:00"
    ),
    new Alert(
        "3",
        false,
        "2021.10.13 19:00:01",
        "group",
        "tulipany",
        "group",
        "4",
        "brak dostępu do sieci od 9:15, problemy z łącznością, ostatni raport otrzymano o 9:00"
    ),
    new Alert(
        "2",
        false,
        "2021.10.13 19:00:01",
        "sensor",
        "moj-ulubiony-czujnik-ktory-jest-za-rogiem",
        "sensor",
        "5",
        "brak dostępu do sieci od 19:00, problemy z łącznością, ostatni raport otrzymano o 17:00"
    ),
    new Alert(
        "1",
        false,
        "2021.10.13 19:00:01",
        "sensor",
        "moj-sad-011",
        "sensor",
        "6",
        "brak dostępu do sieci od 11:35, problemy z łącznością, ostatni raport otrzymano o 11:00"
    ),
    new Alert(
        "16",
        true,
        "2021.10.13 19:00:01",
        "sensor",
        "moj-sad-011",
        "sensor",
        "6",
        "brak dostępu do sieci od 9:15, problemy z łącznością, ostatni raport otrzymano o 9:00"
    ),
    new Alert(
        "15",
        true,
        "2021.10.13 19:00:01",
        "sensor",
        "moj-sad-012",
        "sensor",
        "1",
        "brak dostępu do sieci od 19:00, problemy z łącznością, ostatni raport otrzymano o 17:00"
    ),
    new Alert(
        "14",
        true,
        "2021.10.13 19:00:01",
        "sensor",
        "moj-sad-011",
        "sensor",
        "11",
        "brak dostępu do sieci od 11:35, problemy z łącznością, ostatni raport otrzymano o 11:00"
    ),
    new Alert(
        "13",
        false,
        "2021.10.13 19:00:01",
        "group",
        "moj-sad-011",
        "group",
        "12",
        "brak dostępu do sieci od 9:15, problemy z łącznością, ostatni raport otrzymano o 9:00"
    ),
    new Alert(
        "12",
        false,
        "2021.10.13 19:00:01",
        "sensor",
        "moj-sad-012",
        "sensor",
        "7",
        "brak dostępu do sieci od 19:00, problemy z łącznością, ostatni raport otrzymano o 17:00"
    ),
    new Alert(
        "11",
        false,
        "2021.10.13 19:00:01",
        "sensor",
        "moj-sad-011",
        "sensor",
        "8",
        "brak dostępu do sieci od 11:35, problemy z łącznością, ostatni raport otrzymano o 11:00"
    )
]
export default getAlerts;