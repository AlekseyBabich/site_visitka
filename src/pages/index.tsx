import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomePage } from "../components/pages/HomePage/index";
import {MySkillsPage} from "../components/pages/MySkillsPage";
import {AboutPage} from "../components/pages/AboutPage";
import {ContactsPage} from "../components/pages/ContactPage";

import styles from './Home.module.css'
import BurgerMenuButton from "../components/UI/BurgerMenuButton";
import BurgerMenu from "../components/UI/BurgerMenu";
import { useState } from "react";



export default function Home() {

    const [isActive, setIsActive] = useState(false)
    
    const handleActive = () => {
        setIsActive(!isActive)
    }

    const handleActiveTwo = () => {
        if(isActive) {
            handleActive()
        }
        return;
    }

    return (
        <div className={ styles.container }>
            <div className={ styles['main__container'] }>

                <div className={ styles.header }>
                    <Header isActive={isActive}/>
                </div>

                <div className={ styles['burger_button'] }>
                    <BurgerMenuButton isActiveToggle={handleActive} isActive={isActive}/>
                </div>
                <div className={ styles['burger_menu'] }>
                    <BurgerMenu isActive={isActive}/>
                </div>


                <div className={ styles.content }>
                    <div className={ isActive 
                                        ? styles['content__block--active'] 
                                        : styles['content__block'] 
                                    }
                                     onClick={() => handleActiveTwo()}
                    >
                        <HomePage id='home'/>
                        <MySkillsPage id='skills'/>
                        <AboutPage id='about'/>
                        <ContactsPage id='contacts'/>
                    </div>
                </div>

                <div className={ styles.footer }>
                    <Footer isActive={isActive}/>
                </div>

            </div>
        </div>
    )
}
