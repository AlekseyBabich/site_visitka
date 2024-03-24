import React from 'react';
import Link from "next/link";
import CustomButton from "../../UI/CustomButton";
import CustomInput from "../../UI/CustomInput";

import { TelegramSvg } from "../../SvgComponents/TelegramSvg";
import { VkSvg } from "../../SvgComponents/VkSvg";
import { WhatsappSvg } from "../../SvgComponents/WhatsappSvg";

import styles from './index.module.css'


export const ContactsPage = ( { id }: any ) => {
    return (
        <div id={ id } className={ styles.container }>
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
                                <Link href={ '/' }>
                                    <TelegramSvg/>
                                </Link>
                            </div>
                            <div className={ styles[ 'body__info__social--vk' ] }>
                                <Link href={ '/' }>
                                    <VkSvg/>
                                </Link>
                            </div>
                            <div className={ styles[ 'body__info__social--whatsapp' ] }>
                                <Link href={ '/' }>
                                    <WhatsappSvg/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={ styles[ 'body__feedback' ] }>
                        <div className={ styles[ 'body__feedback__input' ] }>
                            <div className={ styles[ 'body__feedback__input--email' ] }>
                                <CustomInput type="text" placeholder={ 'Напишите Ваш email' } width={500} height={36}/>
                            </div>
                            <div className={ styles[ 'body__feedback__input--name' ] }>
                                <CustomInput type="text" placeholder={ 'Напишите Ваше имя' } width={500} height={36}/>
                            </div>
                        </div>
                        <div className={ styles[ 'body__feedback__button' ] }>
                            <CustomButton name={ 'Contact with me' }
                                          width={ 300 }
                                          height={ 70 }
                                          path={ null }
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
