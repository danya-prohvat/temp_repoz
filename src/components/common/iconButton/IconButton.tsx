import { Icon } from 'components/icon';
import { S } from './IconButton.styles';

interface IconButton extends React.HTMLProps<HTMLButtonElement> {
  icon: string;
}

const IconButton: React.FC<IconButton> = ({ icon }) => {
  return (
    <S.Button>
      <Icon name={icon} />
    </S.Button>
  );
};

export { IconButton };
