import React from "react"
import styles from "./SwitchThemeMode.module.css"
import sun_icon from "../../assets/icon/sun_icon.svg"

function SwitchThemeMode() {
    return (
        <>
            <div className={styles.switch}>
                <div className={styles.switch_indicator}>
                    <div className={styles.switch_icon_container}>
                        <i><img src={sun_icon} alt="Sun Icon" /></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SwitchThemeMode