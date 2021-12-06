import { useEffect } from 'react';
import { useSelector } from 'hooks/useTypedSelector';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getUserInfo, getPostsInfo, checkAuthorization, getPostsThunk } from 'store/UserSlice';
import { getAnotherUserInfo, getAnotherUserThunk } from 'store/AnotherUserSlice';
import { S } from './MyAccount.styles';
import { Typography } from 'components/common/typography';
import { PagesSeparator } from 'components/common/pagesSeparator';
import { Post } from 'components/common/post';
import { Loader } from 'components/common/loader';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { PageLoader } from 'hocs/pageLoader';
import { UserInfo } from 'components/core/userInfo';

const MyAccount: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { userId } = useParams();
  const { id } = useSelector(getUserInfo);
  const isAuthorized = useSelector(checkAuthorization);

  const {
    userName,
    firstName,
    lastName,
    avatar,
    profileDescription,
    postsCount,
    subscribersCount,
    subscriptionsCount,
  } = useSelector(String(userId) !== String(id) ? getAnotherUserInfo : getUserInfo);

  const { posts, postLoader } = useSelector(getPostsInfo);

  useEffect(() => {
    (async function () {
      if (isAuthorized && String(userId) !== String(id)) await dispatch(getAnotherUserThunk(Number(userId)));
      isAuthorized && dispatch(getPostsThunk({ userId: Number(userId), initialRequest: true }));
    })();
  }, [isAuthorized, dispatch, userId, id]);

  useInfiniteScroll({
    loader: postLoader,
    isAuthorized: isAuthorized,
    callBack: () => getPostsThunk({ userId: Number(userId) }),
  });

  return (
    <PageLoader>
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
          {!postLoader && !(posts.length > 0) ? (
            <S.MessageWrapper>
              <Typography type="body1">{t('PostPage.NoPostsYet')}</Typography>
            </S.MessageWrapper>
          ) : (
            posts.map((post) => (
              <Post key={post.id} id={post.id} src={post.src} likes={post.likesCount} comments={post.commentsCount} />
            ))
          )}
          {postLoader && <Loader />}
        </S.Posts>
      </S.Container>
    </PageLoader>
  );
};

export { MyAccount };
