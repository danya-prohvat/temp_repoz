import { useSelector } from 'hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { getUserInfo } from 'store/UserSlice';
import { useTranslation } from 'react-i18next';
import { resetUser } from 'store/UserSlice';
import { Icon } from 'components/common/icon';
import { Typography } from 'components/common/typography';
import { locations } from 'routing/locations';
import { S } from './DropDownList.styles';

const DropDownList: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { id } = useSelector(getUserInfo);

  const signOut = (): void => {
    dispatch(resetUser());
  };

  return (
    <S.Container>
      <S.Link to={'/' + locations.user + id}>
        <S.IconWrapper>
          <Icon type="user" />
        </S.IconWrapper>
        <Typography type="body1">{t(`MainPage.MyAccount`)}</Typography>
      </S.Link>
      <S.Link onClick={signOut} to={'/' + locations.signIn}>
        <S.IconWrapper>
          <Icon type="settings" />
        </S.IconWrapper>
        <Typography type="body1">{t(`MainPage.SignOut`)}</Typography>
      </S.Link>
    </S.Container>
  );
};

export { DropDownList };
