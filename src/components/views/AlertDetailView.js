import done from "../../media/done.svg";
import ActionIcon from "./ActionIcon";

const AlertDetailView = ({ a, onCloseClick }) => {
    console.log("Wywolano")

    return(
        <div className=" ">
            <div className="white-space no-contact detail-view">
                {/*<i className="fas fa-times fa-lg icon paint-violet"  onClick={onClick}></i>*/}
                <ActionIcon onClick={onCloseClick} action="close" descr="close" height={15}/>
                <div className="obj-details">
                    <div>{a.date} / {a.time}</div>
                    <div className="txt-semibold btn btn-small">
                        {a.datatype === "sensor"? "czujnik:" : "grupa:"}&nbsp;{a.name}
                    </div>
                    <div className="mrg-tb mrg-lr"><i>{a.msg}</i></div>
                </div>
            </div>
        </div>
    )
}

export default AlertDetailView;