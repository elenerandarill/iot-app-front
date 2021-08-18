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
                        edycja {headline}
                    </div>

                    <div className="shadow top-contact centered txt-center">
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