import '../styles/components/switchbutton.sass'

import sun_icon from "../assets/icon/sun_icon.png"

function SwitchButton() {
    return (
        <>
            <div className="btn">
                <div className="btn_indicator">
                    <div className="btn_icon-container">
                        <img src={sun_icon} alt="sun icon" className="sun_icon" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SwitchButton