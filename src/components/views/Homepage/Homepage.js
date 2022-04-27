import React from 'react';

import styles from './Homepage.module.scss';

import Skills from '../../layout/Skills/Skills';
import Experience from '../../layout/Experience/Experience';
import Courses from '../../layout/Courses/Courses';
import Inspirations from '../../layout/Inspirations/Inspirations';
import LatestFirstChoice from '../../layout/LatestFirstChoice/LatestFirstChoice';


const Homepage = () => (
  <div className={styles.root}>
    <Skills title='Skills'/>
    <Experience title='Experience'/>
    <Courses title='Courses'/>
    <Inspirations title='Inspirations'/>
    <LatestFirstChoice title='My latest first choice'/>
  </div>
);


export default Homepage;
