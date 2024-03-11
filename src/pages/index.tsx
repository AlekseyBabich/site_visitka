import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomePage } from "../components/pages/HomePage/index";
import {MySkillsPage} from "../components/pages/MySkillsPage";
import {AboutPage} from "../components/pages/AboutPage";
import {ContactsPage} from "../components/pages/ContactPage";

import styles from './Home.module.css'
import BurgerMenu from "../components/UI/BurgerMenu";
import { useEffect } from "react";


export default function Home() {
    return (
        <div className={ styles.container }>
            <div className={ styles['main__container'] }>

                <div className={ styles.header }>
                    <Header/>
                </div>

                


                <div className={ styles.content }>
                    <div className={ styles['content__block'] }>

                        <div className={ styles.burger }>
                            <BurgerMenu/>
                        </div>

                        <HomePage id='home'/>
                        <MySkillsPage id='skills'/>
                        <AboutPage id='about'/>
                        <ContactsPage id='contacts'/>
                    </div>
                </div>

                <div className={ styles.footer }>
                    <Footer/>
                </div>

            </div>
        </div>
    )
}
