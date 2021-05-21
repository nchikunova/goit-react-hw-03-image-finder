import styles from './Loader.module.css';
import React, { Component } from 'react';
import Spinner from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


class Loader extends Component {
  render() {
    return (
      <div className={styles.Spinner}>
        <Spinner type="ThreeDots" color="#00BFFF" height={80} width={80} timeout={3000}/>
      </div>
    );
  }
}
export default Loader;
