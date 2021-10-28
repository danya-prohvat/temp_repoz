import { S } from './MainPage.styles';
import { Logo } from 'components/common/logo';
import { User } from 'components/common/user';
import { Sidebar } from 'components/core/sidebar';

const Main: React.FC = ({ children }) => {
  return (
    <>
      <S.Header>
        <Logo />
        <User />
      </S.Header>
      <S.MainContent>
        <Sidebar />
        {children}
      </S.MainContent>
    </>
  );
};

export { Main };
