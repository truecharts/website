import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Deploy",
    Svg: require("@site/static/img/easy-to-use-icon.svg").default,
    description: (
      <>
        TrueCharts features a neatly organised catalog of Apps for TrueNAS SCALE.
      </>
    )
  },
  {
    title: "Consistent Ecosystem",
    Svg: require("@site/static/img/file-settings-icon.svg").default,
    description: (
      <>
        All TrueCharts Apps, are build upon the same solid foundation. All
        featuring the same deployment experience
      </>
    )
  },
  {
    title: "Stability",
    Svg: require("@site/static/img/shield-heart-icon.svg").default,
    description: (
      <>
        TrueCharts has stability as a prime importance: What is running, should
        stay running.
      </>
    )
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
