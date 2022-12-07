import { getPictures } from '../helpers/Pixabay';
import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

// async function fetchPics(key) {
//   const images = await getPictures(key);
//   console.log(images);
// }

export class App extends Component {
  state = {
    query: '',
    page: 1,
    isLoading: false,
  };
 

  componentDidMount() {}
  // componentDidUpdate(_, prevState) {
  //   if (prevState.query !== this.state.query) {
  //     this.setState({ page: 1 });
  //   }
  // }

  onSubmit = evt => {
    console.log(evt);
  };

  render() {
    return <Searchbar onSubmit={this.onSubmit}></Searchbar>;
  }
}
