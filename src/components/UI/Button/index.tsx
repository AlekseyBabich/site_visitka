import React from 'react';
import { I_Button } from '../../../types/button/index'

import styles from './index.module.css'

const Button = ( { name, width, height }: I_Button ) => {
    return (
        <div className={ styles.container }>
            <button className={ styles.button }
                    style={ { width: width, height: height } }
                    onClick={ () => alert( 'hello' ) }
            >{ name }</button>
        </div>
    );
};

export default Button;