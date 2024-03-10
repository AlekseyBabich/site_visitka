import React from 'react';
import styles from './index.module.css'
import Image from "next/image";
import Link from "next/link";
import { TelegramSvg } from "../SvgComponents/TelegramSvg";
import { VkSvg } from "../SvgComponents/VkSvg";
import { WhatsappSvg } from "../SvgComponents/WhatsappSvg";
import { useRouter } from "next/navigation";

export const Header = () => {
    const router = useRouter()

    return (
        <div className={ styles.container }>
            <div className={ styles['main__container'] }>
                <div className={ styles.header }>

                    <div className={ styles['header__avatar'] }
                         onClick={ () => router.push('/') }
                    >
                        <Image src={ require('../../image/ava.jpg') } alt={ '' } width={ 100 } height={ 100 }/>
                        <div className={ styles['header__avatar__title'] }>
                            <p className={ styles['header__avatar__title--first-symbol'] }>VV</p>
                            <p className={ styles['header__avatar__title--name'] }>eb development</p>
                        </div>
                    </div>

                    <div className={ styles['header__links'] }>
                        <div className={ styles['header__links--item'] }>
                            <Link href='#skills'>Skills</Link>
                        </div>
                        <div className={ styles['header__links--item'] }>
                            <Link href={ '#about' }>About</Link>
                        </div>
                        {/* <div className={ styles['header__links--item'] }>
                            <Link href={ '/' }>Portfolio</Link>
                        </div> */}
                        <div className={ styles['header__links--item'] }>
                            <Link href={ '#contacts' }>Contacts</Link>
                        </div>
                    </div>

                    <div className={ styles['header__contacts'] }>
                        <div className={ styles['header__contacts--phone'] }>
                            <p>+7 (913) - 961 - 77 - 41</p>
                        </div>
                        <div className={ styles['header__contacts__social'] }>
                            <div className={ styles['header__contacts__social--vk'] }>
                                <Link href={ 'https://vk.com/' }>
                                    <VkSvg/>
                                </Link>
                            </div>
                            <div className={ styles['header__contacts__social--telegram'] }>
                                <Link href={ '' }>
                                    <TelegramSvg/>
                                </Link>
                            </div>
                            <div className={ styles['header__contacts__social--whatsapp'] }>
                                <Link href={ '' }>
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
