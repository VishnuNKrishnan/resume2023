import React from 'react'
import Styles from './QrCodes.module.css'
import QRCode from '../QRCode/QRCode'

function QrCodesRibbon() {
    return (
        <div className='container'>
            <div className={Styles.wrapper}>
                <QRCode
                    qrImageUrl={'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695558845/ScanForWebVersion_fktz9x.png'}
                    writeUpHTML={<p>Scan to view<br />on the web</p>}
                />

                <QRCode
                    qrImageUrl={'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695233609/whatsappQR_eaot2v.png'}
                    writeUpHTML={<p>Scan to contact<br />me via WhatsApp</p>}
                />
            </div>
        </div>
    )
}

export default QrCodesRibbon
