import React from 'react';
import { I_ButtonProps } from '../../../types/ui/index'

import styles from './index.module.css'
import { useRouter } from "next/navigation";

const CustomButton = ( { name, width, height, path }: I_ButtonProps ) => {
    const router = useRouter()
    const pathButton = () => {
        return router.push(`${path}`)
    }
    return (
        <div className={ styles.container }>
            <button className={ styles.button }
                    style={ { width: width, height: height } }
                    onClick={ () => pathButton() }
            >{ name }</button>
        </div>
    );
};

export default CustomButton;