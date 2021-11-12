import React from 'react';
import { S } from './Modal.styles';
import { Icon } from 'components/common/icon';

interface ModalProps {
  open: boolean;
  closePopupOnClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, closePopupOnClick, children }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(open);

  const closeModal = () => {
    closePopupOnClick();
    setModalIsOpen(false);
  };

  return (
    <S.Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <S.Content>
        <S.Button onClick={closeModal}>
          <Icon type="x" />
        </S.Button>
        {children}
      </S.Content>
    </S.Modal>
  );
};

export { Modal };
