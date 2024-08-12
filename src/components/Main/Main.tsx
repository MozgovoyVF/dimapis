import { FaMedal } from "react-icons/fa";
import styles from "./index.module.scss";
import { PiNotepadBold } from "react-icons/pi";
import { GiBiceps } from "react-icons/gi";
import Fade from "react-reveal/Fade";

const Main = () => {
  return (
    <div className={styles.container}>
      <Fade top>
        <div className={styles.content}>
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
      </Fade>

      <Fade bottom>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="/result1.jpg" alt="" />
            <span className={styles.info}>
              Для тех, кто поставил перед собой конкретную спортивную цель
            </span>
          </div>
          <div className={styles.card}>
            <img src="/result2.jpg" alt="" />
            <span className={styles.info}>Для восстановления после травм</span>
          </div>
          <div className={styles.card}>
            <img src="/result3.jpeg" alt="" />
            <span className={styles.info}>
              Для поддержания хорошей спортивной формы
            </span>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Main;
