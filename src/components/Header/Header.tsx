import styles from "./index.module.scss";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import MenuModal from "../MenuModal/MenuModal";
import Top from "./Top/Top";
import Center from "./Center/Center";
import Bottom from "./Bottom/Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const el = useRef(null);

  const appear = () => {
    setIsShowModal(true);

    // if (isShowModal) {
    //   gsap.fromTo(el.current, { opacity: 0 }, { duration: 0.5, opacity: 1 });
    // }
  };

  const fade = () => {
    gsap.to(el.current, {
      opacity: 0,
      onComplete: () => setIsShowModal(false),
    });
  };

  return (
    <div className={styles.header}>
      {isShowModal
        ? createPortal(
            <MenuModal ref={el} closeFn={() => fade()} />,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            /** @ts-ignore */
            document.getElementById("modal")
          )
        : null}
      <Top isShowModal={isShowModal} appear={appear} fade={fade} />
      <Center />
      <Bottom />
    </div>
  );
};

export default Header;
