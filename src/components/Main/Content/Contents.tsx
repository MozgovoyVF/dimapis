import { FaMedal } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import { PiNotepadBold } from "react-icons/pi";
import styles from "./index.module.scss";
import { useRef } from "react";

const Content = () => {
  const ref = useRef(null);
  return (
    <div ref={ref} className={styles.content}>
      <div className={styles.text}>
        <h2 className={styles.title}>
          СОЗДАЙТЕ ТЕЛО СВОЕЙ МЕЧТЫ СВОИМИ РУКАМИ. ВЫ ЭТО СМОЖЕТЕ!
        </h2>
        <div className={styles.promise}>
          <span className={styles.result}>
            <GiBiceps />
            Видимый результат уже через 4 месяца тренировок
          </span>
          <div className={styles.about}>
            <p className={styles.me}>
              <FaMedal />
              <span>
                Сертифицированный тренер по физической подготовке
                (фитнес-тренер) с большим опытом
              </span>
            </p>
            <p className={styles.me}>
              <PiNotepadBold />
              <span>
                Специалист по здоровому спортивному питанию к Вашим услугам
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
