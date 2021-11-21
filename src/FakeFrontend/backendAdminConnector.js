import {sendRequest} from "./backendConnector";
import {URL_SETYPE_DEL, URL_SETYPE_LIST, URL_SETYPE_NEW, URL_TEAM_MEMBER_ADMIN_LIST} from "../iotConfig";

/** @return {Promise<*>} */
export const fetchUGRM = async () => {
    const res = await sendRequest(
        URL_TEAM_MEMBER_ADMIN_LIST,
        {}
    )
    return res.body
}

/** @return {Promise<*>} */
export const fetchSETYPE = async () => {
    const res = await sendRequest(
        URL_SETYPE_LIST,
        {}
    )
    return res.body
}

/** @return {Promise<*>} */
export const newSETYPE = async (name, manuf) => {
    const res = await sendRequest(
        URL_SETYPE_NEW,
        {
            "STNAME": name,
            "STMAN": manuf
        }
    )
    return res.body["STYID"]
}

/** @return {Promise<*>} */
export const delSETYPE = async (stId) => {
    const res = await sendRequest(
        URL_SETYPE_DEL,
        {"STYID": parseInt(stId)}
    )
    return res.body
}