import { useSelector } from 'hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { getUserInfo, getPostsInfo, checkAuthorization, getPostsThunk } from 'store/UserSlice';
import { S } from './MyAccount.styles';
import { Typography } from 'components/common/typography';
import { PagesSeparator } from 'components/common/pagesSeparator';
import { Post } from 'components/common/post';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/common/button';
import { useEffect } from 'react';
import Loader from 'react-loader-spinner';

const MyAccount: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { userName, fullName, avatar, profileDescription, postsCount, subscribersCount, subscriptionsCount } =
    useSelector(getUserInfo);
  const isAuthorized = useSelector(checkAuthorization);
  const { posts, postLoader } = useSelector(getPostsInfo);

  useEffect(() => {
    isAuthorized && dispatch(getPostsThunk());
  }, [isAuthorized, dispatch]);

  useEffect(() => {
    // isAuthorized && dispatch(getPostsThunk());
    const detectBottomScroll = () => {
      if (
        !postLoader &&
        document.body.scrollHeight - 50 <= document.documentElement.scrollTop + document.documentElement.clientHeight
      )
        dispatch(getPostsThunk());
    };
    isAuthorized && document.addEventListener('scroll', detectBottomScroll);
    return () => document.removeEventListener('scroll', detectBottomScroll);
  }, [dispatch, isAuthorized, postLoader]);

  return (
    <S.Container>
      <S.UserInfo>
        <S.UserImg src={avatar} />
        <S.ProfileInfo>
          <S.UserNameBlock>
            <S.UserName>
              <Typography type="heading4">{userName}</Typography>
            </S.UserName>
            <S.ButtonWrapper>
              <Button text="MyAccount.Saved" icon="saved" variant="outlined" />
            </S.ButtonWrapper>
            <S.ButtonWrapper>
              <Button text="MyAccount.Settings" icon="settings" variant="outlined" />
            </S.ButtonWrapper>
          </S.UserNameBlock>
          <S.SubscribeBlock>
            <S.SubscribeElement>
              <Typography type="body3Bold">{postsCount}</Typography>{' '}
              <Typography type="body2">{t('MyAccount.Posts')}</Typography>
            </S.SubscribeElement>
            <S.SubscribeElement>
              <Typography type="body3Bold">{subscribersCount}</Typography>
              <Typography type="body2">{t('MyAccount.Subscribers')}</Typography>
            </S.SubscribeElement>
            <S.SubscribeElement>
              <Typography type="body3Bold">{subscriptionsCount}</Typography>
              <Typography type="body2">{t('MyAccount.Subscriptions')}</Typography>
            </S.SubscribeElement>
          </S.SubscribeBlock>
          <S.FullName>
            <S.Name>
              <Typography type="body3Bold">{fullName}</Typography>
            </S.Name>
            <S.ProfileDescription>
              <Typography type="body2">{profileDescription}</Typography>
            </S.ProfileDescription>
          </S.FullName>
        </S.ProfileInfo>
      </S.UserInfo>
      <PagesSeparator marginTop="60px" marginBottom="50px" />
      <S.Posts>
        {posts.map((post) => (
          <Post key={post.id} src={post.src} likes={post.likes} comments={post.comments} />
        ))}

        {postLoader && (
          <S.LoaderWrapper>
            <Loader type="Puff" color="#00BFFF" height={200} width={200} />
          </S.LoaderWrapper>
        )}
      </S.Posts>
    </S.Container>
  );
};

export { MyAccount };
