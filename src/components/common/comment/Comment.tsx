import { S } from './Comment.styles';
import { locations } from 'routing/locations';
import { Typography } from 'components/common/typography';

interface CommentProps {
  avatar: string;
  authorId: number;
  userName: string;
  comment: string;
}

const Comment: React.FC<CommentProps> = ({ avatar, userName, comment, authorId }) => {
  return (
    <S.Comment to={locations.user.replace(':userId', String(authorId))}>
      <S.CommentImg src={avatar} alt="user's photo" />
      <S.CommentText>
        <Typography type="label1">{userName}</Typography>
        <Typography type="caption2">{comment}</Typography>
      </S.CommentText>
    </S.Comment>
  );
};

export { Comment };
