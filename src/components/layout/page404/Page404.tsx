import { Typography } from 'components/common/typography';
import { S } from './Page404.styles';
import { Logo } from 'components/common/logo';

const Page404: React.FC = () => {
  return (
    <>
      <S.Header>
        <Logo />
      </S.Header>
      <S.Main>
        <Typography type="body1">404 - Page not found</Typography>
      </S.Main>
    </>
  );
};

export { Page404 };
