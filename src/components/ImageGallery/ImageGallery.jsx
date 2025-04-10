import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onSelect }) => {
  return (
    <ul>
      {images.map((img) => (
        <li key={img.id}>
          <ImageCard image={img} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
