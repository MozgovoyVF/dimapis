import styles from "./index.module.scss";
import Cards from "./Cards/Cards";
import Content from "./Content/Contents";

const Main = () => {
  return (
    <div className={styles.container}>
      <Content />

      <Cards />
    </div>
  );
};

export default Main;
