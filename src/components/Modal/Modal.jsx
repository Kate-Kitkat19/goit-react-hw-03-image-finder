import { Overlay, Modal } from './Modal.styled';

export const ModalWindow = ({ url, tags }) => {
  return (
    <Overlay>
      <Modal>
        <img src={url} alt={tags} />
      </Modal>
    </Overlay>
  );
};
