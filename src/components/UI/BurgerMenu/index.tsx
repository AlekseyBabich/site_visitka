import React from 'react';

import styles from './index.module.css'
import { BurgerSvg } from '../../SvgComponents/BurgerSvg';
import { I_isActiveBM } from '../../../types/ui';


const BurgerMenu = ({isActiveBM}: I_isActiveBM) => {
    
    return (
        <div className={ !isActiveBM ? styles.container : styles['container_active'] }>
            
        </div>
        
    );
};

export default BurgerMenu;