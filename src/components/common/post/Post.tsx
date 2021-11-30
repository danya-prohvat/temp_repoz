import { useParams } from 'react-router-dom';
import { locations } from 'routing/locations';
import { useSelector } from 'hooks/useTypedSelector';
import { getUserInfo } from 'store/UserSlice';
import { Icon } from 'components/common/icon';
import { Typography } from 'components/common/typography';
import { S } from './Post.styles';

interface PostProps {
  src: string;
  id: number;
  likes: number;
  comments: number;
}

const Post: React.FC<PostProps> = ({ src, id, likes, comments }) => {
  const { userId } = useParams();

  const urlUserId = String(useSelector(getUserInfo).id);

  return (
    <S.Post to={locations.post.replace(':userId', String(userId || urlUserId)).replace(':postId', String(id))}>
      <S.PostImg src={src} alt="post img" />
      <S.PostOverlay>
        <S.PostOverlayElement>
          <S.IconWrapper>
            <Icon type="heart" />
          </S.IconWrapper>
          <Typography type="body3Bold">{likes}</Typography>
        </S.PostOverlayElement>
        <S.PostOverlayElement>
          <S.IconWrapper>
            <Icon type="comment" />
          </S.IconWrapper>
          <Typography type="body3Bold">{comments}</Typography>
        </S.PostOverlayElement>
      </S.PostOverlay>
    </S.Post>
  );
};

export { Post };
