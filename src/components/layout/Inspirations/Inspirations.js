import React from 'react';
import { useEffect, useState } from 'react';

import styles from './Inspirations.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';


const Inspirations = (props) => {
  const { title } = props;

  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  let details;


  useEffect(() => {
    fetch('db/app.json')
      .then(response => response.json())
      .then(data => {
        return (
          setItems(data.inspirations),
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
      <h3 className={styles.title}>{title.toUpperCase()}</h3>

      <div className={styles.elementsContainer}>
        {
          items &&
          items.map(item => {
            details = item.details;

            return (
              <div key={item.id} className={styles.element}>
                <h4 className={styles.subtitle}>{item.label}</h4>
                <p>{item.description}</p>
                <ul className={styles.list}>
                  {
                    details && details.length > 0 &&
                    details.map((detail, index) => {
                      return (
                        <React.Fragment key={index}>
                          {
                            typeof detail === 'string' ?
                              <li className={styles.listItem}><FontAwesomeIcon icon={faBookOpen} className={styles.iconMark} />{detail}</li> :
                              <li><a href={detail.url} className={styles.link} target="_blank"  rel="noopener noreferrer">{detail.name}</a></li>
                          }
                        </React.Fragment>
                      );
                    })
                  }
                </ul>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};


export default Inspirations;
