import React from 'react';
import { useEffect, useState } from 'react';

import styles from './Hero.module.scss';

import IconsWrapper from '../../features/IconsWrapper/IconsWrapper';


const Hero = (props) => {
  const { title, subtitle } = props;

  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('db/app.json')
      .then(response => response.json())
      .then(data => {
        return (
          setItems(data.profile),
          setLoaded(true)
        );
      });
  }, []);


  const item = {...items[0]};
  const paragraphs = {...item.paragraphs};
  const listItems = item.listItems;

  let visible = '';

  if (loaded) {
    visible = styles.visible;
  }


  return (
    <div className={styles.root + ' ' + visible}>

      {/* --Grid container-- */}
      <div className={styles.first}>
        <div className={styles.heroInfo}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
        </div>

        <div className={styles.socialIcons}>
          <IconsWrapper variant='vertical' />
        </div>

        <div className={styles.photoContainer}>
          <div className={styles.photoWrapper}>
            <img className={styles.image + ' ' + visible} src={item.src} alt='ownerPhoto' />
          </div>
        </div>

        <div className={styles.heroDescr}>
          <p>{paragraphs.paragraph_1}</p>
          <p className={styles.p_Tooltip}>{paragraphs.paragraph_2}
            <span className={styles.infoSpan}>{paragraphs.programName}
              <span className={styles.tooltip}>{paragraphs.notice}</span>
            </span>
          </p>
          <p>{paragraphs.paragraph_3}</p>
        </div>


        <div className={styles.profile}>
          <div className={styles.contentTile}>
            <p>{paragraphs.paragraph_4}</p>
            <ul className={styles.contentList}>
              {
                listItems && listItems.length > 0 &&
                listItems.map((listItem, index) => (
                  <li key={index}>{listItem}</li>
                ))
              }
            </ul>

          </div>
        </div>

      </div>
    </div>
  );
};


export default Hero;
