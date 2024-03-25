import { useState } from "react";

import { BurgerMenuButton } from "../components/UI/BurgerMenuButton";
import { BurgerMenu } from "../components/UI/BurgerMenu";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomePage } from "../components/pages/HomePage/index";
import { MySkillsPage } from "../components/pages/MySkillsPage";
import { AboutPage } from "../components/pages/AboutPage";
import { ContactsPage } from "../components/pages/ContactPage";

import styles from "./Home.module.css";

export default function Home() {
  const [isActiveBM, setIsActiveBM] = useState(false);

  const handleActiveBM = () => {
    setIsActiveBM(!isActiveBM);
  };

  const handleReversActiveBM = () => {
    if (isActiveBM) {
      handleActiveBM();
    }
    return;
  };

  return (
    <div className={styles.container}>
      <div className={styles["main__container"]}>
        <div className={styles.header}>
          <Header isActiveBM={isActiveBM} />
        </div>

        <div className={styles["burger_button"]}>
          <BurgerMenuButton
            isActiveToggleBM={handleActiveBM}
            isActiveBM={isActiveBM}
          />
        </div>
        <div className={styles["burger_menu"]}>
          <BurgerMenu isActiveBM={isActiveBM} />
        </div>

        <div className={styles.content}>
          <div
            className={
              isActiveBM
                ? styles["content__block--active"]
                : styles["content__block"]
            }
            onClick={() => handleReversActiveBM()}
          >
            <HomePage id="home" />
            <MySkillsPage id="skills" />
            <AboutPage id="about" />
            <ContactsPage id="contacts" />
          </div>
        </div>

        <div className={styles.footer}>
          <Footer isActiveBM={isActiveBM} />
        </div>
      </div>
    </div>
  );
}
