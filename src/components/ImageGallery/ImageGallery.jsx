import { GalleryStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryStyled>
      {images.map(image => {
        return <ImageGalleryItem img={image} key={image.id}></ImageGalleryItem>;
      })}
    </GalleryStyled>
  );
};
