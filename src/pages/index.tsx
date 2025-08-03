import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Insightlya Survey</title>
      </Head>

      <main className={styles.main}>
        <Image src="/logo.png" alt="Logo Insightlya" width={150} height={150} />

        <h1 className={styles.title}>Selamat Datang di Insightlya!</h1>
        <p className={styles.description}>
          Isi survei singkat & dapatkan pulsa atau e-money 🎁
        </p>

        <a
          href="https://forms.gle/e8G9WzhkD1DTaJ9t5"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Mulai Survei
        </a>
      </main>
    </div>
  );
}
