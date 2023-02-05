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
            to="/manual/guides/Important-MUST-READ"
          >
            TrueNAS SCALE - 5min ⏱️
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
        <ProgressBar bgcolor="#38b856" completed="70" goal="500" />
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
      title={`TrueCharts`}
      description="Your source For TrueNAS SCALE Apps<head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
