import React from 'react';

import styles from './index.module.css'
import { BurgerSvg } from '../../SvgComponents/BurgerSvg';


const BurgerMenu = () => {
    
    return (
        <div className={ styles.container }>
           <div className={ styles.svg}>
                <BurgerSvg/>
           </div>
        </div>
    );
};

export default BurgerMenu;