import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';
import imageApi from './services/api-service';
import styles from './App.module.css'

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  toggleModal = url => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeUrl: url,
    }));
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    this.setState({ isLoading: true });
    imageApi
      .getImages(searchQuery, currentPage)
      .then(images => {
        const imagesAdd = images.map(
          ({ id, webformatURL, largeImageURL }) => ({
            id,
            webformatURL,
            largeImageURL,
          }),
        );
        this.setState(prevState => ({
          images: [...prevState.images, ...imagesAdd],
          currentPage: prevState.currentPage + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { showModal, isLoading, error, largeUrl, images } = this.state;
    const RenderLoadMoreButton =
      this.state.images.length > 0 && !this.state.isLoading;
    return (
      <>
        {showModal && <Modal largeUrl={largeUrl} onClose={this.toggleModal} />}
        <div className={styles.App}>
          <Searchbar onSubmit={this.onChangeQuery} />
          {error && <p>Whoops, something went wrong: {error.message}</p>}
          <ImageGallery images={images} modalHandle={this.toggleModal} />
        </div>
        {isLoading && <Loader />}
       {RenderLoadMoreButton && (
          <Button onBtnClick={this.fetchImages} />
        )}
      </>
    );
  }
}

export default App;