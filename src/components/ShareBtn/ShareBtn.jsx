import React, { useContext } from 'react'
import GlobalStyles from '../../globalStyles.module.css'
import Styles from './ShareBtn.module.css'

function ShareBtn() {

    const doShare = async () => {
        const shareData = {
            title: document.title,
            text: "Vishnu's Web CV",
            url: window.location.href,
        }

        try {
            await navigator.share(shareData)
        } catch (err) {
            console.error = `Share error: ${err}`;
        }
    }

    return (
        <button className={`${Styles.shareBtn} ${GlobalStyles.hideOnPrint}`} onClick={doShare}>
            <span className={`${GlobalStyles.printIcon} material-symbols-outlined`}>share</span>
        </button>
    )
}

export default ShareBtn
