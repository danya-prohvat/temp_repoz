import { useTranslation } from 'react-i18next';
import { Typography } from 'components/common/typography';
import { Button } from 'components/common/button';
import { locations } from 'routing/locations';
import { S } from './UserInfo.styles';

interface UserInfoProps {
  avatar: string | null;
  userName: string;
  postsCount: number;
  subscribersCount: number;
  subscriptionsCount: number;
  firstName: string;
  lastName: string;
  profileDescription: string;
  userId: number;
}

const UserInfo: React.FC<UserInfoProps> = ({
  avatar,
  userName,
  postsCount,
  subscribersCount,
  subscriptionsCount,
  firstName,
  lastName,
  profileDescription,
  userId,
}) => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.UserImg src={avatar || ''} />
      <S.ProfileInfo>
        <S.UserNameBlock>
          <S.UserName>
            <Typography type="heading4">{userName ? userName : t('MyAccount.NoUsernameYet')}</Typography>
          </S.UserName>
          <S.ButtonWrapper>
            <Button text="MyAccount.Saved" icon="saved" variant="outlined" />
          </S.ButtonWrapper>
          <S.ButtonWrapper>
            <Button text="MyAccount.Settings" icon="settings" variant="outlined" />
          </S.ButtonWrapper>
        </S.UserNameBlock>
        <S.SubscribeBlock>
          <S.PostElement>
            <S.PostSubElement>
              <Typography type="body3Bold">{postsCount}</Typography>
            </S.PostSubElement>
            <Typography type="body2">{t('MyAccount.Posts')}</Typography>
          </S.PostElement>
          <S.SubscribeElement to={locations.subscribers.replace(':userId', String(userId))}>
            <S.SubscribeSubElement>
              <Typography type="body3Bold">{subscribersCount}</Typography>
            </S.SubscribeSubElement>
            <Typography type="body2">{t('MyAccount.Subscribers')}</Typography>
          </S.SubscribeElement>
          <S.SubscribeElement to={locations.subscriptions.replace(':userId', String(userId))}>
            <S.SubscribeSubElement>
              <Typography type="body3Bold">{subscriptionsCount}</Typography>
            </S.SubscribeSubElement>
            <Typography type="body2">{t('MyAccount.Subscriptions')}</Typography>
          </S.SubscribeElement>
        </S.SubscribeBlock>
        <S.FullName>
          <S.Name>
            <Typography type="body3Bold">
              {firstName || lastName ? `${firstName} ${lastName}` : t('MyAccount.NoNameYet')}
            </Typography>
          </S.Name>
          <S.ProfileDescription>
            <Typography type="body2">
              {profileDescription ? profileDescription : t('MyAccount.NoDescriptionYet')}
            </Typography>
          </S.ProfileDescription>
        </S.FullName>
      </S.ProfileInfo>
    </S.Container>
  );
};

export { UserInfo };
