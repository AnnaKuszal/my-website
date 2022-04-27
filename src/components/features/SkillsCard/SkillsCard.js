import React from 'react';

import styles from './SkillsCard.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const SkillsCard = (props) => {
  const { id, technicals, skills } = props;

  return (
    <div className={styles.root}>
      <h4 className={styles.subtitle}>{id.toUpperCase()}:<br /></h4>
      <ul className={styles.list}>
        {
          technicals && technicals.length > 0 &&
          technicals.map((technical) => (
            <React.Fragment key={technical.id}>
              <p>{technical.level}:</p>
              {
                technical.technologies && technical.technologies.length > 0 &&
                technical.technologies.map((technology, index) =>
                  <li key={index} className={styles.listItem}><FontAwesomeIcon icon={faCheckCircle} className={styles.iconMark} />{technology}</li>
                )
              }
            </React.Fragment>
          ))
        }

        {
          skills && skills.length > 0 &&
          skills.map((skill, index) =>
            <li key={index} className={styles.listItem}><FontAwesomeIcon icon={faCheckCircle} className={styles.iconMark} />{skill}</li>
          )
        }
      </ul>
    </div>
  );
};

export default SkillsCard;
