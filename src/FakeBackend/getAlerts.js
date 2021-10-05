
export class Alert {
    /** @type {number} */
    conid
    /** @type {number} */
    id
    /** @type {string} */
    read
    /** @type {string} */
    important
    /** @type {string} */
    datetime
    // /** @type {string} */
    // type
    // /** @type {string} */
    // name
    // /** @type {number} */
    // targetId
    /** @type {string} */
    title

    constructor(conid, id, read, important, datetime, title) {
        this.conid = conid;
        this.id = id;
        this.read = read;
        this.important = important;
        this.datetime = datetime;
        this.title = title;
    }

    getDisplayName() {
        return this.title
    }
}