import { getPictures } from '../../helpers/Pixabay';
import React, { Component } from 'react';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { Layout } from 'components/Layout/Layout.styled';

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
      this.fetchPics()
        .then(data =>
          this.setState(prevState => {
            return { images: [...prevState.images, ...data] };
          })
        )
        .catch(error => this.setState({ error }))
        .finally(this.setState({ isLoading: false }));
    }
  }

  fetchPics = async () => {
    const { query, page } = this.state;
    const data = await getPictures(query, page);
    return data;
  };

  onSubmit = query => {
    this.setState({ query });
    this.setState({ page: 1 });
    this.setState({ images: [] });
    this.setState({ isLoading: true });
  };

  onLoadMore = async () => {
    this.setState({ isLoading: true });
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { isLoading, images } = this.state;
    return (
      <>
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
