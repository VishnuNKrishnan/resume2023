import React from 'react'
import GlobalStyles from '../../globalStyles.module.css'
import Styles from './CardsContainer.module.css'
import WriteUpCard from '../WriteUpCard/WriteUpCard'

function CardsContainer() {
    const profileArray = [
        'Self-taught web applications developer with notable achievements such as successful, self-led app development and deployment for clients and employer, independently and within a team.',
        'Skilled in creating custom, scalable web applications (front end and backend) that help to automate manual tasks, ease workflow and help with reporting. Experienced in data integrations using tools like Zapier, and also by building custom APIs using NodeJS, Express and Google Cloud Functions.',
        'Efficient Team Leader and Cooperative Team Player who imparts valuable knowledge to facilitate the delivery of exceptional products, adding value to the business.',
        'MA Digital Asset & Media Management Graduate from King’s College London.',
    ]

    const strengthsArray = [
        'Cooperative Team Player',
        'Supportive, Empathetic Team Leader',
        'Excellent Communication Skills',
        'Strong Verbal & Written English, Hindi, Tamil & Malayalam Skills (IELTS: 8/9)',
        'Continual Learner',
        'Problem Solver'
    ]

    const experienceArray = [
        {
            from: 'Sep 2020',
            to: 'Oct 2021',
            company: 'Smart Tips Feasibility Studies and Consultancy',
            logo: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695053840/Resume2023/SmartTipsLogo.png',
            designation: 'Web & App Developer | IT Lead',
            writeUp: 'Reporting to the CEO, responsible for comprehending business requirements from clients, brainstorming and building applications that help to increase revenue and ease the workflow. Also responsible for maintaining and updating the company\'s official website.'
        },
        {
            from: 'Oct 2021',
            to: 'Jul 2022',
            company: 'Freelance & Personal Projects',
            logo: '',
            designation: 'Web Solutions Developer',
            writeUp: 'Worked on multiple freelance projects including Ecommerce and IoT related and delivered them on time. Also enhanced my technical skillset during this period.'
        },
        {
            from: 'Jul 2022',
            to: 'Jan 2023',
            company: 'DAMAC Properties LLC',
            logo: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695052022/Resume2023/DAMAC_Logo.png',
            designation: 'Full Stack Developer',
            writeUp: 'Reporting to the Marketing Department, responsible for building automated systems that ensure lead capturing, validation and processing, regular inventory updates, API based unit listings on third party and affiliate websites such as Bayut, Trovit, Rightmove etc. APIs were built from scratch, majorly using Express upon Node JS.'
        },
        {
            from: 'Jan 2023',
            to: 'Present',
            company: 'DAMAC Properties LLC',
            logo: '',
            designation: 'Engineer Web Applications',
            writeUp: 'Reporting to the IT department, playing a major role as a core developer in migrating from static to a dynamic website with real time property data, and also enabling an eCommerce journey for the end user by integrating multiple systems on the backend including Salesforce, Commerce Tools and custom applications built in house.'
        },
    ]

    const achievementsArray = [
        {
            title: 'Integrations',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695135056/Resume2023/integrationSymbol_bp2gtv.png',
            description: 'Successfully designed, built and maintained local and cloud applications for automated collecting, processing, validating and securely storing leads from various digital marketing channels and campaigns as new channels get acquired, by utilizing APIs offered by the services if available, or by building custom APIs.'
        },
        {
            title: 'Website Revamp',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695126865/Resume2023/websiteRevampSymbol.png',
            description: 'Made multiple code level changes to the DAMAC Properties website to fulfill requirements from multiple sub teams within marketing including: (1) Revamping the appearance (2) Implementing new features (3) Eliminating manual inventory refreshments (4) Enhancing customer engagement. Changes are requested on a regular basis.'
        },
        {
            title: 'Chatbot',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695127066/Resume2023/chatbotSymbol.png',
            description: 'Involved in data integration to collect potential client data from automated chatbot interactions and push it to our in-house lead details validator via its API, followed by pushing the lead to our CRM system, subject to its validity. This was enabled by utilizing Zapier, custom built APIs and Google Cloud Functions.'
        },
        {
            title: 'Mobile App Development',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695135829/Resume2023/appSymbol_io2bmg.png',
            description: 'Successfully led the development of a client specific mobile app from scratch for the efficient delivery of assessment results of over 1500 candidates of a major apex level government client. The app was a major success and contributed to easing the workflow amid the pandemic, and renewal of contracts worth AED 11m.'
        },
        {
            title: 'Portal Development',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695135899/Resume2023/portalSymbol_n9kxej.png',
            description: 'Led my highly competent team consisting of a UI Designer, a Data Analyst, report generation assistants and a Developer (myself) to build a portal for a govt. client in the UAE. The portal features user privileges (admin side & client side), auto-deletion of downloaded reports, user activity log and more.'
        },
        {
            title: 'IoT (Internet of Things)',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695136035/Resume2023/iotSymbol_h2gthi.png',
            description: 'Involved in the creation of an IoT based vehicle tracker/fleet management platform from scratch. Responsibilities include generating a React based front end, APIs on a Node.js backend, integrating multiple external services (Open Cage API and OpenWeatherMap to name a few), automated SMS and email notifications and more.'
        }
    ]

    const skillsArray = [
        {
            title: 'React JS',
            subText: 'Frontend Development',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695022314/Resume2023/reactIcon.png',
            proficiency: 75
        },
        {
            title: 'Node JS',
            subText: 'Backend Development',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695132589/Resume2023/nodeJSLogo_ismdo2.png',
            proficiency: 70
        },
        {
            title: 'Express with Node',
            subText: 'API Development',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695045434/Resume2023/expressLogo_vh8zbe.png',
            proficiency: 78
        },
        {
            title: 'Gatsby',
            subText: 'Static Site Generation',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695139729/Resume2023/gatsbyLogo_ubcwda.png',
            proficiency: 65
        },
        {
            title: 'PHP',
            subText: 'Web Development',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695140247/Resume2023/phpLogo_kdzqxp.png',
            proficiency: 80
        },
        {
            title: 'Mongo DB',
            subText: 'Non Relational Database',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695131863/Resume2023/mongoDbLogo.png',
            proficiency: 60
        },
        {
            title: 'Google Firebase',
            subText: 'Non Relational Database',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695131988/Resume2023/firebaseLogo_lqov3f.svg',
            proficiency: 75
        },
        {
            title: 'Websockets',
            subText: 'Real time stateful data transfer',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695469792/websocketsLogo_luecmm.png',
            proficiency: 75
        },
        {
            title: 'Progressive Web Apps',
            subText: 'PWAs',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695469069/pwaLogo_fpm03t.webp',
            proficiency: 75
        },
        {
            title: 'SQL',
            subText: 'Relational Database',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695132265/Resume2023/SQLLogo_aypb5f.png',
            proficiency: 50
        },
        {
            title: 'Google Big Query',
            subText: 'Data Warehouse',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695132328/Resume2023/GoogleBigQueryLogo_tze1hz.png',
            proficiency: 30
        },
        {
            title: 'Google Cloud Functions',
            subText: 'Cloud Functions',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695132399/Resume2023/googleCloudFunctionsLogo_yy6miz.png',
            proficiency: 55
        },
        {
            title: 'SendGrid',
            subText: 'Automated Mailers',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695147374/Resume2023/sendGridLogo_mpjflz.png',
            proficiency: 90
        },
        {
            title: 'Twilio',
            subText: 'Automated SMS and IVR',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695147447/Resume2023/twilioLogo_mhgxzs.png',
            proficiency: 90
        },
        {
            title: 'AWS',
            subText: 'CI/CD Pipeline',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695140418/Resume2023/awsLogo_nbe86w.png',
            proficiency: 45
        },
        {
            title: 'Heroku',
            subText: 'CI/CD Pipeline',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695147664/Resume2023/herokuLogo_tsppsj.png',
            proficiency: 70
        },
        {
            title: 'Git',
            subText: 'Version Control',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695132442/Resume2023/gitLogo_mazfzp.png',
            proficiency: 75
        },
        {
            title: 'Azure DevOps',
            subText: 'Task Tracking',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695147781/Resume2023/azureDevOpsLogo_oissmz.webp',
            proficiency: 60
        },
        {
            title: 'Internet of Things',
            subText: 'Tracking, Sensors, SBCs etc.',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695468665/iotLogo_iwtfzr.png',
            proficiency: 45
        },
        {
            title: 'Python',
            subText: 'Learning in progress',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695470239/pythonLogo_m6adm3.png',
            proficiency: 20
        }
    ]

    const educationArray = [
        {
            title: 'King\'s College London',
            subText: 'MA Digital Asset and Media Management',
            writeUp: '2019 | Passed with Merit',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695235244/KCLLogo_eomldc.svg'
        },
        {
            title: 'PSG College of Arts and Science',
            subText: 'B.Sc. Visual Communication',
            writeUp: '2017',
            icon: 'https://res.cloudinary.com/dq6dbt6lg/image/upload/v1695235640/PSGCASLogo_mtx3mo.png'
        }
    ]

    return (
        <div className={Styles.cardsContainer}>
            <div className="container">
                <div className={Styles.cardsHolder}>

                    <WriteUpCard
                        title={'Message Me'}
                        googleIcon={'forum'}
                        width={'100%'}
                        type={'message'}
                    />

                    <WriteUpCard
                        title={'Profile'}
                        googleIcon={'person'}
                        content={profileArray}
                        width={'640px'}
                        type={'profile'}
                    />

                    <WriteUpCard
                        title={'Strengths'}
                        googleIcon={'hotel_class'}
                        content={strengthsArray}
                        width={'300px'}
                        type={'strengths'}
                    />

                    <WriteUpCard
                        title={'Experience'}
                        googleIcon={'business_center'}
                        content={experienceArray.reverse()}
                        width={'100%'}
                        type={'experience'}
                    />

                    <WriteUpCard
                        title={'Achievements'}
                        googleIcon={'trophy'}
                        content={achievementsArray}
                        width={'100%'}
                        type={'achievement'}
                    />

                    <div className={GlobalStyles.pageBreak}></div>

                    <WriteUpCard
                        title={'Technical Skills'}
                        googleIcon={'psychology'}
                        content={skillsArray}
                        width={'100%'}
                        type={'skill'}
                    />

                    <WriteUpCard
                        title={'Education'}
                        googleIcon={'school'}
                        content={educationArray}
                        width={'100%'}
                        type={'education'}
                    />

                    <WriteUpCard
                        title={'Message Me'}
                        googleIcon={'forum'}
                        width={'100%'}
                        type={'message'}
                    />
                </div>
            </div>
        </div>
    )
}

export default CardsContainer
