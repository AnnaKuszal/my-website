import React from 'react';

import styles from './MainLayout.module.scss';


const MainLayout = ({ children }) => (
  <div className={styles.root}>
    {children}
  </div>
);


export default MainLayout;
