import {BackendResponse} from "./backendResponse";
import {GET_SENSOR_URL, GET_SENSORS_URL, GET_SGROUP_URL, GET_SGROUPS_URL, GET_TEAM_MEMBER_URL} from "../iotConfig";
import {Sensor} from "../FakeBackend/getSensors";
import {GroupOfSensors} from "../FakeBackend/getSGroups";
import {Member} from "../FakeBackend/getMembers";

//////////

export const getSensors = async () => {
    const sensorsFromServer = await fetchSensors()
    console.log("sensorsFromServer: ", sensorsFromServer)
    return jsonToSensors(sensorsFromServer)
}

const fetchSensors = async () => {
    console.log("Sending request to fetch Sensors")
    const res = await fetch(
        GET_SENSORS_URL,
        {method: "POST"}
    )
    return await res.json()
}

const jsonToSensors = (list) => {
    const list2 = list.map(s =>
        new Sensor(s.id, s.type, s.name, s.sn, s.battery, s.assigned,
            s.measurements, s.GPS, s.notes))
    console.log("[ from backend ] all objects of type Sensor: ", list2)
    return list2
}
//////////////

export const fetchSensor = async (id) => {
    console.log("Sending request to fetch Sensor")
    const res = await fetch(
        GET_SENSOR_URL,
        {
            method: "POST",
            body: JSON.stringify({"id": id})
        }
    )
    const resJson = await res.json()
    console.log("resp: ", res, ", resp.json: ", resJson)
    const sensor = jsonToSensor(resJson)
    console.log("sensor details: ", sensor)
    return sensor
}
const jsonToSensor = (s) => {
    return new Sensor(s.id, s.type, s.name, s.sn, s.battery, s.assigned,
        s.measurements, s.GPS, s.notes)
}

//////////////////

export const getSgroups = async () => {
    const sGoupsFromServer = await fetchSgroups()
    console.log("sGoupsFromServer: ", sGoupsFromServer)
    return jsonToSgroups(sGoupsFromServer)
}


const fetchSgroups = async () => {
    console.log("Sending request to fetch sGroups")
    const res = await fetch(
        GET_SGROUPS_URL,
        { method: "POST" }
    )
    return await res.json()
}

const jsonToSgroups = (list) => {
    const list2 = list.map(g =>
        new GroupOfSensors(g.id, g.name, g.assigned, g.measurements, g.notes))
    console.log("[ from backend ] all objects of type GroupOfSensors: ", list2)
    return list2
}

/////////////

export const fetchSgroup = async (id) => {
    console.log("Sending request to fetch Sgroup")
    const res = await fetch(
        GET_SGROUP_URL,
        {
            method: "POST",
            body: JSON.stringify({"id": id})
        }
    )
    const resJson = await res.json()
    console.log("resp: ", res, ", resp.json: ", resJson)
    const sensor = jsonToSgroup(resJson)
    console.log("sensor details: ", sensor)
    return sensor
}
const jsonToSgroup = (g) => {
    return new GroupOfSensors(g.id, g.name, g.assigned, g.measurements, g.notes)
}

//////////////////

export const fetchMember = async (id) => {
    console.log("Sending request to fetch Member")
    const res = await fetch(
        GET_TEAM_MEMBER_URL,
        {
            method: "POST",
            body: JSON.stringify({"id": id})
        }
    )
    const resJson = await res.json()
    console.log("resp: ", res, ", resp.json: ", resJson)
    const member = jsonToMember(resJson)
    console.log("member details: ", member)
    return member
}
const jsonToMember = (m) => {
    return new Member(m.id, m.fullname, m.joinedAt, m.assigned, m.notes)
}

//////////////////



export class BackendConnector {

    /**
     * @param url {string}
     * @param object {any}
     * @param assigned {string[]}
     * @returns {Promise<BackendResponse>}
     */
    async sendAssigned(url, object, assigned) {
        const id = object.id

        const assignedIds = (assigned) => {
            // returns list of ids
            return assigned.map(a => a.id)
        }

        let data = {
            $schema: "https://json-schema.org/draft/2020-12/schema",
            $id: "https://example.com/product.schema.json",
            objectId: id,
            assigned: assignedIds(assigned)
        }
        // console.log("przekazano: ", object)

        // POST
        return await this.sendForm(url, data)
    }

    /**
     * @param url {string}
     * @param object {any}
     * @param value {string[]}
     * @returns {Promise<BackendResponse>}
     */
    async sendAttribute(url, object, value) {
        const id = object.id

        let data = {
            $schema: "https://json-schema.org/draft/2020-12/schema",
            $id: "https://example.com/product.schema.json",
            objectId: id,
            value: value
        }
        // console.log("przekazano: ", object)

        // POST
        return await this.sendForm(url, data)
    }



    /**
     * @param url {string}
     * @param data {Object.<string, any>}
     * @returns {Promise<BackendResponse>}
     */
    async sendForm(url, data) {
        console.log("[ Connector ] sending URL: ", url, ", data: ", data)
        const res = await fetch(
            url,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        )

        const resStatus = res.status
        // Aby wyciagnac body! i tez zwraca Promise, stąd await
        const resJson = await res.json()
        console.log("[ Response ] STATUS: ", resStatus, ", resp BODY: ", resJson)

        return new BackendResponse(resStatus, resJson)
    }
}

