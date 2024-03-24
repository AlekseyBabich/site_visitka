import React, { useState } from 'react';

import { BurgerSvg } from '../../SvgComponents/BurgerSvg';

import { I_isActiveBM } from '../../../types/ui';
import styles from './index.module.css'


const BurgerMenuButton = ( { isActiveBM, isActiveToggleBM }: I_isActiveBM ) => {

    

    return (
        <div className={ isActiveBM ? styles[ 'container_active' ] : styles.container }>
            <button className={ styles.button }
                    onClick={ () => isActiveToggleBM() }
            >
                <div>
                    <BurgerSvg/>
                </div>
            </button>

        </div>
    );
};

export default BurgerMenuButton;