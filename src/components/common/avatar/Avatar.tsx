import { S } from './Avatar.styles';

interface AvatarProps {
  src?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <S.Container>{src ? <S.Img src={src} alt="userImg"></S.Img> : <span className="icon-user"></span>}</S.Container>
  );
};

export { Avatar };
