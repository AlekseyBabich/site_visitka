import React from 'react';

import styles from './index.module.css'
import Button from "../../UI/Button";
import Link from "next/link";
import { TelegramSvg } from "../../SvgComponents/TelegramSvg";
import { VkSvg } from "../../SvgComponents/VkSvg";
import { WhatsappSvg } from "../../SvgComponents/WhatsappSvg";

export const ContactsPage = () => {
    return (
        <div className={ styles.container }>
            <div className={ styles[ 'main__container' ] }>

                <div className={ styles.title }>
                    <div className={ styles[ 'title__text' ] }>
                        My contacts
                    </div>
                </div>

                <div className={ styles.body }>
                    <div className={ styles[ 'body__info' ] }>
                        <div className={ styles[ 'body__info--phone' ] }>
                            <p>+7 913 961 77 41</p>
                        </div>
                        <div className={ styles[ 'body__info--email' ] }>
                            <p>babichalex1986@gmail.com</p>
                        </div>
                        <div className={ styles[ 'body__info__social' ] }>
                            <div className={ styles[ 'body__info__social--telegram' ] }>
                                <Link href={'/'}>
                                    <TelegramSvg/>
                                </Link>
                            </div>
                            <div className={ styles[ 'body__info__social--vk' ] }>
                                <Link href={'/'}>
                                    <VkSvg/>
                                </Link>
                            </div>
                            <div className={ styles[ 'body__info__social--whatsapp' ] }>
                                <Link href={'/'}>
                                    <WhatsappSvg/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={ styles[ 'body__feedback' ] }>
                        <div className={ styles['body__feedback__input'] }>
                            <div className={ styles['body__feedback__input--email'] }>
                                <input type="text" name="" id="" style={{ backgroundColor: "red", width: 400, height: 100} }/>
                            </div>
                            <div className={ styles['body__feedback__input--name'] }>

                            </div>
                        </div>
                        <div className={ styles['body__feedback__button']}>
                            <Button name={'Contact with me'} width={300} height={70}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
