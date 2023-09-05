import React from 'react';

import styles from './index.module.css'

export const ContactsPage = () => {
    return (
        <div className={ styles.container }>
            <div className={ styles['main__container'] }>

                <div className={ styles.title }>
                    <div className={ styles['title__text']}>
                        My contacts
                    </div>
                </div>

            </div>
        </div>
    );
};
