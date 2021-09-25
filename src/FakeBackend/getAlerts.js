
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

    constructor(id, read, important, datetime, type, name, targetId, msg) {
        this.id = id;
        this.read = read;
        this.important = important;
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