import { FaUserClock } from "react-icons/fa";
import styles from "./index.module.scss";

const Center = () => {
  return (
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
  );
};

export default Center;
