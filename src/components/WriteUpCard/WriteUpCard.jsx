import React from 'react'
import GlobalStyles from '../../globalStyles.module.css'
import Styles from './WriteUpCard.module.css'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import AchievementCard from '../AchievementCard/AchievementCard'
import SkillsCard from '../SkillsCard/SkillsCard'

function WriteUpCard({ ...props }) {
    return (
        <>
            {(props.type == 'profile' || props.type == 'strengths') &&
                <div className={Styles.card} style={{ width: props.width ? props.width : '750px' }}>
                    <h3 className={Styles.cardTitle}><span className={`${GlobalStyles.titleIcon} material-symbols-outlined`}>{props.googleIcon}</span>{props.title}</h3>
                    <ul className={Styles.content}>
                        {
                            !!props.content.length && props.content.map((obj, key) => {
                                return (
                                    <li className={Styles.contentItem} key={key}>{obj}</li>
                                )
                            })
                        }
                    </ul>
                </div>}

            {props.type == 'experience' &&
                <div className={Styles.card} style={{ width: props.width ? props.width : '750px' }}>
                    <h3 className={Styles.cardTitle}><span className={`${GlobalStyles.titleIcon} material-symbols-outlined`}>{props.googleIcon}</span>{props.title}</h3>
                    <div className={Styles.cardsHolder}>
                        {
                            !!props.content.length && props.content.map((obj, key) => {
                                return (
                                    <ExperienceCard
                                        key={key}
                                        content={obj}
                                    />
                                )
                            })
                        }
                    </div>
                </div>}

            {props.type == 'achievement' &&
                <div className={Styles.card} style={{ width: props.width ? props.width : '750px' }}>
                    <h3 className={Styles.cardTitle}><span className={`${GlobalStyles.titleIcon} material-symbols-outlined`}>{props.googleIcon}</span>{props.title}</h3>
                    <div className={Styles.cardsHolder}>
                        {
                            !!props.content.length && props.content.map((obj, key) => {
                                return (
                                    <AchievementCard
                                        key={key}
                                        content={obj}
                                    />
                                )
                            })
                        }
                    </div>
                </div>}

            {props.type == 'skill' &&
                <div className={Styles.card} style={{ width: props.width ? props.width : '750px' }}>
                    <h3 className={Styles.cardTitle}><span className={`${GlobalStyles.titleIcon} material-symbols-outlined`}>{props.googleIcon}</span>{props.title}</h3>
                    <div className={Styles.cardsHolder}>
                        {
                            !!props.content.length && props.content.map((obj, key) => {
                                return (
                                    <SkillsCard
                                        key={key}
                                        content={obj}
                                    />
                                )
                            })
                        }
                    </div>
                </div>}
        </>
    )
}

export default WriteUpCard
