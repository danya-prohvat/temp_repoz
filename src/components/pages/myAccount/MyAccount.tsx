import { S } from './MyAccount.styles';
import { Typography } from 'components/common/typography';
import { useTranslation } from 'react-i18next';

const MyAccount: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.UserInfo>
        <S.UserImg src="https://wp.sitepen.com/wp-content/uploads/2016/09/improving-typescript-modules-featured-image.jpg" />
        <S.ProfileInfo>
          <S.UserNameBlock>
            <S.UserName>
              <Typography type="heading4">username</Typography>
            </S.UserName>
            <S.Button>
              <Typography type="body2">{t('MyAccount.Saved')}</Typography>
            </S.Button>
            <S.Button>
              <Typography type="body2">{t('MyAccount.Settings')}</Typography>
            </S.Button>
          </S.UserNameBlock>
          <S.SubscribeBlock>
            <S.SubscribeElement>
              <Typography type="body3Bold">50</Typography> <Typography type="body2">{t('MyAccount.Posts')}</Typography>
            </S.SubscribeElement>
            <S.SubscribeElement>
              <Typography type="body3Bold">708</Typography>{' '}
              <Typography type="body2">{t('MyAccount.Subscribers')}</Typography>
            </S.SubscribeElement>
            <S.SubscribeElement>
              <Typography type="body3Bold">708</Typography>{' '}
              <Typography type="body2">{t('MyAccount.Subscriptions')}</Typography>
            </S.SubscribeElement>
          </S.SubscribeBlock>
          <S.FullName>
            <S.Name>
              <Typography type="body3Bold">Kelly Millington</Typography>
            </S.Name>
            <S.ProfileDescription>
              <Typography type="body2">Kelly Millington profile description</Typography>
            </S.ProfileDescription>
          </S.FullName>
        </S.ProfileInfo>
      </S.UserInfo>
    </S.Container>
  );
};

export { MyAccount };
