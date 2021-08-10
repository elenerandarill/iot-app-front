import done from "../../media/done.svg";
import ActionIcon from "./ActionIcon";

const AlertDetailView = ({ a, onClick }) => {
    console.log("Wywolano")

    return(
        <div className="alert-open alert-new-open">
            <div className="white-space white-separated detail-view">
                {/*<i className="fas fa-times fa-lg icon paint-violet"  onClick={onClick}></i>*/}
                <ActionIcon action="close" descr="close" height={15}/>
                <div className="obj-details">
                    <div>{a.time} / {a.date}</div>
                    <div className="txt-semibold btn btn-small">
                        {a.datatype === "sensor"? "czujnik:" : "grupa:"}&nbsp;{a.name}
                    </div>
                    <div className="mrg-tb"><i>{a.msg}</i></div>
                    <div className="item-center">
                        <ActionIcon action="done" descr="check" height={30}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlertDetailView;