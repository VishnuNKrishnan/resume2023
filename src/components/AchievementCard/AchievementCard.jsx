import React from 'react'
import Styles from './AchievementCard.module.css'

function AchievementCard({ ...props }) {
    return (
        <div className={Styles.card}>
            <h3 className={Styles.title}>{props.content.icon !== '' && <img className={Styles.icon} src={props.content.icon} alt={props.content.title} />}{props.content.title}</h3>
            <p className={Styles.writeUp}>{props.content.description}</p>
        </div>
    )
}

export default AchievementCard
