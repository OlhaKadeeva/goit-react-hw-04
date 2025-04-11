import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(53, 52, 52, 0.75)",
  },
};

const ImageModal = ({ isOpen, image, onClose }) => {
  if (!image) return null;

  return (
    <ReactModal
      className={css.ReactModal__Overlay}
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <button onClick={onClose}>✖️</button>
    </ReactModal>
  );
};

export default ImageModal;
