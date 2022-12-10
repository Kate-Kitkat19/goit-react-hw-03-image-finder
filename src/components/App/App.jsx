import { getPictures } from '../../helpers/Pixabay';
import React, { Component } from 'react';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { SearchbarStyled } from '../Searchbar/Searchbar.styled';

async function fetchPics(key) {
  const images = await getPictures(key);
  console.log(images);
  return images;
}

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
  };

  componentDidMount() {}
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.query !== this.state.query) {
  //     this.setState({ page: 1 });
  //   }
  // }

  onSubmit = async query => {
    console.log('App query', query);
    this.setState({ query });
    const data = await fetchPics(query);
    console.log('App   data', data);
    this.setState({ images: data });
  };

  render() {
    return (
      <>
        <SearchbarStyled onSubmit={this.onSubmit}></SearchbarStyled>
        <ImageGallery images={this.state.images}></ImageGallery>
      </>
    );
  }
}
