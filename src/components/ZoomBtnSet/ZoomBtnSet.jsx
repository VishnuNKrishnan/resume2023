import React, { useContext } from 'react'
import UserContext from '../../UserContext'
import GlobalStyles from '../../globalStyles.module.css'
import Styles from './ZoomBtnSet.module.css'

function ZoomBtnSet() {
    const context = useContext(UserContext)
    return (
        <>
            <button className={`${Styles.plusBtn} ${GlobalStyles.hideOnPrint}`} onClick={() => { context.doZoom('in') }}>
                <span className={`${GlobalStyles.printIcon} material-symbols-outlined`}>zoom_in</span>
            </button>

            <button className={`${Styles.minusBtn} ${GlobalStyles.hideOnPrint}`} onClick={() => { context.doZoom('out') }}>
                <span className={`${GlobalStyles.printIcon} material-symbols-outlined`}>zoom_out</span>
            </button>
        </>
    )
}

export default ZoomBtnSet
