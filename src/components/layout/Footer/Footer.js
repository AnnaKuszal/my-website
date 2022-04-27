import React from 'react';

import styles from './Footer.module.scss';

import IconsWrapper from '../../features/IconsWrapper/IconsWrapper';


const Footer = (props) => {
  const { copy, rights } = props;

  return (
    <div className={styles.root}>
      <div className={styles.copyright}>
        <div>{copy}</div>&nbsp;<div></div>
        <div>{rights}</div>
      </div>

      <div className={styles.socialIcons}>
        <IconsWrapper variant='horizontal' />
      </div>

      <div className={styles.empty}>
      </div>
    </div>
  );
};


export default Footer;
