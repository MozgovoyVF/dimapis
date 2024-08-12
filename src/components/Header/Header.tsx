import { FaTelegram, FaUserClock, FaWhatsapp } from "react-icons/fa";
import styles from "./index.module.scss";
import { BiPhone } from "react-icons/bi";
import { MENU_CONTENT, PHONE_NUMBER } from "@/constants/index.constants";
import { useState } from "react";
import { createPortal } from "react-dom";
import MenuModal from "../MenuModal/MenuModal";
import { Squash as Hamburger } from "hamburger-react";

const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div className={styles.header}>
      {isShowModal &&
        createPortal(
          <MenuModal closeFn={() => setIsShowModal(false)} />,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          /** @ts-ignore */
          document.getElementById("modal")
        )}
      <div className={styles.top}>
        <Hamburger toggled={isShowModal} size={20} toggle={setIsShowModal} />
        <div className={styles.social}>
          <a target="_blank" href={`https://wa.me/${PHONE_NUMBER}`}>
            <FaWhatsapp className={styles.whatsapp} />
          </a>
          <a target="_blank" href={`https://t.me/${PHONE_NUMBER}`}>
            <FaTelegram className={styles.telegram} />
          </a>
          <a href={`tel:${PHONE_NUMBER}`}>
            <BiPhone className={styles.phone} />
          </a>
        </div>
        <a href="mailto:dima_peschalnikov@gmail.com" className={styles.email}>
          dima_peschalnikov@gmail.com
        </a>
      </div>
      <div className={styles.center}>
        <div className={styles.logo}>
          <a href="/">
            <img className={styles.image} src="/logo.jpg" alt="logo" />
          </a>
          <div className={styles.title}>
            <span className={styles.name}>Дмитрий Песчальников</span>
            <span className={styles.position}>Персональный тренер</span>
          </div>
        </div>
        <div className={styles.callback}>
          <button>Заказать звонок</button>
          <div className={styles.clock}>
            <FaUserClock />
            <span className={styles.time}>8:00 - 22:00</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <ul className={styles.list}>
          {MENU_CONTENT.map((item) => (
            <li key={item.link} className={styles.item}>
              <a href={item.link} className={styles.link}>
                {<item.icon />}
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
