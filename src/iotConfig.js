
// export const CATFISH_URL = "/cgi-bin/dezd"
export const URL_SERVER_BASE = "http://localhost:8000"

export const URL_CATFISH = URL_SERVER_BASE + "/dezd"

// CREDENTIALS
export const URL_LOGIN = URL_SERVER_BASE + "/login"
export const URL_REGISTER = URL_SERVER_BASE + "/register"

// SENSOR
export const URL_SENSOR_LIST = URL_SERVER_BASE + "/sensor/list"
export const URL_SENSOR_ADD = URL_SERVER_BASE + "/sensor/add"
export const URL_SENSOR_GET = URL_SERVER_BASE + "/sensor/get"
export const URL_SENSOR_SET = URL_SERVER_BASE + "/sensor/set"
// ??????????
export const URL_SENSOR_ASSIGNED_SET = URL_SERVER_BASE + "/sensor/set_assigned"
export const URL_SENSOR_ASSIGNED_GET = URL_SERVER_BASE + "/sensor/get_assigned"

//SGROUP
export const URL_SGROUP_LIST = URL_SERVER_BASE + "/sgroup/list"
export const URL_SGROUP_ADD = URL_SERVER_BASE + "/sgroup/add"
export const URL_SGROUP_GET = URL_SERVER_BASE + "/sgroup/get"
export const URL_SGROUP_SET = URL_SERVER_BASE + "/sgroup/set"
// ?????????????
export const URL_SGROUP_ASSIGNED_SET = URL_SERVER_BASE + "/sgroup/set_assigned"
export const URL_SGROUP_ASSIGNED_GET = URL_SERVER_BASE + "/sgroup/get_assigned"

// TEAM
export const URL_TEAM_LIST = URL_SERVER_BASE + "/team/member/list"
export const URL_TEAM_MEMBER_ADD = URL_SERVER_BASE + "/team/member/add"
export const URL_TEAM_MEMBER_GET = URL_SERVER_BASE + "/team/member/get"
export const URL_TEAM_MEMBER_SET = URL_SERVER_BASE + "/team/member/set"
// ?????????????
export const URL_TEAM_MEMBER_ASSIGNED_SET = URL_SERVER_BASE + "/team/member/set_assigned"
export const URL_TEAM_MEMBER_ASSIGNED_GET = URL_SERVER_BASE + "/team/member/get_assigned"

// NOTIFICATION
export const URL_NOTIFICATION_LIST = URL_SERVER_BASE + "/notification/list"
export const URL_NOTIFICATION_ADD = URL_SERVER_BASE + "/notification/add"
export const URL_NOTIFICATION_UNREAD_COUNT_GET = URL_SERVER_BASE + "/notification/get_unread_count"
export const URL_NOTIFICATION_SET = URL_SERVER_BASE + "/notification/set"
export const URL_NOTIFICATION_READ_ALL_SET = URL_SERVER_BASE + "/notification/read_all"
export const URL_NOTIFICATION_DEL = URL_SERVER_BASE + "/notification/del"
export const URL_NOTIFICATION_DEL_ALL = URL_SERVER_BASE + "/notification/del_all"

// ALERT
// TODO: add_alert, set_alert, del_alert


// ----- ROUTES -----

export const ROUTE_HOME = "/"
export const ROUTE_LOGIN = "/login"
export const ROUTE_REGISTER = "/register"

export const ROUTE_SENSOR_LIST = "/sensor/list"
export const ROUTE_SENSOR_DETAILS = (id) => "/sensor/" + id + "/details"
export const ROUTE_SENSOR_EDIT = (id) => "/sensor/" + id + "/edit"
export const ROUTE_SENSOR_EDIT_CHART = (id) => "/sensor/" + id + "/edit/chart"

export const ROUTE_SGROUP_LIST = "/sgroup/list"
export const ROUTE_SGROUP_DETAILS = (id) => "/sgroup/" + id + "/details"
export const ROUTE_SGROUP_EDIT = (id) => "/sgroup/" + id + "/edit"
export const ROUTE_SGROUP_ADD = "/sgroup/add"

export const ROUTE_TMEMBER_LIST = "/team/member/list"
export const ROUTE_TMEMBER_DETAILS = (id) => "/team/member/" + id + "/details"
export const ROUTE_TMEMBER_EDIT = (id) => "/team/member/" + id + "/edit"
export const ROUTE_TMEMBER_ADD = "/team/member/add"

export const ROUTE_NOTIFS_LIST = "/notification/list"
export const ROUTE_NOTIFS_NEW = "/notification/new"

export const ROUTE_CONTACT = "/contact"

