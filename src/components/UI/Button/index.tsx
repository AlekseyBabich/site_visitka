import React from 'react';
import styles from './index.module.css'

const Button = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button}
                    onClick={() => alert('hello')}
            >Hire me</button>
        </div>
    );
};

export default Button;