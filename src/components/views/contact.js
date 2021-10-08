import UserViews from "./userViews";

const Contact = () => {
    return (
        <UserViews>
            <div className="main">
                <div className="content-3x">
                    <div className="content-srodek">
                        <div className="white-space no-contact">

                            <div className="contact-container big-padding">
                                <div className="contact-way centered">
                                    email
                                    <div className="contact-details">email@iotsolution.pl</div>
                                </div>

                                <div className="contact-way centered">
                                    Telefon
                                    <div className="contact-details">+48 111-222-333</div>
                                </div>

                                <div className="contact-way centered txt-center">
                                    Adres kontaktowy
                                    <div className="contact-details">
                                        IoT Solution<br/> ul. Jakaś-tam 13<br/>00-000 MIEJSCOWOŚĆ
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserViews>
    )
}

export default Contact;