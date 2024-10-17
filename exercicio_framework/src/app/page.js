import styles from "./page.module.css";
import Calculator from './Calculator';

export default function Home() {
  return (
    <div className={styles.mainDiv}>
      <main className={styles.main}>
        <div className={styles.sideText}>
          <p><strong>Calculadora muito foda</strong></p>
        </div>
        <Calculator />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
