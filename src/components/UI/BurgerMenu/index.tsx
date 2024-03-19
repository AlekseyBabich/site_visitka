import React from 'react';

import styles from './index.module.css'
import { BurgerSvg } from '../../SvgComponents/BurgerSvg';
import { I_isActive } from '../../../types/ui';


const BurgerMenu = ({isActive}: I_isActive) => {
    
    return (
        <div className={ !isActive ? styles.container : styles['container_active'] }>
            
        </div>
        
    );
};

export default BurgerMenu;