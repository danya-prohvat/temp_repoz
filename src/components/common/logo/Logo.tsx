import { useTranslation } from 'react-i18next';
import { S } from './Logo.styles';
import { Icon } from 'components/common/icon';
import { Typography } from 'components/common/typography';
import { locations } from 'routing/locations';

const Logo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Container to={locations.home}>
      <S.Logo>
        <Icon type="logo" />
      </S.Logo>
      <S.H1>
        <Typography type="heading1Bold">{t('Media')}</Typography>
      </S.H1>
    </S.Container>
  );
};

export { Logo };
