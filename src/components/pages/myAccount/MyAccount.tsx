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
          {/* <S.Div></S.Div>
          <S.Div></S.Div> */}
          <S.FullName>
            <Typography type="body3Bold">Kelly Millington</Typography>
            <Typography type="body2">Kelly Millington profile description</Typography>
          </S.FullName>
        </S.ProfileInfo>
      </S.UserInfo>
    </S.Container>
  );
};

export { MyAccount };
