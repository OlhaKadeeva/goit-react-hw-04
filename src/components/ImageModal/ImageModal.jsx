import ReactModal from "react-modal";

const ImageModal = ({ isOpen, image, onClose }) => {
  if (!image) return null;

  return (
    <div>
      <ReactModal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
        <img src={image.urls.regular} alt={image.alt_description} />
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
        <p>{image.description || image.alt_description}</p>
        <button onClick={onClose}>Close</button>
      </ReactModal>
    </div>
  );
};

export default ImageModal;
