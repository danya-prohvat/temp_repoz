import { Icon } from 'components/common/icon';
import { Typography } from 'components/common/typography';
import { S } from './Post.styles';

interface PostProps {
  src: string;
  likes: number;
  comments: number;
}

const Post: React.FC<PostProps> = ({ src, likes, comments }) => {
  return (
    <S.Post>
      <S.PostImg src={src} />
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
