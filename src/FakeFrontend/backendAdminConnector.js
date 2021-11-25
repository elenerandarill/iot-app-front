import {sendRequest} from "./backendConnector";
import {
    URL_PERM_DEL,
    URL_PERM_LIST, URL_PERM_NEW, URL_PERM_SET,
    URL_SDDN_DEL,
    URL_SDDN_LIST, URL_SDDN_SET,
    URL_SETYPE_DEL,
    URL_SETYPE_LIST,
    URL_SETYPE_NEW,
    URL_SGMEMB_LIST,
    URL_TEAM_MEMBER_ADMIN_LIST
} from "../iotConfig";


// UGRM - add & rem -> done by addMember, remMember
/** @return {Promise<*>} */
export const fetchUGRM = async () => {
    const res = await sendRequest(
        URL_TEAM_MEMBER_ADMIN_LIST,
        {}
    )
    return res.body
}

//SETYPE
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

// SGMEMB - add & rem -> done by addSgroupMemb, remSgroupMemb
/** @return {Promise<*>} */
export const fetchSGMEMB = async () => {
    const res = await sendRequest(
        URL_SGMEMB_LIST,
        {}
    )
    return res.body
}

// SDDN = Sensor Data Display Name
/** @return {Promise<*>} */
export const fetchSDDN = async () => {
    const res = await sendRequest(
        URL_SDDN_LIST,
        {}
    )
    return res.body
}

/** @return {Promise<*>} */
export const setSDDN = async (id, name, alias) => {
    const res = await sendRequest(
        URL_SDDN_SET,
        {
            "SDDSID": id,
            "SDDPN": name,
            "SDDPA": alias
        }
    )
    return res.body
}


/** @return {Promise<*>} */
export const delSDDN = async (id) => {
    const res = await sendRequest(
        URL_SDDN_DEL,
        {
            "SDDSID": id
        }
    )
    return res.body
}

// PERM
/** @return {Promise<*>} */
export const fetchPERM = async () => {
    const res = await sendRequest(
        URL_PERM_LIST,
        {}
    )
    return res.body
}

/**
 *
 * @param perm {PERM}
 * @return {Promise<*>}
 */
export const newPERM = async (perm) => {
    const res = await sendRequest(
        URL_PERM_NEW,
        {
            "PEOID": perm.PEOID,
            "PEOBJ": perm.PEOBJ,
            "PEOIDT": perm.PEOIDT,
            "PEOBJT": perm.PEOBJT,
            "PEMASK": perm.PEMASK
        }
    )
    return res.body
}


/**
 *
 * @param perm {PERM}
 * @return {Promise<*>}
 */
export const delPERM = async (perm) => {
    const res = await sendRequest(
        URL_PERM_DEL,
        {
            "PEOID": perm.PEOID,
            "PEOBJ": perm.PEOBJ,
            "PEOIDT": perm.PEOIDT,
            "PEOBJT": perm.PEOBJT,
            "PEMASK": perm.PEMASK
        }
    )
    return res.body
}

/**
 *
 * @param perm {PERM}
 * @return {Promise<*>}
 */
export const setPEMASK = async (perm) => {
    const res = await sendRequest(
        URL_PERM_SET,
        {
            "PEOID": perm.PEOID,
            "PEOBJ": perm.PEOBJ,
            "PEOIDT": perm.PEOIDT,
            "PEOBJT": perm.PEOBJT,
            "PEMASK": perm.PEMASK
        }
    )
    return res.body
}