import { Image, GalleryItem } from './ImageGalleryItem.styled';
import React, { Component } from 'react';
import { ModalWindow } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  onClick = () => {
    this.setState({ isModalOpen: true });
  };
  
  render() {
    const { webformatURL, tags, largeImageURL } = this.props.img;

    return (
      <>
        {this.state.isModalOpen && (
          <ModalWindow url={largeImageURL} tags={tags}></ModalWindow>
        )}
        <GalleryItem onClick={this.onClick}>
          <Image src={webformatURL} alt={tags} />
        </GalleryItem>
      </>
    );
  }
}
