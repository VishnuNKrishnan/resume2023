import React from 'react'
import Styles from './QRCode.module.css'

function QRCode({ ...props }) {
    return (
        <div className={Styles.wrapper}>
            {props.writeUpHTML ? props.writeUpHTML : 'Write Up'}
            <img src={props.qrImageUrl} alt={props.writeUpHTML ? props.writeUpHTML : 'Write Up'} />
        </div>
    )
}

export default QRCode
