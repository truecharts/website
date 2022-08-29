import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import ProgressBar from "@site/src/components/ProgressBar";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <br></br>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/docs/SCALE%20Apps/Quick-Start%20Guides/Important-MUST-READ"
          >
            TrueNAS SCALE - 5min ⏱️
          </Link>
          <Link
            style={{ marginLeft: 2 + "em" }}
            className="button button--secondary button--lg"
            to="/docs/docs/Helm%20Charts/Quick-Start%20Guides/Important-MUST-READ"
          >
            Helm Charts - 10min ⏱️
          </Link>
        </div>
        <h3>
          <br></br>
          <b>---</b>
          <br></br>
          <br></br>
          <br></br>
          Monthly Funding goal:
          <br></br>
        </h3>
        <ProgressBar bgcolor="#38b856" completed="60" />
        <br></br>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/sponsor">
            Sponsor TrueCharts
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="TrueCharts: Your source For Helm Charts and TrueNAS SCALE Apps <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
