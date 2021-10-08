import {useState} from "react";
import {useHistory} from "react-router-dom";
import {ButtonFunc, ButtonLink} from "../../buttons";
import {ROUTE_SGROUP_DETAILS, ROUTE_SGROUP_LIST} from "../../../iotConfig";
import {newSgroup} from "../../../FakeFrontend/backendSgroupConnector";
import UserViews from "../userViews";
// import fakeMeasurements from "../../../FakeFrontend/getGroupMeasurements";


const NewSGroup = () => {
    const [gname, setGname] = useState("");
    const history = useHistory();

    const handleSend = () => {
        newSgroup(gname)
            .then((id) => history.push(ROUTE_SGROUP_DETAILS(id)))
    }

    return (
        <UserViews>
            <div className="main">
                <div className="buttons-container">
                    <ButtonLink text={"powrót do listy"} link={ROUTE_SGROUP_LIST}/>
                </div>

                <div className="content-3x">
                    <div className="content-srodek">

                        <div className="headline-color">
                            Tworzenie nowej grupy czujników
                        </div>
                        <div className="white-space top-contact">

                            <div className="shadow no-contact centered">
                                <div className="head-txt">NAZWA</div>
                                <div className="position-cent">
                                    <input
                                        type="text"
                                        placeholder="nazwa"
                                        className="input"
                                        value={gname}
                                        onChange={(e) => setGname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="object-container">
                                <ButtonFunc
                                    text="utwórz"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleSend()
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserViews>
    )
}

export default NewSGroup;