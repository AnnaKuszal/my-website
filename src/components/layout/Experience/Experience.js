import React from 'react';
import { useEffect, useState } from 'react';

import styles from './Experience.module.scss';

import ExperienceCoursesCard from '../../features/ExperienceCoursesCard/ExperienceCoursesCard';


const Experience = (props) => {
  const { title } = props;

  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('db/app.json')
      .then(response => response.json())
      .then(data => {
        return (
          setItems(data.experience),
          setLoaded(true)
        );
      });
  }, []);


  let visible = '';

  if (loaded) {
    visible = styles.visible;
  }


  return (
    <div className={styles.root + ' ' + visible}>
      <div className={styles.titleTile}>
        <h3 className={styles.title}>{title.toUpperCase()}</h3>
      </div>

      <div className={styles.contentTile}>
        <div className={styles.elementsContainer}>
          {
            items &&
          items.map(item => {
            return <ExperienceCoursesCard key={item.id} {...item} />;
          })
          }
        </div>
      </div>
    </div>
  );
};


export default Experience;
