import { PHONE_NUMBER } from "@/constants/index.constants";
import { Squash as Hamburger } from "hamburger-react";
import { BiPhone } from "react-icons/bi";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import styles from "./index.module.scss";

interface ITop {
  isShowModal: boolean;
  appear: () => void;
  fade: () => void;
}

const Top = ({ isShowModal, fade, appear }: ITop) => {
  return (
    <div className={styles.top}>
      <Hamburger
        toggled={isShowModal}
        size={20}
        toggle={!isShowModal ? appear : fade}
      />
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
  );
};

export default Top;
