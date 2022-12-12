import { getPictures } from '../../helpers/Pixabay';
import React, { Component } from 'react';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { Layout } from 'components/Layout/Layout.styled';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ isLoading: true });
      this.fetchPics()
        .then(data => {
          console.log(data);
          this.setState(prevState => {
            return { images: [...prevState.images, ...data] };
          });
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  fetchPics = async () => {
    const { query, page } = this.state;
    const data = await getPictures(query, page);
    if (data.length === 0) {
      this.onZeroResult();
    }
    return data;
  };

  onSubmit = query => {
    this.setState({ query });
    this.setState({ page: 1 });
    this.setState({ images: [] });
  };

  onLoadMore = async () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  onZeroResult = () => {
    toast.error('Sorry, no images found.');
  };

  render() {
    const { isLoading, images } = this.state;
    return (
      <>
        <Toaster></Toaster>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
        {isLoading && <Loader />}
        <Layout>
          {images.length > 0 && (
            <>
              <ImageGallery images={images}></ImageGallery>
              <Button onClick={this.onLoadMore} />
            </>
          )}
        </Layout>
      </>
    );
  }
}
