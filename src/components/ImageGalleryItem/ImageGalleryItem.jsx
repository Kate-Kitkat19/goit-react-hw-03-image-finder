export const ImageGalleryItem = ({
  img: { webformatURL, tags, largeImageURL },
}) => {
  return <img src={webformatURL} alt={tags} />;
};
