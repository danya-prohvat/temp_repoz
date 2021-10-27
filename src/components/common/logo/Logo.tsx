import { useTranslation } from 'react-i18next';
import { S } from './Logo.styles';
import { Icon } from 'components/common/icon';
import { Typography } from 'components/common/typography';

const Logo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
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
