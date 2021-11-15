import { S } from './Avatar.styles';
import { AvatarImgProps } from './Avatar.styles';

interface AvatarProps extends AvatarImgProps {
  src?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, size }) => {
  return (
    <S.Container>
      {src ? <S.Img size={size} src={src} alt="user's photo"></S.Img> : <span className="icon-user"></span>}
    </S.Container>
  );
};

export { Avatar };
