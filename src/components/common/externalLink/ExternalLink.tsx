import { Typography } from 'components/common/typography';
import { S } from './ExternalLink.styles';

interface ExternalLinkProps {
  scr: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ scr }) => {
  return (
    <S.Container>
      <S.Icon className="icon-question-mark" />
      <S.A href={scr}>
        <Typography type="body1">Need help?</Typography>
      </S.A>
    </S.Container>
  );
};

export { ExternalLink };
