import { locations } from 'routing/locations';
import { Typography } from 'components/common/typography';
import { S } from './PopupItem.styles';

interface PopupItemProps {
  id: number;
  avatar: string;
  userName: string;
}

const PopupItem: React.FC<PopupItemProps> = ({ id, avatar, userName }) => {
  return (
    <S.PopupItem to={locations.user.replace(':userId', String(id))}>
      <S.Avatar src={avatar} />
      <S.UserName>
        <Typography type="heading3">{userName}</Typography>
      </S.UserName>
    </S.PopupItem>
  );
};

export { PopupItem };
