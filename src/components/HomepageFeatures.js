import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";


const FeatureList = [
  {
    title: "Easy to Use",
    svg: '/img/fast.svg',
    description: (
      <>
        React Native Date Time Picker was designed to be usable right out of the
        box
      </>
    ),
  },
  {
    title: "Native Component",
    svg: "/img/phone.svg",
    description: (
      <>
        React Native Date Time Picker uses native components in the backend to
        give your app an up-to-date and clean look
      </>
    ),
  },
  {
    title: "Support",
    svg: "/img/opensource.svg",

    description: (
      <>
        Please help support this library by contributing to the library or
        donating money. Small contributions help keep the library bug free and
        operate smoothly.
      </>
    ),
  },
];

function Feature({ svg, title, description }) {
  const src = useBaseUrl(svg);
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={src} className={styles.featureSvg} />
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
