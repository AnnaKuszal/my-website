import React from 'react';

import styles from './SocialIcon.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SocialIcon = (props) => {
  const { link, icon } = props;

  return (
    <a href={link} className={styles.root} target="_blank" rel="noopener noreferrer" >
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </a>
  );
};


export default SocialIcon;
