import React from 'react';
import styles from './index.module.css'
import Image from "next/image";
import CustomButton from "../../UI/CustomButton/index";

export const HomePage = () => {
    return (
        <div className={ styles.container }>
            <div className={ styles['main__container'] }>

                <div className={ styles.content }>

                    <div className={ styles['content__foto'] }>
                        <Image src={ require('../../../image/mainPhoto.png') } alt={ '' } width={ 510 } height={ 800 }/>
                        <div className={ styles['content__graffiti'] }></div>
                    </div>
                    <div className={ styles['content__body'] }>
                        <div className={ styles['content__body--title'] }>
                            <p>WEB DEVELOPER</p>
                        </div>
                        <div className={ styles['content__body--name'] }>
                            <p>ALEKSEY BABICH</p>
                        </div>
                        <div className={ styles['content__body--text'] }>
                            <p>Website development taking into account the target <br/> audience, usability principles
                                and required tasts</p>
                        </div>
                        <div className={ styles['content__body__button'] }>
                            <CustomButton name={'Hire me'} height={70} width={160}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
