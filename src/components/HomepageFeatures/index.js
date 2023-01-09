import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fully Open-Source',
    Svg: require('@site/static/img/cardanobi_easy.svg').default,
    description: (
      <>
        CardanoBI is fully open-source, its backend and frontend code can be audited, tested and contributed to by anyone.
      </>
    ),
  },
  {
    title: 'Deliver Value Faster',
    Svg: require('@site/static/img/cardanobi_focus.svg').default,
    description: (
      <>
        CardanoBI commoditizes access to the data currently locked in the Cardano Blockchain, allowing you to focus on your value proposition.
      </>
    ),
  },
  {
    title: 'Powered by SPOs',
    Svg: require('@site/static/img/cardanobi_powered.svg').default,
    description: (
      <>
        CardanoBI was born out of the collaboration of two Cardano Stake Pool Operators who strongly believe in the power and awesomeness of SPOs.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
