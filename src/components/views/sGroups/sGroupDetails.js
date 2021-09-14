import {useHistory, useParams} from "react-router-dom";
import getSGroups, {GroupOfSensors} from "../../../FakeBackend/getSGroups";
import getSensors from "../../../FakeBackend/getSensors";
import ButtonFunc from "../../buttonFunc";
import ListAssignedObjects from "../../listAssignedObjects";
import {InputString, InputTextarea} from "../../attributes";
import {sensorObjectRenderer} from "../sensors/sensors";
import {BackendConnector} from "../../../FakeFrontend/backendConnector";
import {GET_SGROUP_URL, SET_TEAM_MEMBER_NAME_URL} from "../../../iotConfig";
import {useEffect, useState} from "react";


const SGroupDetails = () => {
    const [sgroup, setSgroup] = useState(undefined)
    const {id} = useParams();
    const history = useHistory()

    useEffect(() => {
        const fetchSgroup = async (id) => {
            console.log("Sending request to fetch sGroup")
            const res = await fetch(
                GET_SGROUP_URL,
                {
                    method: "POST",
                    body: JSON.stringify({"id": id})
                }
                )
            const resJson = await res.json()
            console.log("resp: ", res, ", resp.json: ", resJson)
            const sgroup = jsonToSgroup(resJson)
            console.log("sGroup details: ", sgroup)
            return sgroup
        }

        fetchSgroup(id)
            .then((sgroup) => setSgroup(sgroup))
    }, [id])

    const jsonToSgroup = (g) => {
        return new GroupOfSensors(g.id, g.name, g.assigned, g.measurements, g.notes)
    }

    if (!sgroup) {
        return(
            <div className="main">
                <div className="stats-title">nie znaleziono takiej grupy</div>
            </div>
        )
    }

    // const changeName = async (fullname) => {
    //     console.log("New input for field: ", fullname)
    //     const backConn = new BackendConnector()
    //     const response = await backConn.sendAttribute(
    //         SET,
    //         group,
    //         fullname
    //     )
    //     if (response.status === 200){
    //         history.push(`/team/${member.id}`)
    //     }
    //     else {
    //         console.log("Członek grupy - Nie udało się zmienić wartości, status: ", response.status)
    //     }
    // }

    return(
        <div className="main">
            <div className="buttons-container">
                <ButtonFunc text={"powrót do listy"} link={"/sgroups"}/>
                <ButtonFunc text={"usuń tę grupę"}/>
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        {sgroup.name}
                    </div>
                    <div className="white-space top-contact">
                        <InputString
                            label="nazwa"
                            name="groupName"
                            placeholder={sgroup.name}
                            // sendChange={changeName}
                        />

                        <InputTextarea
                            label="notatka"
                            name="groupNotes"
                            placeholder={sgroup.notes === "" ? "Tu wpisz notatkę." : sgroup.notes}
                            // onChange={}
                        />


                        <div className="shadow listed-attribute">
                            <div className="head-txt">OSTATNI POMIAR</div>
                            <div className="position-cent">
                                <div className="txt-violet txt-semibold object-container">

                                {/*do przerobienia!!!*/}
                                {/*    {Object.entries(group.measurements).map(([key, value]) =>*/}
                                {/*        <div key={key.toString()} className="mrg-tb mrg-lr">*/}
                                {/*            {key === "avTemp" && "śr. temperatura"}*/}
                                {/*            {key === "avHumid" && "śr. wilgotność"}*/}
                                {/*            {key === "avWind" && "śr. prędkość wiatru"}*/}
                                {/*            :<br/>*/}
                                {/*            <h2>{value}*/}
                                {/*                {key === "avTemp" && " °C"}*/}
                                {/*                {key === "avWind" && " km/h"}*/}
                                {/*            </h2>*/}
                                {/*        </div>*/}
                                {/*    )}*/}

                                </div>
                            </div>
                        </div>

                        <div className="shadow no-contact centered pad-bot-15px">
                            <div className="head-txt ">CZUJNIKI ({sgroup.assigned.length})</div>
                            <div className="position-cent">
                                <div className="object-container-grid">
                                    <div className="edit-objs-btn centered">
                                        <ButtonFunc
                                            text={"edytuj"}
                                            link={`/sgroups/${sgroup.id}/edit`}
                                        />
                                    </div>
                                    <div className="object-container txt-violet txt-semibold">

                                        {sgroup.assigned.length === 0
                                            ? <div className="centered">nie przypisano do żadnej grupy</div>
                                            : <ListAssignedObjects assigned={sgroup.assigned} list={getSensors}
                                                                   objectRenderer={sensorObjectRenderer}/>}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SGroupDetails;