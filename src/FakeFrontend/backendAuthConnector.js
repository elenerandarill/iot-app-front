import {URL_LOGIN, URL_LOGOUT, URL_REGISTER} from "../iotConfig";
import {sendRequest} from "./backendConnector";

export const sendRegister = async (ufname, ulname, uemail, upass) => {
    return  await sendRequest(
        URL_REGISTER,
        {
            "UFNAME": ufname,
            "ULNAME": ulname,
            "UEMAIL": uemail,
            "UPASS": upass,
        }
    )
}

export const sendLogin = async (email, pass) => {
    const res = await sendRequest(
        URL_LOGIN,
        {
            "UEMAIL": email,
            "UPASS": pass
        }
    )
    return res.body
}

export const sendLogout = async () => {
    const res = await sendRequest(
        URL_LOGOUT
    )
    return res.status
}

