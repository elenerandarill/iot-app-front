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
                    <ButtonFunc
                        text={"anuluj"}
                        link={`/${linkTo}/${object.id}`}
                    />
            </div>

            <div className="content-3x">
                <div className="content-srodek">
                    <div className="headline-color">
                        edycja {headline} - {object.name}
                    </div>

                    <div className="shadow white-space top-contact  txt-center">
                        <div className="head-txt">
                            {object.sn ? "Zaznacz grupy, do których chcesz przypisać czujnik "
                                : "Zaznacz czujniki, które chcesz monitorować w grupie "}
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