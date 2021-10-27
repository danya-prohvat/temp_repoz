import { useTranslation } from 'react-i18next';
import { Typography } from 'components/common/typography';
import { S } from './ExternalLink.styles';

interface ExternalLinkProps {
  src: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ src }) => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Icon className="icon-question-mark" />
      <S.A href={src}>
        <Typography type="body1">{t('externalLink')}</Typography>
      </S.A>
    </S.Container>
  );
};

export { ExternalLink };
