import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, modalHandle, largeImageURL }) => {
  const handleModal = () => {
    modalHandle(largeImageURL);
  };
  return (
    <li className={styles.ImageGalleryItem} onClick={handleModal}>
      <img src={url} alt="" className={styles['ImageGalleryItem-image']} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  modalHandle: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
