import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css'

const Button = ({ onBtnClick }) => {
  return (
    <button className={styles.Button} type="button" onClick={() => onBtnClick()}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};

export default Button;