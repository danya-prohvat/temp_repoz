import { Icon } from 'components/icon';
import { S } from './IconButton.styles';

interface IconButton {
  icon: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButton> = ({ icon, onClick }) => {
  return (
    <S.Button onClick={onClick}>
      <Icon name={icon} />
    </S.Button>
  );
};

export { IconButton };
