import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const HomepageCard = ({ href, Svg, SvgHover, title, link, description }) => {
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
      target={href ? "_blank" : "_self"}
      href={href ? href : ""}
      to={link ? link : ""}
    >
      <div className={styles.card}>
        <div>
          <Svg className={styles.img} role="img" />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default HomepageCard;
