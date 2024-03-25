import React from "react";

import { WebDesignSvg } from "../../../components/SvgComponents/WebDesignSvg";
import { BackendSvg } from "../../../components/SvgComponents/BackendSvg";
import { FrontendSvg } from "../../../components/SvgComponents/FrontendSvg";
import { SeoSvg } from "../../../components/SvgComponents/SeoSvg";

import styles from "./index.module.css";

export const MySkillsPage = ({ id }: any) => {
  const mockCards = [
    {
      path: "webDesign",
      title: "Web design",
      desc: "UI/UX design according to current trends. Using Photoshop, Figma, Adobe Xd",
    },
    {
      path: "backend",
      title: "Backend",
      desc: "PHP programming and integration of site layout with and CMS. Database administration",
    },
    {
      path: "frontend",
      title: "Frontend",
      desc: "Provide frontend developer services for HTML, CSS, JS. Adaptability and cross-browser compatibility",
    },
    {
      path: "seo",
      title: "SEO",
      desc: "SEO services for internal and external search engine optimization of a website in search engines",
    },
  ];

  const iconSkills: any = (path: any) => {
    if (path === "webDesign") {
      return <WebDesignSvg />;
    } else if (path === "backend") {
      return <BackendSvg />;
    } else if (path === "frontend") {
      return <FrontendSvg />;
    } else if (path === "seo") {
      return <SeoSvg />;
    }
  };

  return (
    <div id={id} className={styles.container}>
      <div className={styles["main__container"]}>
        <div className={styles.content}>
          <h1>My Skills</h1>
          <div className={styles["content__cards-block"]}>
            {mockCards.map((card, index) => (
              <div key={index} className={styles["content__card-item"]}>
                <div className={styles["content__card--image"]}>
                  {iconSkills(card.path)}
                </div>
                <div className={styles["content__card__text"]}>
                  <h2 className={styles["content__card__text--title"]}>
                    {card.title}
                  </h2>
                  <p className={styles["content__card__text--desc"]}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
