import React, { useEffect, useState } from 'react'
import GlobalStyles from '../../globalStyles.module.css'
import Styles from './MessengerInput.module.css'

function MessgenerInput() {

    const [error, setError] = useState(true)
    const [message, setMessage] = useState('')

    useEffect(() => {
        message == '' ? setError(true) : setError(false)
    }, [message])

    const redirectToWhatsapp = () => {
        const whatsappUrl = `https://wa.me/971506738672?text=${message}`
        setMessage('')
        window.open(whatsappUrl, '_blank');
    }

    return (
        <div className={`${Styles.MessgenerInputHolder} ${GlobalStyles.hideOnPrint}`}>
            <div className="container">
                <div className={Styles.wrapper}>
                    <input className={Styles.input} placeholder="👋 Let's connect via WhatsApp!" type="text" value={message} onChange={e => { setMessage(e.target.value) }} />
                    <button className={`${Styles.button} ${error ? Styles.inactive : Styles.active}`} onClick={() => redirectToWhatsapp()}>
                        <img className={Styles.sendButtonImg} src='https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695142808/Resume2023/send-messageSymbol_qbwepb.png' alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MessgenerInput
