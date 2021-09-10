
export class Member {
    /** @type {string} */
    id
    /** @type {string} */
    fullname
    /** @type {string} */
    joinedAt
    /**
     * Assigned group IDs
     * @type {string[]}
     */
    assigned
    /** @type {string} */
    notes

    constructor(id, fullname, joinedAt, assigned, notes) {
        this.id = id;
        this.fullname = fullname;
        this.joinedAt = joinedAt;
        this.assigned = assigned;
        this.notes = notes;
    }

    getDisplayName() {
        return this.fullname
    }
}

/** @type {Member[]} */
const getMembers = [
    new Member(
        "1",
        "Tomasz Kowalski",
        "2021.10.13 19:00:01",
        ["1"],
        "jakas tam notatka"
    ),
    new Member(
        "2",
        "Anna Nowacka",
        "2020.12.15 11:12:01",
        ["1", "2"],
        ""
    ),
    new Member(
        "3",
        "Katarzyna Polska",
        "2020.12.15 11:12:01",
        [],
        "Nowa osoba w zespole"
    ),
]

export default getMembers;