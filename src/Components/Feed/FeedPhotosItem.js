import React from 'react';
import styles from './FeedPhotosItem.module.css';

const FeedPhotoItem = ({ photo }) => {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualizations}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotoItem;
