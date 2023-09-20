import React from 'react'
import GlobalStyles from '../../globalStyles.module.css'
import Styles from './PrintBtn.module.css'

function PrintBtn() {
    return (
        <button className={`${Styles.btn} ${GlobalStyles.hideOnPrint}`} onClick={() => { window.print() }}>
            <span className={`${GlobalStyles.printIcon} material-symbols-outlined`}>print</span>
        </button>
    )
}

export default PrintBtn
