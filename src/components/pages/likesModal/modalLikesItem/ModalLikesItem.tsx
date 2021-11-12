import { locations } from 'routing/locations';
import { Typography } from 'components/common/typography';
import { S } from './ModalLikesItem.styles';

interface ModalLikesItemProps {
  id: number;
  avatar: string;
  userName: string;
}

const ModalLikesItem: React.FC<ModalLikesItemProps> = ({ id, avatar, userName }) => {
  return (
    <S.PopupItem to={locations.user.replace(':userId', String(id))}>
      <S.Avatar src={avatar} />
      <S.UserName>
        <Typography type="heading3">{userName}</Typography>
      </S.UserName>
    </S.PopupItem>
  );
};

export { ModalLikesItem };
