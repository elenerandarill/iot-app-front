import done from "../../media/done.svg";

const AlertDetailView = ({a}) => {
    console.log("Wywolano")

    return(
        <div className="alert-open alert-new-open">
            <div className="white-space white-separated">
                {/*{a.id}*/}
                <div className="info-window">
                    <b>{a.time}, {a.date}</b>
                    <p>{a.datatype}: {a.name}</p><br/>
                    {a.msg}
                    <div className="btn mrg-tb">zobacz&nbsp;
                        {a.datatype === "sensor"? "czujnik" : "grupa"}</div>
                    <img src={done} alt="mark as read" className="btn action-icon mrg-0"/>
                    <i className="fas fa-times" style={{color: "red"}}></i>
                </div>
            </div>
        </div>
    )
}

export default AlertDetailView;