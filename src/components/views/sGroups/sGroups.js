import ListObjects from "../../listObjects";
import {Link, useHistory} from "react-router-dom";
import {fetchSgroups} from "../../../FakeFrontend/backendSgroupConnector";
import {useEffect, useState} from "react";
import {ButtonLink} from "../../buttons";
import {ROUTE_SGROUP_NEW, ROUTE_SGROUP_DETAILS} from "../../../iotConfig";
import UserViews from "../userViews";
import {handleUnauthorizedException} from "../../../FakeFrontend/backendConnector";

/**
 * @param group {GroupOfSensors}
 * @returns {JSX.Element}
 */
export const groupObjectRenderer = (group) => {
    // console.log("renderer dostaje: ", group)
    return (
        <Link
            key={group.id}
            to={ROUTE_SGROUP_DETAILS(group.id)}
        >
            <div className={"object shadow" + (group.is_new ? " mark-as-new" : "")}>
                <div className="txt-semibold">{group.name}</div>
            </div>
        </Link>
    )
}

const SGroups = () => {
    const [sGroups, setSgroups] = useState([]);
    const history = useHistory()

    // zaraz po zaladowaniu strony pobierz obiekty z backendu
    useEffect(() => {
        fetchSgroups()
            .then(setSgroups)
            .catch(error => handleUnauthorizedException(error, history))
    }, [])


    return (
        <UserViews>
            <div className="main">
                <div className="buttons-container">
                    <ButtonLink
                        text="nowa grupa"
                        add={true}
                        link={ROUTE_SGROUP_NEW}
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
        </UserViews>
    )
}

export default SGroups;