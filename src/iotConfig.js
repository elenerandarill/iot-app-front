
// export const CATFISH_URL = "/cgi-bin/dezd"
export const URL_SERVER_BASE = "http://localhost:8000"
// export const URL_SERVER_BASE = "http://kawinski.net:8000"

export const URL_CATFISH = URL_SERVER_BASE + "/dezd"
export const URL_RESTART = URL_SERVER_BASE + "/refresh_fake_db"

// CREDENTIALS
export const URL_LOGIN = URL_SERVER_BASE + "/login"
export const URL_LOGOUT = URL_SERVER_BASE + "/logout"
export const URL_REGISTER = URL_SERVER_BASE + "/register"

// USER
export const URL_USER_GET = URL_SERVER_BASE + "/USER/get"
export const URL_USER_SET = URL_SERVER_BASE + "/USER/set"

// SENSOR
export const URL_SENSOR_LIST = URL_SERVER_BASE + "/SENSOR/list"
export const URL_SENSOR_NEW = URL_SERVER_BASE + "/SENSOR/new"
export const URL_SENSOR_GET = URL_SERVER_BASE + "/SENSOR/get"
export const URL_SENSOR_SET = URL_SERVER_BASE + "/SENSOR/set"
// ??????????
export const URL_SENSOR_ASSIGNED_SET = URL_SERVER_BASE + "/SGMEMB/set"
export const URL_SENSOR_ASSIGNED_GET = URL_SERVER_BASE + "/SGMEMB/list"

export const URL_SDATA_LIST = URL_SERVER_BASE + "/SDATA/list"


//SGROUP
export const URL_SGROUP_LIST = URL_SERVER_BASE + "/SGROUP/list"
export const URL_SGROUP_NEW = URL_SERVER_BASE + "/SGROUP/new"
export const URL_SGROUP_DEL = URL_SERVER_BASE + "/SGROUP/del"
export const URL_SGROUP_GET = URL_SERVER_BASE + "/SGROUP/get"
export const URL_SGROUP_SET = URL_SERVER_BASE + "/SGROUP/set"
// ?????????????
export const URL_SGROUP_ASSIGNED_SET = URL_SERVER_BASE + "/SGMEMB/set"
export const URL_SGROUP_ASSIGNED_GET = URL_SERVER_BASE + "/SGMEMB/list"

// TEAM
export const URL_TEAM_LIST = URL_SERVER_BASE + "/UGRM/list"
export const URL_TEAM_MEMBER_NEW = URL_SERVER_BASE + "/UGRM/add"
export const URL_TEAM_MEMBER_SET = URL_SERVER_BASE + "/UGRM/set"
export const URL_TEAM_MEMBER_REM = URL_SERVER_BASE + "/UGRM/rem"
// ?????????????
export const URL_TEAM_MEMBER_ASSIGNED_SET = URL_SERVER_BASE + "/PERM/set"
export const URL_TEAM_MEMBER_ASSIGNED_GET = URL_SERVER_BASE + "/PERM/list"

// NOTIFICATION
export const URL_NOTIFICATION_LIST = URL_SERVER_BASE + "/NOTIF/list"
export const URL_NOTIFICATION_NEW = URL_SERVER_BASE + "/NOTIF/new"
export const URL_NOTIFICATION_UNREAD_COUNT_GET = URL_SERVER_BASE + "/NOTIF/get_unread_count"
export const URL_NOTIFICATION_SET = URL_SERVER_BASE + "/NOTIF/set"
export const URL_NOTIFICATION_DEL = URL_SERVER_BASE + "/NOTIF/del"
export const URL_NOTIFICATION_DEL_ALL = URL_SERVER_BASE + "/NOTIF/del_all"

// ALERT
// TODO: add_alert, set_alert, del_alert


// ----- ROUTES -----

export const ROUTE_HOME = "/"
export const ROUTE_RESTART = "/restart"
export const ROUTE_LOGIN = "/login"
export const ROUTE_LOGOUT = "/logout"
export const ROUTE_REGISTER = "/register"

export const ROUTE_SENSOR_LIST = "/sensor/list"
export const ROUTE_SENSOR_DETAILS = (id) => "/sensor/" + id + "/details"
export const ROUTE_SENSOR_EDIT = (id) => "/sensor/" + id + "/edit"
export const ROUTE_SENSOR_EDIT_CHART = (id) => "/sensor/" + id + "/edit/chart"

export const ROUTE_SGROUP_LIST = "/sgroup/list"
export const ROUTE_SGROUP_DETAILS = (id) => "/sgroup/" + id + "/details"
export const ROUTE_SGROUP_EDIT = (id) => "/sgroup/" + id + "/edit"
export const ROUTE_SGROUP_NEW = "/sgroup/new"
export const ROUTE_SGROUP_DEL = (id) => "/sgroup/" + id + "/del"

export const ROUTE_TMEMBER_LIST = "/team/member/list"
export const ROUTE_TMEMBER_DETAILS = (id) => "/team/member/" + id + "/details"
// export const ROUTE_TMEMBER_EDIT = (id) => "/team/member/" + id + "/edit"
export const ROUTE_TMEMBER_SENSORS_EDIT = (id) => "/team/member/" + id + "/sensors/edit"
export const ROUTE_TMEMBER_SGROUPS_EDIT = (id) => "/team/member/" + id + "/sgroups/edit"
export const ROUTE_TMEMBER_NEW = "/team/member/new"
export const ROUTE_TMEMBER_REM = (id) => "/team/member/" + id + "/rem"

export const ROUTE_NOTIFS_LIST = "/notification/list"
export const ROUTE_NOTIFS_NEW = "/notification/new"

export const ROUTE_CONTACT = "/contact"

