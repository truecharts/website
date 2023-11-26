import React, { useEffect, useRef, useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageCard from "@site/src/components/HomepageCard";
import clsx from "clsx";
import Lottie from "react-lottie";
import animationLogoData from "../animations/logo-animation-1.json";
import animationData from "../animations/animation-1.json";
import Users from "../components/Users";
import Love from "../components/Love";
import BackToTop from "../components/BackToTop";

const defaultLogoOptions = {
  loop: true,
  autoplay: true,
  animationData: animationLogoData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={ styles.heroBanner}>
      <img className={ styles.headerSmall} src="/img/header-smaller.jpg"/>
      <img className={ styles.headerLarge} src="/img/header-long.jpg"/>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`TrueCharts`}
      description="TrueCharts - Your source for Helm Charts"
    >
      <HomepageHeader />
      <main>
        <Love />
        <br />
        <br />
        <BackToTop />
      </main>
    </Layout>
  );
}
