import React from 'react';
import { I_ButtonProps } from '../../../types/ui/index'

import styles from './index.module.css'

const CustomButton = ( { name, width, height }: I_ButtonProps ) => {
    return (
        <div className={ styles.container }>
            <button className={ styles.button }
                    style={ { width: width, height: height } }
                    onClick={ () => alert( 'hello' ) }
            >{ name }</button>
        </div>
    );
};

export default CustomButton;