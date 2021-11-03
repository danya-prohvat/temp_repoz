import { useTranslation } from 'react-i18next';
import { Icon } from 'components/common/icon';
import { Typography } from 'components/common/typography';
import { locations } from 'routing/locations';
import { S } from './DropDownList.styles';

const DropDownList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Link to={'/' + locations.user}>
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
