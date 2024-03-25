import React from "react";
import Image from "next/image";
import ScrollIntoView from "react-scroll-into-view";
import CustomButton from "../../UI/CustomButton/index";

import styles from "./index.module.css";

export const HomePage = ({ id }: any) => {
  return (
    <div id={id} className={styles.container}>
      <div className={styles["main__container"]}>
        <div className={styles.content}>
          <div className={styles["content__foto"]}>
            <Image
              src={require("../../../image/mainPhoto.png")}
              alt={""}
              width={510}
              height={800}
            />
            <div className={styles["content__graffiti"]}></div>
          </div>
          <div className={styles["content__body"]}>
            <div className={styles["content__body--title"]}>
              <p>WEB DEVELOPER</p>
            </div>
            <div className={styles["content__body--name"]}>
              <p>ALEKSEY BABICH</p>
            </div>
            <div className={styles["content__body--text"]}>
              <p>
                Website development taking into account the target <br />{" "}
                audience, usability principles and required tasts
              </p>
            </div>
            <div className={styles["content__body__button"]}>
              <ScrollIntoView selector="#contacts">
                <CustomButton
                  name={"Hire me"}
                  height={70}
                  width={160}
                  path={"/contacts"}
                />
              </ScrollIntoView>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
