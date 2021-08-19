import ButtonFunc from "./buttonFunc";
import DisplayChoices from "./displayChoices";

/**
 * @param type --> sensors-in
 * @returns {JSX.Element}
 * @constructor
 */
const EditAssigned = ({headline, linkTo, object, availableChoices}) => {

    const headline2 = (object) => {
        if (object.fullname) {
            return "Zaznacz grupy, do których udzielasz dostępu"
        }
        else if (object.sn) {
            return "Zaznacz grupy, w których ma być czujnik"
        }
        else {
            return "Zaznacz czujniki, które chcesz monitorować w grupie"
        }
    }

    const getAssignedObjects = (obj) => {
        const results = availableChoices.filter(o => obj.assigned.includes(o.id));
        console.log(results);
        return results
    }

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
                        edycja {headline} {object.name}
                    </div>

                    <div className="shadow white-space top-contact  txt-center">
                        <div className="head-txt">
                            {headline2(object)}
                        </div>
                        <div className="object-container">
                            <DisplayChoices availableChoices={availableChoices} alreadyAssigned={getAssignedObjects(object)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditAssigned;