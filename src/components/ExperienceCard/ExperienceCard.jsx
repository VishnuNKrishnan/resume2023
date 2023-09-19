import React from 'react'
import GlobalStyles from '../../globalStyles.module.css'
import Styles from './ExperienceCard.module.css'

function ExperienceCard({ ...props }) {
    return (
        <div className={Styles.card}>
            {/* {
                props.content.logo !== '' && (
                    <img className={Styles.companyLogo} src={props.content.logo} alt={props.content.company} />
                )
            } */}
            <h3 className={Styles.title}><span className={`${GlobalStyles.icon} material-symbols-outlined`}>work</span>{props.content.designation}</h3>
            <p className={Styles.companyName}><span className={`${GlobalStyles.icon} material-symbols-outlined`}>apartment</span>{props.content.company}</p>
            <p className={Styles.period}><span className={`${GlobalStyles.icon} material-symbols-outlined`}>calendar_month</span>{`${props.content.from} to ${props.content.to}`}</p>
            {
                props.content.writeUp !== '' && (
                    <p className={Styles.writeUp}>{props.content.writeUp}</p>
                )
            }
        </div>
    )
}

export default ExperienceCard
