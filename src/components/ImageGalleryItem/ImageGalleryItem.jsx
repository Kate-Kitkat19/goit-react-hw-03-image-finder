import { Image, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  img: { webformatURL, tags, largeImageURL, id },
}) => {
  return (
    <GalleryItem>
      <Image src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};
