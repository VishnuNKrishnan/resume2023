import React from 'react'
import Styles from './WhatsappQR.module.css'

function WhatsappQR() {
    return (
        <div className={Styles.wrapper}>
            <p>Scan to contact me<br />via WhatsApp</p>
            <img src="https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695233609/whatsappQR_eaot2v.png" alt="" />
        </div>
    )
}

export default WhatsappQR
