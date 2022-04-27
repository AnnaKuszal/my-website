import React from 'react';
import { useEffect, useState } from 'react';

import styles from './IconsWrapper.module.scss';

import SocialIcon from '../../common/SocialIcon/SocialIcon';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faLinkedin, faGithub, faEnvelopeSquare);


const IconsWrapper = ({ variant }) => {
  const wrapperVariant = variant === 'horizontal' ? styles.horizontal : styles.vertical;

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('db/app.json')
      .then(response => response.json())
      .then(data => {
        return (
          setItems(data.contact)
        );
      });
  }, []);


  return (
    <div className={styles.root + ' ' + wrapperVariant}>
      {
        items &&
        items.map(item => {
          return <SocialIcon key={item.id} {...item} />;
        })
      }
    </div>
  );
};


export default IconsWrapper;
