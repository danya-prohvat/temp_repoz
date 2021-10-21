import { S } from './Main.styles';
import { Logo } from 'components/common/logo';
import { Avatar } from 'components/common/avatar';
import { Sidebar } from 'components/layout/sidebar';

const Main: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <Logo />
        <Avatar />
      </S.Header>
      <S.MainContent>
        <Sidebar />
      </S.MainContent>
    </S.Container>
  );
};

export { Main };
