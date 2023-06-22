import React from 'react';
import styles from './index.module.css'
import Image from "next/image";
import Link from "next/link";
import {TelegramSvg} from "../ComponentsSvg/TelegramSvg";
import {VkSvg} from "../ComponentsSvg/VkSvg";
import {WhatsappSvg} from "../ComponentsSvg/WhatsappSvg";

export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles['main_container']}>
                <div className={styles.header}>
                    <div className={styles['header-avatar']}>
                        <Image src={require('../../image/ava.jpg')} alt={''} width={100} height={100}/>
                        <div className={styles['header-title']}>
                            <p className={styles['header-title_first-symbol']}>VV</p>
                            <p className={styles['header-title_name']}>eb development</p>
                        </div>
                    </div>
                    <div className={styles['header-links']}>
                        <div className={styles['header-links_item']}>
                            <Link href={'/'}>Skills</Link>
                        </div>
                        <div className={styles['header-links_item']}>
                            <Link href={'/'}>About</Link>
                        </div>
                        <div className={styles['header-links_item']}>
                            <Link href={'/'}>Portfolio</Link>
                        </div>
                        <div className={styles['header-links_item']}>
                            <Link href={'/'}>Contacts</Link>
                        </div>
                    </div>
                    <div className={styles['header-contacts']}>
                        <div className={styles['header-contacts_phone']}>
                            <p>+7 (999) - 999 - 99 - 99</p>
                        </div>
                        <div className={styles['header-contacts_social']}>
                            <div className={styles['header-contacts_social-vk']}>
                                <Link href={'https://vk.com/'}>
                                    <VkSvg/>
                                </Link>
                            </div>
                            <div className={styles['header-contacts_social-telegram']}>
                                <Link href={''}>
                                    <TelegramSvg/>
                                </Link>
                            </div>
                            <div className={styles['header-contacts_social-whatsapp']}>
                                <Link href={''}>
                                    <WhatsappSvg/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
