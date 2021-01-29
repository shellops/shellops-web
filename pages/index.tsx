import { NextPage } from "next";
import { useEffect } from "react";
import { MetaTags } from "../components";
import styles from "./index.module.scss";

const Home: NextPage<any> = (payload) => {
  return (
    <>
      <MetaTags
        description="Aims to provide a panel to assist developers in managing their private servers. tools to create backups, setup docker apps, and more"
        pageUrl="/"
      />
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.sidebar}>
            <div className={styles.header}>
              <img src="/logotype.svg" alt="ShellOps logo" />
              <h1 className={styles.title}>ShellOps</h1>
            </div>
            <div className={styles.flow}>
              <img src="/shellOps-flow.svg" alt="ShellOps - flow ShellOps" />
            </div>
          </div>
          <div className={styles.content}>
            <p>
              ShellOps Will provide set of features to developers
              <br />
              to help them manage docker, database, backups
              <br />
              and alerting on their private servers
            </p>
            <footer className={styles.footer}>
              <a href="https://newtabstudio.com/" target="_blank">
                <img
                  src="/logo-newtabstudio.svg"
                  alt="ShellOps - logo github"
                />
              </a>
              <a href="https://github.com/shellops" target="_blank">
                <img src="/logo-github.svg" alt="ShellOps - logo github" />
              </a>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
