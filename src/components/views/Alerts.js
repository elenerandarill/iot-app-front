import done from "../../media/done.svg";
import del from "../../media/delete.svg";

const Alerts = () => {
    return (
        <div className="main">
            <div className="main-split">
                <div className="alerts-new">
                    <p className="btn-purple btn-section">
                        nowe alerty (0)
                    </p>
                    <div className="white-space white-contact">

                        <div className="alert-msg alert-new">
                            <p>2021.10.13 <b>czujnik: "moj-sad-011" </b> brak dostępu do sieci od 9:15, problemy z łącznością,
                                ostatni raport otrzymano o 9:00</p>
                            <img src={done} alt="mark as read" className="btn action-icon"/>
                        </div>
                        <div className="alert-msg alert-new">
                            <p>2021.09.11 <b>czujnik: "moj-sad-012"</b> brak dostępu do sieci od 9:15, problemy z łącznością,
                                ostatni raport otrzymano o 9:00</p>
                            <img src={done} alt="mark as read" className="btn action-icon"/>
                        </div>
                        <div className="alert-msg alert-new">
                            <p>2021.09.11 <b>czujnik: "moj-sad-011"</b> brak dostępu do ...</p>
                            <img src={done} alt="mark as read" className="btn action-icon"/>
                        </div>
                        <div className="alert-msg alert-new">
                            <p>2021.09.11 <b>czujnik: "moj-sad-012"</b> brak dostępu do sieci od 9:15, problemy z łącznością,
                                ostatni raport otrzymano o 9:00</p>
                            <img src={done} alt="mark as read" className="btn action-icon"/>
                        </div>

                    </div>
                </div>
                <div className="alerts-old">
                    <p className="btn btn-purple btn-section">
                        historia alertów
                    </p>
                    <div className="white-space white-contact">
                        <div className="alert-msg alert-old">
                            <p>2021.09.11 <b>czujnik: "moj-sad-012"</b>  brak dostępu do sieci od 9:15, problemy z łącznością,
                                ostatni raport otrzymano o 9:00</p>
                            <img src={del} alt="mark as read" className="btn action-icon"/>
                        </div>
                    </div>
                </div>

                {/* details for the new alert */}
                <div className="alert-open alert-new-open">
                    <div className="white-space white-separated">
                        <p className="alert-details-window">
                            <b>2021.10.13</b>
                            <p>czujnik: "moj-sad-011"</p>
                            <br/>
                            Stan baterii 15/100, ostatni raport otrzymano o 9:00
                            <div className="btn mrg-tb">zobacz&nbsp;czujnik</div>
                            <img src={done} alt="mark as read" className="btn action-icon mrg-0"/>
                        </p>
                    </div>
                </div>
                {/* details for the old alert */}
                <div className="alert-open alert-old-open">
                    <div className="white-space white-separated">
                        <p className="alert-details-window">
                            <b>2021.10.13</b>
                            <p>czujnik: "moj-sad-011"</p>
                            <br/>
                            Stan baterii 15/100, ostatni raport otrzymano o 9:00
                            <div className="btn mrg-tb">zobacz&nbsp;czujnik</div>
                            <img src={done} alt="mark as read" className="btn action-icon mrg-0"/>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Alerts;