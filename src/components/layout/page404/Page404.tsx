import { useTranslation } from 'react-i18next';
import { Typography } from 'components/common/typography';
import { S } from './Page404.styles';
import { Logo } from 'components/common/logo';

const Page404: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <S.Header>
        <Logo />
      </S.Header>
      <S.Main>
        <Typography type="body1">{t('404message')}</Typography>
      </S.Main>
    </>
  );
};

export { Page404 };
