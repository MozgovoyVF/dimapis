import styles from "./index.module.scss";
import { MENU_CONTENT } from "@/constants/index.constants";
import { Fade } from "react-reveal";

interface IModal {
  closeFn: () => void;
}

const MenuModal = ({ closeFn }: IModal) => {
  return (
    <div className={styles.modal}>
      <Fade>
        <div className={styles.window}>
          <div className={styles.content}>
            <ul className={styles.list}>
              {MENU_CONTENT.map((item) => (
                <li
                  key={item.title}
                  onClick={() => closeFn()}
                  className={styles.item}
                >
                  <a className={styles.link} href={item.link}>
                    {<item.icon />} {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default MenuModal;
