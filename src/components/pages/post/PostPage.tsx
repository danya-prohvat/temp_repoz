import { useSelector } from 'hooks/useTypedSelector';
import { useParams } from 'react-router-dom';
import { getPostsInfo } from 'store/UserSlice';
import { S } from './PostPage.styles';

const PostPage: React.FC = () => {
  const { postId } = useParams();
  const { posts } = useSelector(getPostsInfo);
  const post = posts.find((post) => post.id === Number(postId));

  return (
    <S.Post>
      Likes: {post?.likes} <br />
      Comments: {post?.comments} <br />
      img: <img src={post?.src} alt="post img" />
    </S.Post>
  );
};

export { PostPage };
