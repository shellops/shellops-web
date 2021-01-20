import { NextPage } from "next";
import Head from "next/head";

import Logo from "../components/layout/logo";
import styles from "./index.module.scss";

const Home: NextPage<any> = (payload) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ShellOps</title>
        <link rel="icon" href="/favicon.ico" />
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Head>

      <section className={styles.intro}>
        <div className={styles.logo}>
          <Logo></Logo>
        </div>
        <p className={styles.desc}>
          Aims to provide a panel to assist developers in managing their private
          servers.
          <br />
          Tools to create backups, setup docker apps, and more ...
        </p>

        <div className={styles.code}>
          <p className={styles.comment}>
            # Make sure to have npm and nodejs installed on your local machine
          </p>
          <p className={styles.comment}>
            # Install ShellOps as a npm global package
          </p>

          <p className={styles.command}>npm i -g shellops</p>

          <p className={styles.comment}># Run shellops panel</p>

          <p className={styles.command}>shellops</p>
        </div>
      </section>

      <div className={styles.buttons}>
        <a
          className="github-button"
          href="https://github.com/shellops"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-size="large"
          aria-label="Follow @shellops on GitHub"
        >
          Follow @shellops
        </a>

        <p>
          // We've just started developing ShellOps. Watch repositories to get notified
          about development progress.
        </p>
      </div>

      <div className={styles.screenshot}>
        <img src="screenshot.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Home;
