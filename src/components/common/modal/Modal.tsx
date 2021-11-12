import { S } from './Modal.styles';
import { Icon } from 'components/common/icon';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <S.Modal isOpen={open} onRequestClose={onClose}>
      <S.Content>
        <S.Button onClick={onClose}>
          <Icon type="x" />
        </S.Button>
        {children}
      </S.Content>
    </S.Modal>
  );
};

export { Modal };
