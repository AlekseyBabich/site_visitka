import React from 'react';
import Link from "next/link";
import ScrollIntoView from 'react-scroll-into-view'
import AvatarLogo from '../UI/AvatarLogo';

import { TelegramSvg } from "../SvgComponents/TelegramSvg";
import { VkSvg } from "../SvgComponents/VkSvg";
import { WhatsappSvg } from "../SvgComponents/WhatsappSvg";
import { useRouter } from "next/navigation";

import { I_isActiveBM } from '../../types/ui';
import styles from './index.module.css'



export const Header = ( { isActiveBM }: I_isActiveBM ) => {
    const router = useRouter()


    return (
        <div className={ !isActiveBM 
            ? styles.container
            : styles[ 'container_active' ]
        }>
            <div className={ styles[ 'main__container' ] }>
                <div className={ styles.header }>

                    <AvatarLogo />


                    <div className={ styles[ 'header__links' ] }>
                        <div className={ styles[ 'header__links--item' ] }>
                            <ScrollIntoView selector='#skills' >
                                <a>Skills</a>
                            </ScrollIntoView>
                        </div>
                        <div className={ styles[ 'header__links--item' ] }>
                            <ScrollIntoView selector='#about' >
                                <a>About</a>
                            </ScrollIntoView>
                        </div>
                        {/* <div className={ styles[ 'header__links--item' ] }>
                            <Link href={ '/' }>Portfolio</Link>
                        </div> */}
                        <div className={ styles[ 'header__links--item' ] }>
                            <ScrollIntoView selector='#contacts' >
                                <a>Contacts</a>
                            </ScrollIntoView>
                        </div>
                    </div>

                    <div className={ styles[ 'header__contacts' ] }>
                        <div className={ styles[ 'header__contacts--phone' ] }>
                            <p>+7 (913) - 961 - 77 - 41</p>
                        </div>
                        <div className={ styles[ 'header__contacts__social' ] }>
                            <div className={ styles[ 'header__contacts__social--vk' ] }>
                                <Link href={ 'https://vk.com/' }>
                                    <VkSvg/>
                                </Link>
                            </div>
                            <div className={ styles[ 'header__contacts__social--telegram' ] }>
                                <Link href={ '' }>
                                    <TelegramSvg/>
                                </Link>
                            </div>
                            <div className={ styles[ 'header__contacts__social--whatsapp' ] }>
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
