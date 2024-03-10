import React from 'react';
import Image from "next/image";
import styles from './index.module.css'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

export const AboutPage = ({id}: any) => {

    const progressCards = [
        {
            title: "3 YEARS",
            text: "of experience in the development of sites of any subject and complexity"
        },
        {
            title: "> 100 HAPPY",
            text: "and satisfied customers who become permanent and turn to me with new project"
        },
        {
            title: "~ 300 WORKS",
            text: "in my portfolio, which is constantly updated with new projects and reviews"
        },
    ]

    return (
        <div id={id} className={styles.container}>
            <div className={styles['main__container']}>
                <div className={styles.content}>
                    <div className={styles['content__about-me']}>
                        <div className={styles['content__about-me__desc']}>
                            <div className={styles['content__about-me__desc--title']}>
                                <h1>About Me</h1>
                            </div>
                            <div className={styles['content__about-me__desc--text']}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur assumenda
                                    autem beatae dicta incidunt itaque laboriosam reiciendis velit. Accusantium
                                    consectetur
                                    consequuntur dolorem doloremque eveniet harum incidunt nobis numquam quas
                                    voluptatibus?
                                </p>
                                <p style={{marginTop: '40px'}}> Alias architecto consequatur doloremque fugiat maxime
                                    non, omnis
                                    quidem rem repellendus voluptatem. Ad deleniti itaque necessitatibus officiis omnis,
                                    sunt voluptatem!
                                </p>
                            </div>
                            <div className={styles['content__about-me__desc--quote']}>
                                <h3>{'"Lorem ipsum dolor sit amet, consectetur adipisicing elit."'}</h3>
                            </div>
                        </div>
                        <div className={styles['content__about-me__gallery']}>
                            <div className={styles['content__about-me__gallery--image-block']}>
                                <Image src={require('../../../image/mainPhoto.png')} alt={''} width={410} height={600}/>
                            </div>
                            <div className={styles['content__about-me__gallery--graphic-block']}>
                            </div>
                        </div>
                        <div className={styles['content__about-me__button-navigation-block']}>
                            <button><WestIcon fontSize={"large"}/></button>
                            <p>1 2 3</p>
                            <button><EastIcon fontSize={"large"}/></button>
                        </div>
                    </div>
                    <div className={styles['content__my-progress']}>
                        <div className={styles['content__my-progress--title']}>
                            <h1>My Progress</h1>
                        </div>
                        <div className={styles['content__my-progress__elements-block']}>
                            {progressCards.map(card => (
                                <div key={card.title} className={styles['content__my-progress__elements-block__item']}>
                                    <div className={styles['content__my-progress__elements-block__item__title']}>
                                        <div className={styles['content__my-progress__elements-block__item__title--text']}>
                                            <h2>{card.title}</h2>
                                        </div>
                                        <div className={styles['content__my-progress__elements-block__item__title--svg']}>
                                            {
                                                card.title === '3 YEARS' ? <AccessTimeIcon fontSize={"large"}/> :
                                                card.title === '> 100 HAPPY' ? <SentimentSatisfiedAltIcon fontSize={"large"}/> :
                                                card.title === '~ 300 WORKS' ? <LocalFireDepartmentIcon fontSize={"large"}/> : ''
                                            }
                                        </div>
                                    </div>
                                    <div className={styles['content__my-progress__elements-block__item--text']}>
                                        <p>{card.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
