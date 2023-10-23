import styles from "./styles.module.css";
import { Achievments, Hero, Lecturer, Portfolios, Study } from "@/sections";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Achievments />
      <Study />
      <Lecturer />
      <Portfolios />
    </div>
  );
};

export default Home;
