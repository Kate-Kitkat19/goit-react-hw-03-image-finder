import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryStyled } from './ImageGallery.styled';
export const ImageGallery = ({ images }) => {
  return (
    <GalleryStyled>
      {images.map(image => {
        return (
          <li key={image.id} className="gallery-item">
            <ImageGalleryItem img={image}></ImageGalleryItem>
          </li>
        );
      })}
    </GalleryStyled>
  );
};
