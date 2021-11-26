import { useTranslation } from 'react-i18next';
import { Typography } from 'components/common/typography';
import { S } from './Authorize.styles';
import { Logo } from 'components/common/logo';
import { ExternalLink } from 'components/common/externalLink';
import { SignInForm } from 'components/core/signInForm';
import { SignUpForm } from 'components/core/signUpForm';
import { Icon } from 'components/common/icon';
import { config } from 'config';

interface AuthorizeProps {
  authorizeType: 'Sign In' | 'Sign Up';
}

const Authorize: React.FC<AuthorizeProps> = ({ authorizeType }) => {
  const { t } = useTranslation();

  return (
    <>
      <S.Header>
        <S.HeaderTitle>
          <Typography type="heading2">{authorizeType}</Typography>
        </S.HeaderTitle>
        <Logo />
      </S.Header>
      <S.Main>
        <S.Form>{authorizeType === 'Sign In' ? <SignInForm /> : <SignUpForm />}</S.Form>
      </S.Main>
      <S.Footer>
        <ExternalLink src={config.env.externalLink}>
          <Icon type="question-mark" />
          <S.LinkWrapper>
            <Typography type="body2">{t(`NeedHelp`)}</Typography>
          </S.LinkWrapper>
        </ExternalLink>
      </S.Footer>
    </>
  );
};

export { Authorize };
