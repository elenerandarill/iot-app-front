export class LoggedUser {
    constructor(id, sessionId, ufname, ulname) {
        this.id = id
        this.sessionId = sessionId
        this.ufname = ufname
        this.ulname = ulname
    }
}

export const getLoggedUser = () => {
    if (localStorage.getItem("sessionId")){
        return new LoggedUser(
            localStorage.getItem("id"),
            localStorage.getItem("sessionId"),
            localStorage.getItem("ufname"),
            localStorage.getItem("ulname")
        )
    }
    return null
}

export const login = (id, sesId, ufname, ulname) => {
    localStorage.setItem("id", id)
    localStorage.setItem("sessionId", sesId)
    localStorage.setItem("ufname", ufname)
    localStorage.setItem("ulname", ulname)
}

export const logout = () => {
    localStorage.setItem("id", "")
    localStorage.setItem("sessionId", "")
    localStorage.setItem("ufname", "")
    localStorage.setItem("ulname", "")
}
