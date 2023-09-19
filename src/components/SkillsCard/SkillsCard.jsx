import React from 'react'
import Styles from './SkillsCard.module.css'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function SkillsCard({ ...props }) {
    return (
        <div className={Styles.card}>
            <div className={Styles.text}>
                <h3 className={Styles.title}>{props.content.title}</h3>
                <p className={Styles.writeUp}>{props.content.subText}</p>
            </div>
            <div className={Styles.progressBar}>
                <CircularProgressbarWithChildren
                    value={props.content.proficiency}
                    // text={`${props.content.proficiency}%`}
                    styles={{
                        root: {
                            height: '50px',
                            width: '50px'
                        },
                        path: {
                            // Path color
                            stroke: `rgba(0,0,0, ${props.content.proficiency / 100})`,
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',
                            // Customize transition animation
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            transformOrigin: 'center center',
                        },
                    }}
                >
                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                    <img style={{ height: '25px' }} src={props.content.icon} alt={props.content.title} />
                </ CircularProgressbarWithChildren>
            </div>
        </div>
    )
}

export default SkillsCard
