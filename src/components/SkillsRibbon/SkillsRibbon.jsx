import React from 'react'
import Styles from './SkillsRibbon.module.css'

function SkillsRibbon() {

    const skillsArray = [
        {
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695022314/Resume2023/reactIcon.png',
            skillName: 'React JS'
        },
        {
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695132589/Resume2023/nodeJSLogo_ismdo2.png',
            skillName: 'Node JS'
        },
        {
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695045434/Resume2023/expressLogo_vh8zbe.png',
            skillName: 'Express'
        },
        {
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695131988/Resume2023/firebaseLogo_lqov3f.svg',
            skillName: 'Google Firebase'
        },
        {
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695131863/Resume2023/mongoDbLogo.png',
            skillName: 'Mongo DB'
        },
        {
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695140418/Resume2023/awsLogo_nbe86w.png',
            skillName: 'AWS'
        }
    ]

    return (
        <div className={Styles.ribbon}>
            <div className="container">
                <div className={Styles.item}>
                    {
                        skillsArray.map(obj => {
                            return (
                                <>
                                    <div className={Styles.customIcon}>
                                        <img src={obj.icon} alt={obj.skillName} />
                                    </div>
                                    <span className={Styles.writeUp}>{obj.skillName}</span>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SkillsRibbon
