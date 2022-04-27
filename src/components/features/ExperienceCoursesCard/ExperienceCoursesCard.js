import React from 'react';

import styles from './ExperienceCoursesCard.module.scss';


const ExperienceCoursesCard = (props) => {
  const { date, title, details, variant } = props;    //subtitle

  const bgVariant = variant === 'light' ? styles.lightBg : '';
  const titleVariant = variant === 'light' ? styles.lightTitle : '';


  return (
    <div className={styles.root + ' ' + bgVariant}>
      <p className={styles.elementTitle + ' ' + titleVariant}>
        {date}<br />
        {title}<br />
        {/* {subtitle} */}
      </p>
      <p>Details:</p>
      <ul className={styles.list}>
        {
          details && details.length > 0 &&
          details.map((detail, index) =>
            <li key={index}>{detail}</li>
          )
        }
      </ul>
    </div>
  );
};


export default ExperienceCoursesCard;
