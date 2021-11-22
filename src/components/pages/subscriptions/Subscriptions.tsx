import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { PagesSeparator } from 'components/common/pagesSeparator';
import { useSelector } from 'hooks/useTypedSelector';
import { Typography } from 'components/common/typography';
import { getUserInfo, getSubscriptionsThunk, getUserSubscriptions } from 'store/UserSlice';
import { UserInfo } from 'components/core/userInfo';
import { S } from './Subscriptions.styles';
import { config } from 'config';
import { Pearson } from 'components/common/pearson';
import { IconButton } from 'components/common/iconButton';
import { Input } from 'components/common/input';

const Subscriptions: React.FC = () => {
  const { userId } = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    dispatch(getSubscriptionsThunk({ userId: Number(userId) }));
  }, [dispatch, userId]);

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
  const subscriptions = useSelector(getUserSubscriptions);

  const iconButtonOnClick = () => {
    setOpenSearch(!openSearch);
  };

  const searchInputOnChange = debounce((event) => {
    dispatch(getSubscriptionsThunk({ userId: Number(userId), search: event.target.value }));
  }, config.env.debounceTiming);

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
      <S.PageTitle>
        <Typography type="heading4">{t('Subscribers/subscriptions.Subscriptions')}</Typography>
        <S.Search>
          <IconButton onClick={iconButtonOnClick} icon="search" />
          {openSearch && (
            <S.InputWrapper>
              <Input
                onChange={searchInputOnChange}
                label="Subscribers/subscriptions.Search"
                inputName="search"
                minWidth="250px"
              />
            </S.InputWrapper>
          )}
        </S.Search>
      </S.PageTitle>
      <S.SubscriptionsWrapper>
        {subscriptions && subscriptions.length > 0 ? (
          subscriptions.map((subscription) => (
            <Pearson
              key={subscription.id}
              id={subscription.id}
              userName={subscription.userName}
              description={subscription.description}
              avatar={subscription.avatar}
            />
          ))
        ) : (
          <S.Empty>
            <Typography type="body1">{t('Subscribers/subscriptions.YouDontHaveSubscriptions')}</Typography>
          </S.Empty>
        )}
      </S.SubscriptionsWrapper>
    </S.Container>
  );
};

export { Subscriptions };
