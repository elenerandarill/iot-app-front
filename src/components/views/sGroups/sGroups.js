import {ButtonLink} from "../../buttons";
import ListObjects from "../../listObjects";
import {Link} from "react-router-dom";
// import {GroupOfSensors} from "../../../FakeBackend/getSGroups";
import {fetchSgroups} from "../../../FakeFrontend/backendSgroupConnector";
import {useEffect, useState} from "react";

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
        fetchSgroups()
            .then(sGroups => setSgroups(sGroups))
    }, [])


    return(
        <div className="main">
            <div className="buttons-container">
                <Link to={"/sgroups/add"}>
                    <div className="btn btn-color">
                        <i className="fas fa-plus mrg-r5"/>
                        nowa grupa
                    </div>
                </Link>
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