import { Aside } from "./components/Aside";
import { Header } from "./components/Header";
import { MainProduct } from "./components/MainProduct";
import styles from "./styles/App.module.css";
import "./styles/global.css";

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.mainWrapper}>
        <main>
          <MainProduct />
        </main>
        <Aside />
      </div>
    </div>
  );
}
