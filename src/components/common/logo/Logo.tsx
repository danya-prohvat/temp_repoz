import { S } from './Logo.styles';
import { Icon } from 'components/common/icon';

const Logo: React.FC = () => {
  return (
    <S.Container>
      <S.Logo>
        <Icon type="M" />
      </S.Logo>
      <S.H1>media</S.H1>
    </S.Container>
  );
};

export { Logo };
