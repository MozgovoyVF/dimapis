import styles from "./index.module.scss";

const Cards = () => {
  return (
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
  );
};

export default Cards;
