import { useTranslation } from 'react-i18next';
import { Typography } from 'components/common/typography';
import { getUserInfo } from 'store/UserSlice';
import { useSelector } from 'hooks/useTypedSelector';
import { Button } from 'components/common/button';
import { locations } from 'routing/locations';
import { S } from './UserInfo.styles';
import { config } from 'config';

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
  const { id } = useSelector(getUserInfo);

  return (
    <S.Container>
      <S.UserImg src={avatar || config.constants.userIcon} />
      <S.ProfileInfo>
        <S.UserNameBlock>
          <S.UserName>
            <Typography type="heading4">{userName ? userName : t('MyAccount.NoUsernameYet')}</Typography>
          </S.UserName>
          {id === userId && (
            <>
              <S.ButtonWrapper>
                <Button text="MyAccount.Saved" icon="saved" variant="outlined" />
              </S.ButtonWrapper>
              <S.ButtonWrapper>
                <Button text="MyAccount.Settings" icon="settings" variant="outlined" />
              </S.ButtonWrapper>
            </>
          )}
        </S.UserNameBlock>
        <S.SubscribeBlock>
          <S.PostElement>
            <S.PostSubElement>
              <S.SubscribeSubElement>
                <Typography type="body3Bold">{postsCount || 0}</Typography>
              </S.SubscribeSubElement>
              <Typography type="body2">{t('MyAccount.Posts')}</Typography>
            </S.PostSubElement>
          </S.PostElement>
          <S.SubscribeElement to={locations.subscribers.replace(':userId', String(userId))}>
            <S.SubscribeSubElement>
              <Typography type="body3Bold">{subscribersCount || 0}</Typography>
            </S.SubscribeSubElement>
            <Typography type="body2">{t('MyAccount.Subscribers')}</Typography>
          </S.SubscribeElement>
          <S.SubscribeElement to={locations.subscriptions.replace(':userId', String(userId))}>
            <S.SubscribeSubElement>
              <Typography type="body3Bold">{subscriptionsCount || 0}</Typography>
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
            <Typography type="body2">{profileDescription || t('MyAccount.NoDescriptionYet')}</Typography>
          </S.ProfileDescription>
        </S.FullName>
      </S.ProfileInfo>
    </S.Container>
  );
};

export { UserInfo };
