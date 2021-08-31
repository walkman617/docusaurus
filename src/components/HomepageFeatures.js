import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '课程介绍',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        软件工程是与长期、大规模的编程项目有关的理论和方法。
        课程通过介绍软件工程的相关知识，让学生有机会设计、管理和实施一个中型软件项目。
      </>
    ),
  },
  {
    title: '团队项目',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        自发建立团队，设计与实现一个中型项目。
        推荐构建3～5人小组团队，为了有机会面对与解决项目管理问题。 
      </>
    ),
  },
  {
    title: '成绩考核',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        个人成绩中的大约 50% 将基于团队项目文件和演示。
        个人成绩的其余部分将取决于平时考勤、作业和对团队项目的贡献。
        注意：每次作业或者项目报告的提交日期非常重要！！延迟提交会有比较严格的扣分.
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
