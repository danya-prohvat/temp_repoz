import { useSelector } from 'hooks/useTypedSelector';
import { getUserInfo } from 'store/UserSlice';
import { useTranslation } from 'react-i18next';
import { Icon } from 'components/common/icon';
import { Typography } from 'components/common/typography';
import { locations } from 'routing/locations';
import { S } from './DropDownList.styles';

const DropDownList: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useSelector(getUserInfo);

  return (
    <S.Container>
      <S.Link to={locations.user.replace(':userId', String(id))}>
        <S.IconWrapper>
          <Icon type="user" />
        </S.IconWrapper>
        <Typography type="body1">{t(`MainPage.MyAccount`)}</Typography>
      </S.Link>
      <S.Link to={'/'}>
        <S.IconWrapper>
          <Icon type="settings" />
        </S.IconWrapper>
        <Typography type="body1">{t(`MainPage.SignOut`)}</Typography>
      </S.Link>
    </S.Container>
  );
};

export { DropDownList };
