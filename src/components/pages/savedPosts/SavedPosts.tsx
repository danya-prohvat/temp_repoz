import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'hooks/useTypedSelector';
import { Typography } from 'components/common/typography';
import { getSavedPostsThunk, getSavedPosts, getPostsInfo, checkAuthorization } from 'store/UserSlice';
import { Post } from 'components/common/post';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { S } from './SavedPosts.styles';
import { Loader } from 'components/common/loader';
import { Select } from 'components/common/select';
import { config } from 'config';
import { SingleValue } from 'react-select';

const SavedPosts: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const updateSelect = [
    ...config.constants.savedPostsSortingOptions.map((sortOption) => ({
      ...sortOption,
      label: t(sortOption.label),
    })),
  ];

  const [sortBy, setSortBy] = useState(updateSelect[0].value);

  const savedPosts = useSelector(getSavedPosts);
  const { postLoader } = useSelector(getPostsInfo);
  const isAuthorized = useSelector(checkAuthorization);

  useEffect(() => {
    isAuthorized && dispatch(getSavedPostsThunk({ initialRequest: true, sortBy: sortBy }));
  }, [dispatch, isAuthorized, sortBy]);

  useInfiniteScroll({
    loader: postLoader,
    isAuthorized: isAuthorized,
    callBack: () => getSavedPostsThunk({ sortBy: sortBy }),
  });

  const selectOnChange = (event: SingleValue<{ label: string; value: string }>) => {
    event && setSortBy(event.value);
  };

  return (
    <S.Container>
      <S.TopLine>
        <S.PageTitle>
          <Typography type="heading2">{t('SavedPostPage.MySavedPosts')}</Typography>
        </S.PageTitle>
        <Select options={updateSelect} defaultValue={updateSelect[0]} onChange={selectOnChange} />
      </S.TopLine>
      <S.Posts>
        {savedPosts && savedPosts.length > 0
          ? savedPosts.map((savedPost) => (
              <Post
                key={savedPost.id}
                id={savedPost.id}
                src={savedPost.src}
                likes={savedPost.likesCount}
                comments={savedPost.commentsCount}
              />
            ))
          : !postLoader && (
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
