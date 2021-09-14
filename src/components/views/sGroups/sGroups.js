import ButtonFunc from "../../buttonFunc";
import ListObjects from "../../listObjects";
import {Link} from "react-router-dom";
import {GroupOfSensors} from "../../../FakeBackend/getSGroups";
import {useEffect, useState} from "react";
import {GET_SGROUPS_URL} from "../../../iotConfig";

/**
 * @param group {GroupOfSensors}
 * @returns {JSX.Element}
 */
export const groupObjectRenderer = (group) => {
    // console.log("renderer dostaje: ", group)
    return (
        <Link
            key={group.id}
            to={`/sgroups/${group.id}`}
        >
            <div className={"object shadow" + (group.assigned.length === 0 ? " mark-as-new" : "")}>
                <div className="txt-semibold">{group.name}</div>
            </div>
        </Link>
    )
}

const SGroups = () => {
    const [sGroups, setSgroups] = useState([]);

    // zaraz po zaladowaniu strony pobierz obiekty z backendu
    useEffect(() => {
        const getSgroups = async () => {
            const sGoupsFromServer = await fetchSgroup()
            console.log("sGoupsFromServer: ", sGoupsFromServer)
            return jsonToSgroup(sGoupsFromServer)
        }

        getSgroups()
            .then(sGroups => setSgroups(sGroups))
    }, [])

    const fetchSgroup = async () => {
        console.log("Sending request to fetch sGroups")
        const res = await fetch(
            GET_SGROUPS_URL,
            { method: "POST" }
        )
        return await res.json()
    }

    const jsonToSgroup = (list) => {
        const list2 = list.map(g =>
            new GroupOfSensors(g.id, g.name, g.assigned, g.measurements, g.notes))
        console.log("[ from backend ] all objects of type GroupOfSensors: ", list2)
        return list2
    }


    return(
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc
                    text={"nowa grupa"}
                    add={true}
                    link={"/add/sgroups"}
                />
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">Grupy czujników</div>
                    <div className="white-space top-contact">
                        <ListObjects
                            list={sGroups}
                            objectRenderer={groupObjectRenderer}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SGroups;