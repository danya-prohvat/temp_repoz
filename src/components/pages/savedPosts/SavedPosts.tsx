import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'hooks/useTypedSelector';
import { Typography } from 'components/common/typography';
import { getSavedPostsThunk, getSavedPosts, getPostsInfo, checkAuthorization } from 'store/UserSlice';
import { Post } from 'components/common/post';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { S } from './SavedPosts.styles';
import { Loader } from 'components/common/loader';

const SavedPosts: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const savedPosts = useSelector(getSavedPosts);
  const { postLoader } = useSelector(getPostsInfo);
  const isAuthorized = useSelector(checkAuthorization);

  useEffect(() => {
    isAuthorized && dispatch(getSavedPostsThunk({ initialRequest: true }));
  }, [dispatch, isAuthorized]);

  useInfiniteScroll({
    loader: postLoader,
    isAuthorized: isAuthorized,
    callBack: () => getSavedPostsThunk({}),
  });

  return (
    <S.Container>
      <S.Posts>
        {savedPosts && savedPosts.length > 0 ? (
          savedPosts.map((savedPost) => (
            <Post
              key={savedPost.id}
              id={savedPost.id}
              src={savedPost.src}
              likes={savedPost.likesCount}
              comments={savedPost.commentsCount}
            />
          ))
        ) : (
          <S.MessageWrapper>
            <Typography type="body1">{t('SavedPostPage.NoSavedPostsYet')}</Typography>
          </S.MessageWrapper>
        )}
        {postLoader && <Loader />}
      </S.Posts>
    </S.Container>
  );
};

export { SavedPosts };
