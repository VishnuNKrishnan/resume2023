import React from 'react'
import Styles from './EducationCard.module.css'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function EducationCard({ ...props }) {
    return (
        <div className={Styles.card}>
            <div className={Styles.text}>
                <h3 className={Styles.title}>{props.content.title}</h3>
                <p className={Styles.writeUp}>{props.content.subText}</p>
                <p className={Styles.writeUp}>{props.content.writeUp}</p>
            </div>
            <div className={Styles.progressBar}>
                <img className={Styles.icon} src={props.content.icon} alt={props.content.title} />
            </div>
        </div>
    )
}

export default EducationCard
