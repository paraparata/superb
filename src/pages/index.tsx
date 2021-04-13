import Head from "next/head";
import styles from "../components/layout/Home.module.scss";

import { Button, Grid } from "../components/ui";
import { Header, PostCard } from "../components/base";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main style={{ width: "100%" }}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <Grid style={{ width: "100%" }}>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => {
            return (
              <div key={item}>
                <PostCard />
              </div>
            );
          })}
        </Grid>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
