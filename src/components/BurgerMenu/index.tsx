import React from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from './index.module.css'

const BurgerMenu = () => {
    const router = useRouter()
    return (
        <div className={ styles.container }>
            <div className={ styles['burger__icon']}>

            </div>
            <div className={ styles['header__avatar'] }
                 onClick={ () => router.push('/') }
            >
                <Image src={ require('../../image/ava.jpg') } alt={ '' } width={ 100 } height={ 100 }/>
                <div className={ styles['header__avatar__title'] }>
                    <p className={ styles['header__avatar__title--first-symbol'] }>VV</p>
                    <p className={ styles['header__avatar__title--name'] }>eb development</p>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;