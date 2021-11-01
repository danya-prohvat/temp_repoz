import { Typography } from 'components/common/typography';
import { S } from './Authorize.styles';
import { Logo } from 'components/common/logo';
import { ExternalLink } from 'components/common/externalLink';
import { SignInForm } from 'components/core/signInForm';
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
      <S.Main>
        <S.Form>
          <SignInForm />
        </S.Form>
      </S.Main>
      <S.Footer>
        <ExternalLink text="NeedHelp" src={config.env.externalLink} />
      </S.Footer>
    </>
  );
};

export { Authorize };
