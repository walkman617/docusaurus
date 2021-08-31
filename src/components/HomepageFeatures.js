import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Course Overview',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Software engineering is concerned with long-term, large scale programming projects. 
        This course introduces the topic through lectures and by giving you a chance to help design, manage, and implement a medium-sized project.
      </>
    ),
  },
  {
    title: 'Group Project',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The class will be divided into groups of people. 
        Five-person groups were recommended partly because of the large size of the class and partly to force students to face issues of project management. 
      </>
    ),
  },
  {
    title: 'Grades',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        About 50% of your grade will be based on the group project documents and demonstration. 
        The rest of the grade will depend on individual tests, projects, and contributions to the group projects.
        It is very important that assignments be turned in promptly to allow us time to evaluate your work and make suggestions.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
