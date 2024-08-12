import styles from "./index.module.scss";
import { MENU_CONTENT } from "@/constants/index.constants";
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface IModal {
  closeFn: () => void;
}

const MenuModal = forwardRef<HTMLDivElement, IModal>(
  ({ closeFn }: IModal, outerRef: ForwardedRef<HTMLDivElement>) => {
    const innerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(outerRef, () => innerRef.current!, []);

    useEffect(() => {
      gsap.fromTo(
        innerRef.current,
        { opacity: 0 },
        { duration: 0.5, opacity: 1 }
      );
    }, [innerRef]);

    return (
      <div ref={innerRef} className={styles.modal}>
        <div className={styles.window}>
          <div className={styles.content}>
            <ul className={styles.list}>
              {MENU_CONTENT.map((item) => (
                <li key={item.title} onClick={() => closeFn()} className="item">
                  <a className={styles.link} href={item.link}>
                    {<item.icon />} {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
);

export default MenuModal;
