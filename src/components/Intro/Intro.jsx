import React from 'react'
import GlobalStyles from '../../globalStyles.module.css'
import Styles from './Intro.module.css'

function Intro() {
    return (
        <div className={Styles.card}>
            <div className='container'>
                <div className={Styles.infoHolder}>
                    <div className={Styles.photo}></div>
                    <div className={Styles.writeUp}>
                        <h1 className={Styles.fullname}>VISHNU NAVANEETH KRISHNAN</h1>
                        <h2 className={Styles.designation}><span className={`${GlobalStyles.icon} material-symbols-outlined`}>business_center</span>Engineer, Web Applications</h2>
                        <h2 className={Styles.designation}><span className={`${GlobalStyles.icon} material-symbols-outlined`}>apartment</span> DAMAC Properties LLC</h2>
                        <h2 className={Styles.designation}><span className={`${GlobalStyles.icon} material-symbols-outlined`}>school</span>King's College London</h2><br></br>
                        <h2 className={Styles.designation}><span className={`${GlobalStyles.icon} material-symbols-outlined`}>mail</span>vishnunavaneet@gmail.com</h2>
                        <h2 className={Styles.designation}><span className={`${GlobalStyles.icon} material-symbols-outlined`}>call</span> +971 50 673 8672</h2>
                    </div>
                </div>
            </div>
            {/* <div className={Styles.bgGraphic}></div> */}
        </div>
    )
}

export default Intro
