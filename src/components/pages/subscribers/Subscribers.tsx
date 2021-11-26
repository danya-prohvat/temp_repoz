import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { PagesSeparator } from 'components/common/pagesSeparator';
import { useSelector } from 'hooks/useTypedSelector';
import { Typography } from 'components/common/typography';
import { getUserInfo, getSubscribersThunk, getUserSubscribers } from 'store/UserSlice';
import { UserInfo } from 'components/core/userInfo';
import { S } from './Subscribers.styles';
import { config } from 'config';
import { Person } from 'components/common/person';
import { IconButton } from 'components/common/iconButton';
import { Input } from 'components/common/input';

const Subscribers: React.FC = () => {
  const { userId } = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    dispatch(getSubscribersThunk({ userId: Number(userId) }));
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
  const subscribers = useSelector(getUserSubscribers);
  const iconButtonOnClick = () => {
    setOpenSearch((prev) => !prev);
  };

  const searchInputOnChange = debounce((event) => {
    dispatch(getSubscribersThunk({ userId: Number(userId), search: event.target.value }));
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
        <Typography type="heading4">{t('Subscribers/subscriptions.Subscribers')}</Typography>
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
      <S.SubscribersWrapper>
        {subscribers?.length > 0 ? (
          subscribers.map((subscriber) => (
            <Person
              key={subscriber.id}
              id={subscriber.id}
              userName={subscriber.userName}
              description={subscriber.description}
              avatar={subscriber.avatar}
            />
          ))
        ) : (
          <S.Empty>
            <Typography type="body1">{t('Subscribers/subscriptions.YouDontHaveSubscribers')}</Typography>
          </S.Empty>
        )}
      </S.SubscribersWrapper>
    </S.Container>
  );
};

export { Subscribers };
