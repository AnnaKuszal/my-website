import React from 'react';
import { useEffect, useState } from 'react';

import styles from './LatestFirstChoice.module.scss';


const LatestFirstChoice = (props) => {
  const { title } = props;

  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  let links;

  useEffect(() => {
    fetch('db/app.json')
      .then(response => response.json())
      .then(data => {
        return (
          setItems(data.latest),
          setLoaded(true)
        );
      });
  }, []);


  let visible = '';

  if (loaded) {
    visible = styles.visible;
  }


  const innerElement = (a, b) => (

    items &&
    items.filter((item, index) => index === a || index === b)
      .map((item, index) => {
        links = item.links;

        return (
          <div key={index} className={styles.element}>
            <h4 className={styles.subtitle}>{item.subtitle}</h4>
            <p>{item.description}</p>
            <a href={item.url} className={styles.link} target="_blank"  rel="noopener noreferrer">{item.name}</a>
            <ul className={styles.list}>
              {
                links && links.length > 0 &&
                links.map((link, index) => (
                  <li key={index}><a href={link.url} className={styles.link} target="_blank" rel="noopener noreferrer">{link.name}</a></li>
                ))
              }
            </ul>
          </div>
        );
      })
  );


  return (
    <div className={styles.root + ' ' + visible}>
      <div className={styles.leftContentTile}>
        <div className={styles.elementsContainer}>
          {innerElement(0, 1)}
        </div>
      </div>

      <div className={styles.titleTile}><h3 className={styles.title}>{title.toUpperCase()}</h3></div>

      <div className={styles.rightContentTile}>
        <div className={styles.elementsContainer}>
          {innerElement(2, 3)}
        </div>
      </div>
    </div>
  );
};


export default LatestFirstChoice;
