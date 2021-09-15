
// export const CATFISH_URL = "/cgi-bin/dezd"
export const BASE_CATFISH_URL = "http://localhost:8000/cgi-bin/fake"

export const CATFISH_URL = BASE_CATFISH_URL + "/dezd"

// SENSORS
export const GET_SENSORS_URL = BASE_CATFISH_URL + "/sensors/get"
export const ADD_SENSOR_URL = BASE_CATFISH_URL + "/sensor/add"
export const GET_SENSOR_URL = BASE_CATFISH_URL + "/sensor/get"
export const SET_SENSOR_NAME_URL = BASE_CATFISH_URL + "/sensor/name"
export const SET_SENSOR_NOTES_URL = BASE_CATFISH_URL + "/sensor/notes"
export const SET_SENSOR_ASSIGNED_URL = BASE_CATFISH_URL + "/sensor/assigned/set"
export const GET_SENSOR_ASSIGNED_URL = BASE_CATFISH_URL + "/sensor/assigned/get"

//SGROUPS
export const GET_SGROUPS_URL = BASE_CATFISH_URL + "/sgroups/get"
export const ADD_SGROUP_URL = BASE_CATFISH_URL + "/sgroup/add"
export const GET_SGROUP_URL = BASE_CATFISH_URL + "/sgroup/get"
export const SET_SGROUP_NAME_URL = BASE_CATFISH_URL + "/sgroup/name"
export const SET_SGROUP_NOTES_URL = BASE_CATFISH_URL + "/sgroup/notes"
export const SET_SGROUP_ASSIGNED_URL = BASE_CATFISH_URL + "/sgroup/assigned/set"
export const GET_SGROUP_ASSIGNED_URL = BASE_CATFISH_URL + "/sgroup/assigned/get"

// TEAMS
export const GET_TEAM_URL = BASE_CATFISH_URL + "/team/get"
export const ADD_TEAM_MEMBER_URL = BASE_CATFISH_URL + "/team/member/add"
export const GET_TEAM_MEMBER_URL = BASE_CATFISH_URL + "/team/member/get"
export const SET_TEAM_MEMBER_NAME_URL = BASE_CATFISH_URL + "/team/member/name"
export const SET_TEAM_MEMBER_NOTES_URL = BASE_CATFISH_URL + "/team/member/notes"
export const SET_TEAM_MEMBER_ASSIGNED_URL = BASE_CATFISH_URL + "/team/member/assigned/set"
export const GET_TEAM_MEMBER_ASSIGNED_URL = BASE_CATFISH_URL + "/team/member/assigned/get"

// ALERTS
export const GET_ALERTS_URL = BASE_CATFISH_URL + "/alerts/get"
export const SET_ALERT_READ_URL = BASE_CATFISH_URL + "/alerts/read"
export const SET_ALERTS_READ_URL = BASE_CATFISH_URL + "/alerts/read/all"
export const DELETE_ALERT_URL = BASE_CATFISH_URL + "/alerts/delete"
export const DELETE_ALERTS_ALL_URL = BASE_CATFISH_URL + "/alerts/delete/all"
