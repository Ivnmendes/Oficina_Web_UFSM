import styles from "./page.module.css";
import Calculator from './Calculator';

export default function Home() {
  return (
    <div className={styles.mainDiv}>
      <main className={styles.main}>
        <Calculator />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
