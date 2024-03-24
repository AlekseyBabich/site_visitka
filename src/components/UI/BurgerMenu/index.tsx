import React from 'react';

import { I_isActiveBM } from '../../../types/ui';
import styles from './index.module.css'


const BurgerMenu = ( { isActiveBM }: I_isActiveBM ) => {
    
    return (
        <div className={ !isActiveBM ? styles.container : styles[ 'container_active' ] }>
            
        </div>
        
    );
};

export default BurgerMenu;