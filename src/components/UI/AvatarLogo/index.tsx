import React from "react";
import Image from "next/image";
import ScrollIntoView from "react-scroll-into-view";

import styles from "./index.module.css";

const AvatarLogo = () => {
  return (
    <div>
      <ScrollIntoView selector="#home">
        <div className={styles["header__avatar"]}>
          <Image
            src={require("../../../image/ava.jpg")}
            alt={""}
            width={100}
            height={100}
          />
          <div className={styles["header__avatar__title"]}>
            <p className={styles["header__avatar__title--first-symbol"]}>VV</p>
            <p className={styles["header__avatar__title--name"]}>
              eb development
            </p>
          </div>
        </div>
      </ScrollIntoView>
    </div>
  );
};

export default AvatarLogo;
