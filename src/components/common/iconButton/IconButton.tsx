import { Icon } from 'components/icon';
import { S } from './IconButton.styles';

interface IconButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: string;
}

const IconButton: React.FC<IconButton> = ({ icon, ...props }) => {
  return (
    <S.Button {...props}>
      <Icon name={icon} />
    </S.Button>
  );
};

export { IconButton };
