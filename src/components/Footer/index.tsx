import React from 'react';
import styles from './index.module.css'
import {useRouter} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {TelegramSvg} from "../SvgComponents/TelegramSvg";
import {VkSvg} from "../SvgComponents/VkSvg";
import {WhatsappSvg} from "../SvgComponents/WhatsappSvg";
import Button from "../UI/CustomButton";
import CustomButton from "../UI/CustomButton";

export const Footer = () => {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <div className={styles['main__container']}>
                <div className={styles.footer}>

                    <div className={styles['footer__wrapper']}>
                        <div className={styles['footer__avatar']}
                             onClick={() => router.push('/')}
                        >
                            <Image src={require('../../image/ava.jpg')} alt={''} width={100} height={100}/>
                            <div className={styles['footer__avatar__title']}>
                                <p className={styles['footer__avatar__title--first-symbol']}>VV</p>
                                <p className={styles['footer__avatar__title--name']}>eb development</p>
                            </div>
                        </div>


                        <div className={styles['footer__contacts--phone']}>
                            <p>+7 (913) - 961 - 77 - 41</p>
                        </div>

                    </div>

                    <div className={styles['footer__wrapper']}>
                        <div className={styles['footer__social']}>
                            <div className={styles['footer__social--vk']}>
                                <Link href={'https://vk.com/'}>
                                    <VkSvg/>
                                </Link>
                            </div>
                            <div className={styles['footer__social--telegram']}>
                                <Link href={''}>
                                    <TelegramSvg/>
                                </Link>
                            </div>
                            <div className={styles['footer__social--whatsapp']}>
                                <Link href={''}>
                                    <WhatsappSvg/>
                                </Link>
                            </div>
                        </div>




                        <div className={styles['footer__contacts__button']}>
                            <CustomButton name={'Hire me'}
                                          width={160}
                                          height={70}
                                          path={'/contacts'}
                            />
                        </div>

                    </div>
                    <div className={styles['footer__text']}>
                        <p>All rights reserved | 2023</p>
                    </div>


                </div>
            </div>
        </div>
    );
};




