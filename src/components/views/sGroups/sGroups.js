import ListObjects from "../../listObjects";
import {Link} from "react-router-dom";
import {fetchSgroups} from "../../../FakeFrontend/backendSgroupConnector";
import {useEffect, useState} from "react";
import {ButtonLink} from "../../buttons";

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
                <ButtonLink
                    text="nowa grupa"
                    add={true}
                    link={"/sgroups/add"}
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