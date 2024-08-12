import { MENU_CONTENT } from "@/constants/index.constants";
import styles from "./index.module.scss";

const Bottom = () => {
  return (
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
  );
};

export default Bottom;
