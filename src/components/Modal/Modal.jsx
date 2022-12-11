import { Overlay, Modal } from './Modal.styled';

export const ModalWindow = ({ url, tags, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <Modal>
        <img src={url} alt={tags} />
      </Modal>
    </Overlay>
  );
};
