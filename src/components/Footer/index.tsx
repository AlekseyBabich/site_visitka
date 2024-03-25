import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CustomButton from "../UI/CustomButton";
import AvatarLogo from "../UI/AvatarLogo";

import { TelegramSvg } from "../SvgComponents/TelegramSvg";
import { VkSvg } from "../SvgComponents/VkSvg";
import { WhatsappSvg } from "../SvgComponents/WhatsappSvg";

import { I_isActiveBM } from "../../types/ui";
import styles from "./index.module.css";

export const Footer = ({ isActiveBM }: I_isActiveBM) => {
  const router = useRouter();

  return (
    <div
      className={!isActiveBM ? styles.container : styles["container_active"]}
    >
      <div className={styles["main__container"]}>
        <div className={styles.footer}>
          <div className={styles["footer__wrapper"]}>
            <AvatarLogo />

            <div className={styles["footer__contacts--phone"]}>
              <p>+7 (913) - 961 - 77 - 41</p>
            </div>
          </div>

          <div className={styles["footer__wrapper"]}>
            <div className={styles["footer__social"]}>
              <div className={styles["footer__social--vk"]}>
                <Link href={"https://vk.com/"}>
                  <VkSvg />
                </Link>
              </div>
              <div className={styles["footer__social--telegram"]}>
                <Link href={""}>
                  <TelegramSvg />
                </Link>
              </div>
              <div className={styles["footer__social--whatsapp"]}>
                <Link href={""}>
                  <WhatsappSvg />
                </Link>
              </div>
            </div>

            <div className={styles["footer__contacts__button"]}>
              <CustomButton
                name={"Hire me"}
                width={160}
                height={70}
                path={"/contacts"}
              />
            </div>
          </div>
          <div className={styles["footer__text"]}>
            <p>All rights reserved | 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};
