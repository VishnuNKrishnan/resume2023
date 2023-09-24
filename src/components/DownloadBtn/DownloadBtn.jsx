import React from 'react'
import GlobalStyles from '../../globalStyles.module.css'
import Styles from './DownloadBtn.module.css'
import CV from '../../assets/VISHNU-NAVANEETH-KRISHNAN-CV.pdf'

function DownloadBtn() {

    return (
        <a className={`${Styles.btn} ${GlobalStyles.hideOnPrint}`} href={CV} download={true}>
            <span className={`${GlobalStyles.printIcon} material-symbols-outlined`}>download</span>
        </a>
    )
}

export default DownloadBtn
