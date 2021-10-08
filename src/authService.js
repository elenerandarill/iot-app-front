export class LoggedUser {
    constructor(sessionId, ufname, ulname) {
        this.sessionId = sessionId
        this.ufname = ufname
        this.ulname = ulname
    }
}

export const getLoggedUser = () => {
    if (localStorage.getItem("sessionId")){
        return new LoggedUser(
            localStorage.getItem("sessionId"),
            localStorage.getItem("ufname"),
            localStorage.getItem("ulname")
        )
    }
    return null
}

export const login = (sesId, ufname, ulname) => {
    localStorage.setItem("sessionId", sesId)
    localStorage.setItem("ufname", ufname)
    localStorage.setItem("ulname", ulname)
}

export const logout = () => {
    localStorage.setItem("sessionId", "")
    localStorage.setItem("ufname", "")
    localStorage.setItem("ulname", "")
}
