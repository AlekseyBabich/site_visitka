import React, { useState } from 'react';

import styles from './index.module.css'
import { BurgerSvg } from '../../SvgComponents/BurgerSvg';

import { I_isActive } from '../../../types/ui';


const BurgerMenuButton = ({isActive, isActiveToggle}: I_isActive) => {

    

    return (
        <div className={ isActive ? styles['container_active'] : styles.container }>
            <button className={ styles.button }
                    onClick={() => isActiveToggle()}
            >
                <div>
                    <BurgerSvg/>
                </div>
            </button>

        </div>
    );
};

export default BurgerMenuButton;