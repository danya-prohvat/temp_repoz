import { Typography } from 'components/common/typography';
import { S } from './Authorize.styles';
import { Logo } from 'components/common/logo';
import { ExternalLink } from 'components/common/externalLink';
import { config } from 'config';

interface AuthorizeProps {
  authorizeType: string;
}

const Authorize: React.FC<AuthorizeProps> = ({ authorizeType }) => {
  return (
    <>
      <S.Header>
        <S.HeaderTitle>
          <Typography type="heading2">{authorizeType}</Typography>
        </S.HeaderTitle>
        <Logo />
      </S.Header>
      <S.Main>signIn or sigUp</S.Main>
      <S.Footer>
        <ExternalLink text="externalLink" src={config.env.externalLink} />
      </S.Footer>
    </>
  );
};

export { Authorize };
