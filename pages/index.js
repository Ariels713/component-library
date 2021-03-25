import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EM Component Library</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </div>
  );
}
