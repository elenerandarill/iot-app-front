import {Link} from "react-router-dom";
import ButtonFunc from "./buttonFunc";
import DisplayChoices from "./displayChoices";

/**
 * @param type --> sensors-in
 * @returns {JSX.Element}
 * @constructor
 */
const EditAssigned = ({headline, linkTo, object, availableChoices}) => {

    return (
        <div className="main">
            <div className="buttons-container">
                <Link to="/groups-of-sensors">
                    <ButtonFunc
                        text={"powrót do grupy"}
                        link={`/${linkTo}/${object.id}`}
                    />
                </Link>
                <ButtonFunc text={"usuń tę grupę"}/>
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        edycja {headline}
                    </div>

                    <div className="shadow no-contact centered txt-center">
                        <div className="head-txt">
                            Zaznacz czujniki, które chcesz monitorować w grupie
                        </div>
                        <div className="object-container">
                            <DisplayChoices availableChoices={availableChoices} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditAssigned;