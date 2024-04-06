import React from 'react'

import sun_icon from "../assets/icon/sun_icon.png"
import '../styles/components/switchbutton.sass'

function SwitchButton({ setTemaEscuro }) {
    const handleClick = () => {
        setTemaEscuro(prevState => !prevState)
    }

    return (
        <>
            <div className="btn" onClick={handleClick}>
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