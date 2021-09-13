import { useParams } from "react-router-dom";
import getSGroups from "../../../FakeBackend/getSGroups";
import getSensors from "../../../FakeBackend/getSensors";
import ButtonFunc from "../../buttonFunc";
import ListAssignedObjects from "../../listAssignedObjects";
import {InputString, InputTextarea} from "../../attributes";
import {sensorObjectRenderer} from "../sensors/sensors";
import {BackendConnector} from "../../../FakeFrontend/backendConnector";
import {SET_TEAM_MEMBER_NAME_URL} from "../../../iotConfig";


const SGroupDetails = () => {
    const {id} = useParams();

    const getGroup = (id) => {
        // zwraca liste!
        return getSGroups.filter(s => s.id === id)[0]
    }

    const group = getGroup(id);

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
                        {group.name}
                    </div>
                    <div className="white-space top-contact">
                        <InputString
                            label="nazwa"
                            name="groupName"
                            placeholder={group.name}
                            // sendChange={changeName}
                        />

                        <InputTextarea
                            label="notatka"
                            name="groupNotes"
                            placeholder={group.notes === "" ? "Tu wpisz notatkę." : group.notes}
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
                            <div className="head-txt ">CZUJNIKI ({group.assigned.length})</div>
                            <div className="position-cent">
                                <div className="object-container-grid">
                                    <div className="edit-objs-btn centered">
                                        <ButtonFunc
                                            text={"edytuj"}
                                            link={`/sgroups/${group.id}/edit`}
                                        />
                                    </div>
                                    <div className="object-container txt-violet txt-semibold">

                                        {group.assigned.length === 0
                                            ? <div className="centered">nie przypisano do żadnej grupy</div>
                                            : <ListAssignedObjects assigned={group.assigned} list={getSensors}
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