import { useEffect } from 'react';
import { useSelector } from 'hooks/useTypedSelector';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getUserInfo, getPostsInfo, checkAuthorization, getPostsThunk } from 'store/UserSlice';
import { S } from './MyAccount.styles';
import { Typography } from 'components/common/typography';
import { PagesSeparator } from 'components/common/pagesSeparator';
import { Post } from 'components/common/post';
import { Loader } from 'components/common/loader';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { UserInfo } from 'components/core/userInfo';

const MyAccount: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { userId } = useParams();

  const {
    userName,
    firstName,
    lastName,
    avatar,
    profileDescription,
    postsCount,
    subscribersCount,
    subscriptionsCount,
  } = useSelector(getUserInfo);
  const isAuthorized = useSelector(checkAuthorization);
  const { posts, postLoader } = useSelector(getPostsInfo);

  useEffect(() => {
    isAuthorized && dispatch(getPostsThunk(Number(userId)));
  }, [isAuthorized, dispatch, userId]);

  useInfiniteScroll({
    loader: postLoader,
    isAuthorized: isAuthorized,
    callBack: () => getPostsThunk(Number(userId)),
  });

  return (
    <S.Container>
      <UserInfo
        avatar={avatar}
        userName={userName}
        postsCount={postsCount}
        subscribersCount={subscribersCount}
        subscriptionsCount={subscriptionsCount}
        firstName={firstName}
        lastName={lastName}
        profileDescription={profileDescription}
        userId={Number(userId)}
      />
      <PagesSeparator marginTop="60px" marginBottom="50px" />
      <S.Posts>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post key={post.id} id={post.id} src={post.src} likes={post.likesCount} comments={post.commentsCount} />
          ))
        ) : (
          <S.MessageWrapper>
            <Typography type="body1">{t('PostPage.NoPostsYet')}</Typography>
          </S.MessageWrapper>
        )}
        {postLoader && <Loader />}
      </S.Posts>
    </S.Container>
  );
};

export { MyAccount };
