import addNotification from "react-push-notification";


const PopAlerts = () => {

    const buttonClick = () => {
        console.log("Alert here")

        addNotification({
            title: 'Alert',
            subtitle: 'To jest alert próbny',
            message: 'Tutaj będzie wiadomość tego alertu. Na pewno bardzo ciekawa',
            theme: 'darkblue',
            native: false // when using native, your OS will handle theming.
        });
    };

    return (
        <div className="page">
            <button onClick={buttonClick} className="button">
                Alert me.
            </button>
        </div>
    )
}

export default PopAlerts;