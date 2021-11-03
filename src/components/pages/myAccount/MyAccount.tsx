import { S } from './MyAccount.styles';
import { Typography } from 'components/common/typography';
import { PagesSeparator } from 'components/common/pagesSeparator';
import { Post } from 'components/common/post';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/common/button';

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
            <S.ButtonWrapper>
              <Button text="MyAccount.Saved" icon="saved" variant="outlined" />
            </S.ButtonWrapper>
            <S.ButtonWrapper>
              <Button text="MyAccount.Settings" icon="settings" variant="outlined" />
            </S.ButtonWrapper>
          </S.UserNameBlock>
          <S.SubscribeBlock>
            <S.SubscribeElement>
              <Typography type="body3Bold">50</Typography> <Typography type="body2">{t('MyAccount.Posts')}</Typography>
            </S.SubscribeElement>
            <S.SubscribeElement>
              <Typography type="body3Bold">708</Typography>
              <Typography type="body2">{t('MyAccount.Subscribers')}</Typography>
            </S.SubscribeElement>
            <S.SubscribeElement>
              <Typography type="body3Bold">708</Typography>
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
      <PagesSeparator marginTop="60px" marginBottom="50px" />
      <S.Posts>
        <Post
          src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736401_960_720.png"
          likes={67}
          comments={1}
        />
        <Post
          src="https://devblogs.microsoft.com/typescript/wp-content/uploads/sites/11/2018/08/typescriptfeature.png"
          likes={10}
          comments={1}
        />
        <Post
          src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"
          likes={17}
          comments={1}
        />
        <Post
          src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"
          likes={10}
          comments={51}
        />
        <Post
          src="https://devblogs.microsoft.com/typescript/wp-content/uploads/sites/11/2018/08/typescriptfeature.png"
          likes={54}
          comments={1}
        />
        <Post
          src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736401_960_720.png"
          likes={1}
          comments={2}
        />
      </S.Posts>
    </S.Container>
  );
};

export { MyAccount };
